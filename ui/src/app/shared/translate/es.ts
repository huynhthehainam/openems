export const TRANSLATION = {
    General: {
        active: 'Activo',
        actualPower: 'e-car Carga',
        autarchy: 'Autosuficiencia',
        automatic: 'Automático',
        cancel: 'cancelar',
        capacity: 'Capacidad',
        changeAccepted: 'Cambio aceptado',
        changeFailed: 'Cambio fallido',
        chargeDischarge: 'Débito/Descarga',
        chargePower: 'Carga',
        componentInactive: 'El componente está inactivo!',
        connectionLost: 'Conexión perdida. Intentando reconectar.',
        consumption: 'Consumo',
        cumulative: 'Valores Acumulativos',
        currentValue: 'Valor actual',
        dateFormat: 'dd.MM.yyyy', // e.g. German: dd.MM.yyyy, English: yyyy-MM-dd (dd = Day, MM = Month, yyyy = Year)
        dischargePower: 'Descarga',
        fault: 'Error',
        grid: 'Red',
        gridBuy: 'Relación',
        gridBuyAdvanced: 'Relación',
        gridSell: 'Fuente de alimentación',
        gridSellAdvanced: 'Fuente de alimentación',
        history: 'Historia',
        inactive: 'Inactivo',
        info: 'Informacion',
        inputNotValid: 'Entrada inválida',
        live: 'Live',
        load: 'la cantidad',
        manually: 'a mano',
        measuredValue: 'Valor Medido',
        mode: 'Modo',
        more: 'Más...',
        noValue: 'Sin valor',
        off: 'Apagado',
        offGrid: 'No hay conexión de red',
        ok: 'ok',
        On: 'Conmutada',
        otherConsumption: 'otro Consumo',
        percentage: 'Por ciento',
        periodFromTo: 'de {{value1}} para {{value2}}', // value1 = beginning date, value2 = end date
        phase: 'Fase',
        phases: 'Fases',
        power: 'Rendimiento',
        production: 'Producción',
        reportValue: 'Reportar datos corruptos',
        search: 'Búsqueda',
        selfConsumption: 'Autoconsumo',
        soc: 'Cargo',
        state: 'Estado',
        storageSystem: 'Almacenamiento',
        systemState: 'Estado del sistema',
        total: 'consumo total',
        totalState: 'Condición general',
        warning: 'Advertencia',
        Week: {
            monday: 'Lunes',
            tuesday: 'Martes',
            wednesday: 'Miércoles',
            thursday: 'Jueves',
            friday: 'Viernes',
            saturday: 'Sábado',
            sunday: 'Domingo'
        },
        Month: {
            january: 'Enero',
            february: 'Febrero',
            march: 'Marzo',
            april: 'Abril',
            may: 'Mayo',
            june: 'Junio',
            july: 'Julio',
            august: 'Agosto',
            september: 'Septiembre',
            october: 'Octubre',
            november: 'Noviembre',
            december: 'Diciembre',
        },
    },
    Menu: {
        aboutUI: 'Sobre OpenEMS-UI',
        edgeSettings: 'Configuración hy-control',
        generalSettings: 'Configuración general',
        index: 'Visión general',
        logout: 'Desuscribirse',
        menu: 'Menú',
        overview: 'estudio hy-control',
    },
    Index: {
        allConnected: 'Todas las conexiones establecidas.',
        connectionFailed: 'Conexión a {{value}} seperados.', // value = name of websocket
        connectionSuccessful: 'Conexión a {{value}} hecho.', // value = name of websocket
        isOffline: 'OpenEMS está fuera de línea!',
        toEnergymonitor: 'Al monitor de energía...',
    },
    Edge: {
        Index: {
            Energymonitor: {
                activePower: 'Potencia de salida',
                consumptionWarning: 'Consumo y productores desconocidos',
                gridMeter: 'Medidor de potencia',
                productionMeter: 'Contador de generación',
                reactivePower: 'Potencia reactiva',
                storage: 'Memoria',
                storageCharge: 'Carga del almacenaje',
                storageDischarge: 'Descarga de memoria',
                title: 'Monitor de energía',
            },
            Widgets: {
                autarchyInfo: 'La autarquía indica el porcentaje de energía actual que puede cubrirse mediante la descarga de generación y almacenamiento.',
                phasesInfo: 'La suma de las fases individuales puede diferir ligeramente del total por razones técnicas.',
                selfconsumptionInfo: 'El autoconsumo indica el porcentaje de la salida generada actualmente que puede ser utilizado por el consumo directo y la carga de almacenamiento.',
                twoWayInfoGrid: 'Negative Werte entsprechen Netzeinspeisung, Positive Werte entsprechen Netzbezug',
                twoWayInfoStorage: 'Negative Werte entsprechen Speicher Beladung, Positive Werte entsprechen Speicher Entladung',
                Channeltreshold: {
                    output: 'Salida'
                },
                Singlethreshold: {
                    above: 'Sobre',
                    behaviour: 'Comportamiento',
                    below: 'Por debajo',
                    currentValue: 'Valor actual',
                    dependendOn: 'Dependiendo de',
                    minSwitchingTime: 'Conmutación mínimo',
                    other: 'Otro',
                    relationError: 'El umbral debe ser mayor que la carga conmutada',
                    switchedLoadPower: 'Carga conmutada',
                    switchOffAbove: 'Apagar a través de',
                    switchOffBelow: 'Apagar bajo',
                    switchOnAbove: 'Encender a través de',
                    switchOnBelow: 'Encender debajo',
                    threshold: 'Thresholded',
                },
                Peakshaving: {
                    asymmetricInfo: 'Los valores de rendimiento introducidos se refieren a fases individuales. Se ajusta a la fase más estresada.',
                    mostStressedPhase: 'Fase mayormente estresada',
                    peakshaving: 'Afeitado máximo',
                    peakshavingPower: 'Descarga sobre',
                    rechargePower: 'Cargando debajo',
                    relationError: 'Límite de descarga debe ser mayor o igual que el límite de carga',
                },
                CHP: {
                    highThreshold: 'Umbral alto',
                    lowThreshold: 'Umbral bajo',
                },
                EVCS: {
                    activateCharging: 'Activar la estación de carga.',
                    amountOfChargingStations: 'Cantidad de estaciones de carga',
                    cable: 'Cable',
                    cableNotConnected: 'El cable no esta conectado',
                    carFull: 'El carro esta lleno',
                    chargeLimitReached: 'Límite de carga alcanzado',
                    chargeMode: 'Modo de carga',
                    chargeTarget: 'Objetivo de carga',
                    charging: 'Inicio de Carga',
                    chargingLimit: 'Límite de carga',
                    chargingPower: 'Energía de carga',
                    chargingStation: 'Carga',
                    chargingStationCluster: 'Grupo de estaciones de carga',
                    chargingStationDeactivated: 'Estación de carga desactivada',
                    chargingStationPluggedIn: 'Estación de carga encufada',
                    chargingStationPluggedInEV: 'Estación de carga + e-Car enchufado',
                    chargingStationPluggedInEVLocked: 'Estación de carga + e-Car enchufado + bloqueando',
                    chargingStationPluggedInLocked: 'Estación de carga enchufada + bloqueado',
                    clusterConfigError: 'Se ha producido un error en la configuración del clúster Evcs.',
                    currentCharge: 'Carga actual',
                    energieSinceBeginning: 'Energía desde el último inicio de carga',
                    energyLimit: 'Límite de la energía',
                    enforceCharging: 'Forzar la carga',
                    error: 'Error',
                    maxEnergyRestriction: 'Limite la energía máxima por carga',
                    notAuthorized: 'No autorizado',
                    notCharging: 'No cobrar',
                    notReadyForCharging: 'No está liesto para la carga',
                    overviewChargingStations: 'Resumen de estaciones de carga',
                    prioritization: 'Priorización',
                    readyForCharging: 'Listo para cargar',
                    starting: 'Comenzó',
                    status: 'Status',
                    totalCharge: 'Carga total',
                    totalChargingPower: 'Potencia de carga total',
                    unplugged: 'No conectado',
                    NoConnection: {
                        description: 'No se pudo conectar a la estación de carga.',
                        help1_1: 'La IP de la estación de carga aparece cuando se enciende nuevamente',
                        help1: 'Compruebe si la estación de carga está encendida y se puede acceder a ella a través de la red',
                    },
                    OptimizedChargeMode: {
                        info: 'En este modo, la carga del automóvil se ajusta a la producción y consumo actuales.',
                        minChargePower: 'velocidad de carga',
                        minCharging: 'Garantía de carga mínima',
                        minInfo: 'Si desea evitar que el automóvil no se cargue por la noche, puede establecer un cargo mínimo.',
                        name: 'Carga optimizada',
                        shortName: 'automáticamente',
                        ChargingPriority: {
                            car: 'Coche',
                            info: 'Dependiendo de la priorización, el componente seleccionado se cargará primero',
                            storage: 'Almacenamiento',
                        }
                    },
                    ForceChargeMode: {
                        info: 'En este modo se aplica la carga del automóvil, i. Siempre se garantiza que el automóvil se cargará, incluso si la estación de carga necesita acceder a la red eléctrica.',
                        maxCharging: 'Fuerza de carga maxima:',
                        maxChargingDetails: 'Si el automóvil no puede cargar el valor máximo introducido, la potencia se limita automáticamente.',
                        name: 'Carga forzada',
                        shortName: 'a mano',
                    }
                },
                Heatingelement: {
                    activeLevel: 'Fases level',
                    endtime: 'Los días pasados',
                    energy: 'Energía',
                    heatingelement: 'Elemento de calefacción',
                    minimalEnergyAmount: 'Cantidad mínima de energía',
                    minimumRunTime: 'Plazo mínimo',
                    priority: 'Prioridad',
                    time: 'Tiempo',
                    timeCountdown: 'Hora de empezar',
                }
            }
        },
        History: {
            activeDuration: 'duración activa',
            beginDate: 'Seleccionar fecha de inicio',
            day: 'Día',
            endDate: 'Seleccionar fecha de finalización',
            export: 'descargar como archivo de excel',
            go: 'Nwo!',
            lastMonth: 'El me pasado',
            lastWeek: 'La semana pasada',
            lastYear: 'El año pasado',
            month: 'Mes',
            noData: 'sin datos disponibles',
            otherPeriod: 'Otro período',
            period: 'Período',
            selectedDay: '{{value}}',
            selectedPeriod: 'Período seleccionado: ',
            today: 'Hoy',
            week: 'Semana',
            year: 'Año',
            yesterday: 'Ayer',
            sun: 'Dom',
            mon: 'Lun',
            tue: 'Mar',
            wed: 'Mié',
            thu: 'Jue',
            fri: 'Vie',
            sat: 'Sáb',
            jan: 'Ene',
            feb: 'Feb',
            mar: 'Mar',
            apr: 'Abr',
            may: 'May',
            jun: 'Jun',
            jul: 'Jul',
            aug: 'Ago',
            sep: 'Sep',
            oct: 'Oct',
            nov: 'Nov',
            dec: 'Dic'
        },
        Config: {
            Index: {
                addComponents: 'Instalar componentes',
                adjustComponents: 'Configurar componentes',
                bridge: 'Conexiones y dispositivos',
                controller: 'Aplicaciones',
                dataStorage: 'Almacenamiento de datos',
                executeSimulator: 'Ejecutar simulaciones',
                liveLog: 'Protocolos de sistema de vida',
                log: 'Registro',
                manualControl: 'Control manual',
                renameComponents: 'Renombrar componentes',
                scheduler: 'Planificador de aplicaciones',
                simulator: 'Simulador',
                systemExecute: 'Ejecutar comando del sistema',
                systemProfile: 'Perfil del Sistema',
            },
            More: {
                manualCommand: 'Comando manual',
                manualpqPowerSpecification: 'Especificaciones de rendimiento',
                manualpqReset: 'Restablecer',
                manualpqSubmit: 'Tomar',
                refuInverter: 'REFU Inversor',
                refuStart: 'Empezar',
                refuStartStop: 'Iniciar/detener inversor',
                refuStop: 'Parada',
                send: 'Enviar',
            },
            Scheduler: {
                always: 'Siempre',
                class: 'Clase:',
                contact: 'Eso no debería suceder. Póngase es contacto con <a href=\'mailto:{{value}}\'>{{value}}</a>.',
                newScheduler: 'Nuevo programador...',
                notImplemented: 'Formulario no implementado: ',
            },
            Log: {
                automaticUpdating: 'Actualización automática',
                level: 'Nivel',
                message: 'Mensaje',
                source: 'Ésos',
                timestamp: 'Hora',
            },
            Controller: {
                app: 'Aplicación:',
                internallyID: 'Interno ID:',
                priority: 'Priodad:',
            },
            Bridge: {
                newConnection: 'Nueva conexión...',
                newDevice: 'Nuevo dispositivo...',
            },
            Kaco: {
                ChangePassword: "Change inverter password",
                EnterNewPassword: "Enter new inverter password",
                UpdatePassword: "Update password",
                UpdateSuccess: "Succesfully updated password!",
                UpdateError: "Error updating the password"
            }
        }
    },
    About: {
        build: 'Esta compilación',
        contact: 'Para preguntas y sugerencias sobre el sistema, por favor contacte a nuestro OpenEMS-Team en <a href=\'mailto:{{value}}\'>{{value}}</a>.',
        currentDevelopments: 'Desarrollos actuales',
        developed: 'Esta interfaz de usario es desarrollada por FENECON como software de código abierto.',
        fenecon: 'Acerca de FENECON',
        language: 'Seleccionar idioma:',
        openEMS: 'Acerca de OpenEMS',
        ui: 'Interfaz de usario para OpenEMS',
    },
    Notifications: {
        authenticationFailed: 'Sin conexión: error de autenticación.',
        closed: 'Conexión terminada.',
        failed: 'Error al configurar la conexión.',
        loggedIn: 'Registrado.',
        loggedInAs: 'Conectado como usuario \'{{value}}\'.', // value = username
    },
    KacoError: {
        Errors: "Error / Advertencia"
    },
    KacoUpdate: {
        NewSoftware: "¡Una nueva versión del software hy-control está disponible!",
        NewUi: "¡Una nueva versión de la interfaz de usuario hy-control está disponible!",
        Update: "Actualizar",
        OpenLocal: "Abra su hy-control local y siga las instrucciones.",
        Success1: "<p>¡Actualización de la IU exitosa!</p><p>Cierre la IU y ábrala nuevamente.</p>",
        Success2: "<p>¡Actualización de software exitosa!</p><p>El software se reiniciará ahora. Pueden pasar unos minutos hasta que pueda volver a usar el software.</p>",
        Success3: "<p>¡Actualizaciones de software y UI exitosas!</p><p>El software se reiniciará ahora. Pueden pasar unos minutos hasta que pueda volver a usar el software.</p>",
        Error1: "<p>Se produjo un error durante la actualización de la interfaz de usuario. Inténtalo de nuevo la próxima vez que abras la interfaz de usuario.</p>",
        Error2: "<p>Se produjo un error durante la actualización del software. Inténtalo de nuevo la próxima vez que abras la interfaz de usuario.</p>",
        Error3: "<p>Se produjo un error durante las actualizaciones de software y UI. Inténtalo de nuevo la próxima vez que abras la interfaz de usuario.</p>",
        IsUpdating: "Actualización en progreso. ¡Por favor no cierre esta ventana!",
        Step1: "Descargando actualización de IU...",
        Step2: "Crear copia de seguridad...",
        Step3: "Instalación de la actualización de la interfaz de usuario...",
        Step4: "Descarga de actualización de software...",
        Step5: "Instalar actualización de software...",
        Step6: "Restaurar copia de seguridad...",
    }
}
