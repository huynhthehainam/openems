package io.openems.edge.battery.soltaro;

import io.openems.edge.battery.api.Battery;
import io.openems.edge.battery.api.CellCharacteristic;
import io.openems.edge.common.channel.IntegerReadChannel;

public class SetAllowedCurrents {

	public static final double CHARGE_DISCHARGE_FACTOR = 0.02;
	public static final int MINIMUM_CURRENT = 1;
	public static final int TOLERANCE_MV = 10;
	public static final int MAX_INCREASE_MILLIAMPERE = 300;
	
	private int lastMaxChargeCurrentFromBmsMilliAmpere = 0;
	private int lastMaxDischargeCurrentFromBmsMilliAmpere = 0;
	
	private final CellCharacteristic cellCharacteristic = new SoltaroCellCharacteristic();
	
	IntegerReadChannel maxChargeCurrentChannel;
	IntegerReadChannel maxDischargeCurrentChannel;
	Battery battery;
	
	
	public SetAllowedCurrents(IntegerReadChannel maxChargeCurrentChannel,
			IntegerReadChannel maxDischargeCurrentChannel, Battery battery) {
		super();
		this.maxChargeCurrentChannel = maxChargeCurrentChannel;
		this.maxDischargeCurrentChannel = maxDischargeCurrentChannel;
		this.battery = battery;
	}
	
	/**
	 * Calculates the allowed currents.
	 */
	public void act() {

		int maxChargeCurrentFromBmsMilliAmpere = this.maxChargeCurrentChannel.value().orElse(0);

		// limit increasing
		if (maxChargeCurrentFromBmsMilliAmpere > this.lastMaxChargeCurrentFromBmsMilliAmpere + MAX_INCREASE_MILLIAMPERE) {
			maxChargeCurrentFromBmsMilliAmpere = this.lastMaxChargeCurrentFromBmsMilliAmpere + MAX_INCREASE_MILLIAMPERE;
		}
		this.lastMaxChargeCurrentFromBmsMilliAmpere = maxChargeCurrentFromBmsMilliAmpere;

		int maxDischargeCurrentFromBmsMilliAmpere = this.maxDischargeCurrentChannel.value().orElse(0);

		// limit increasing
		if (maxDischargeCurrentFromBmsMilliAmpere > this.lastMaxDischargeCurrentFromBmsMilliAmpere + MAX_INCREASE_MILLIAMPERE) {
			maxDischargeCurrentFromBmsMilliAmpere = this.lastMaxDischargeCurrentFromBmsMilliAmpere + MAX_INCREASE_MILLIAMPERE;
		}
		this.lastMaxDischargeCurrentFromBmsMilliAmpere = maxDischargeCurrentFromBmsMilliAmpere;

		setMaxAllowedCurrents(this.cellCharacteristic, maxChargeCurrentFromBmsMilliAmpere / 1000,
				maxDischargeCurrentFromBmsMilliAmpere / 1000, this.battery);
		
	}
	
	/**
	 * Sets the MaxAllowedCurrents.
	 * @param cellCharacteristic the {@link CellCharacteristic}
	 * @param maxChargeCurrentFromBms int
	 * @param maxDischargeCurrentFromBms int
	 * @param battery the {@link Battery}
	 */
	public static void setMaxAllowedCurrents(CellCharacteristic cellCharacteristic, int maxChargeCurrentFromBms,
			int maxDischargeCurrentFromBms, Battery battery) {

		int maxChargeCurrent = maxChargeCurrentFromBms;
		int maxDischargeCurrent = maxDischargeCurrentFromBms;

		if (!areApiValuesPresent(battery)) {
			maxChargeCurrent = 0;
			maxDischargeCurrent = 0;
		} else {
			if (isChargingAlready(battery)) {
				if (isFurtherChargingNecessary(cellCharacteristic, battery)) {
					maxDischargeCurrent = calculateForceDischargeCurrent(battery);
				}
			} else {
				if (isVoltageBelowFinalDischargingVoltage(cellCharacteristic, battery)) {
					if (isVoltageHigherThanForceChargeVoltage(cellCharacteristic, battery)) {
						maxDischargeCurrent = 0;
					} else {
						maxDischargeCurrent = calculateForceDischargeCurrent(battery);
					}
				}
			}

			if (isDischargingAlready(battery)) {
				if (isFurtherDischargingNecessary(cellCharacteristic, battery)) {
					maxChargeCurrent = calculateForceChargeCurrent(battery);
				}
			} else {
				if (isVoltageAboveFinalChargingVoltage(cellCharacteristic, battery)) {
					if (isVoltageLowerThanForceDischargeVoltage(cellCharacteristic, battery)) {
						maxChargeCurrent = 0;
					} else {
						maxChargeCurrent = calculateForceChargeCurrent(battery);
					}
				}
			}
		}

		setChannelsForCharge(maxChargeCurrent, battery);
		setChannelsForDischarge(maxDischargeCurrent, battery);
	}

	protected static void setChannelsForDischarge(int maxDischargeCurrent, Battery battery) {
		battery._setDischargeMaxCurrent(maxDischargeCurrent);

		boolean forceChargeNecessary = maxDischargeCurrent < 0;
		battery._setForceChargeActive(forceChargeNecessary);
	}

	protected static void setChannelsForCharge(int maxChargeCurrent, Battery battery) {
		battery._setChargeMaxCurrent(maxChargeCurrent);

		boolean forceDischargeNecessary = maxChargeCurrent < 0;
		battery._setForceDischargeActive(forceDischargeNecessary);
	}

	protected static boolean isVoltageLowerThanForceDischargeVoltage(CellCharacteristic cellCharacteristic,
			Battery battery) {
		return battery.getMaxCellVoltage().get() < cellCharacteristic.getForceDischargeCellVoltage_mV();
	}

	protected static boolean isVoltageAboveFinalChargingVoltage(CellCharacteristic cellCharacteristic,
			Battery battery) {
		return battery.getMaxCellVoltage().get() > cellCharacteristic.getFinalCellChargeVoltage_mV();
	}

	protected static boolean isVoltageHigherThanForceChargeVoltage(CellCharacteristic cellCharacteristic,
			Battery battery) {
		return battery.getMinCellVoltage().get() > cellCharacteristic.getForceChargeCellVoltage_mV();
	}

	protected static boolean isVoltageBelowFinalDischargingVoltage(CellCharacteristic cellCharacteristic,
			Battery battery) {
		return battery.getMinCellVoltage().get() < cellCharacteristic.getFinalCellDischargeVoltage_mV();
	}

	protected static boolean isFurtherDischargingNecessary(CellCharacteristic cellCharacteristic, Battery battery) {
		if (!battery.getForceDischargeActive().isDefined()) {
			return false;
		}
		return (battery.getForceDischargeActive().get()
				&& battery.getMaxCellVoltage().get() > cellCharacteristic.getFinalCellChargeVoltage_mV());
	}

	protected static boolean isDischargingAlready(Battery battery) {
		return (battery.getForceDischargeActive().isDefined() && battery.getForceDischargeActive().get());
	}

	protected static int calculateForceDischargeCurrent(Battery battery) {
		return calculateForceCurrent(battery);
	}

	protected static int calculateForceChargeCurrent(Battery battery) {
		return calculateForceCurrent(battery);
	}

	protected static int calculateForceCurrent(Battery battery) {
		double capacity = battery.getCapacity().get();
		double voltage = battery.getVoltage().get();
		double power = capacity * CHARGE_DISCHARGE_FACTOR;
		double current = power / voltage;
		int value = -(int) Math.max(MINIMUM_CURRENT, current);
		return value;
	}

	protected static boolean isFurtherChargingNecessary(CellCharacteristic cellCharacteristic, Battery battery) {
		if (!battery.getForceChargeActive().isDefined()) {
			return false;
		}
		return battery.getForceChargeActive().get()
				&& battery.getMinCellVoltage().get() < (cellCharacteristic.getFinalCellDischargeVoltage_mV() - TOLERANCE_MV);
	}

	protected static boolean isChargingAlready(Battery battery) {
		return (battery.getForceChargeActive().isDefined() && battery.getForceChargeActive().get());
	}

	protected static boolean areApiValuesPresent(Battery battery) {
		return battery.getCapacity().isDefined() && battery.getVoltage().isDefined()
				&& battery.getMinCellVoltage().isDefined() && battery.getMaxCellVoltage().isDefined();
	}
}
