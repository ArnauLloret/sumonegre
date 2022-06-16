function davant () {
    motorbit.forward(100)
    basic.pause(200)
    motorbit.forward(85)
    alerta_2 = 0
    sensor_davant = 1
    while (sensor_davant == 1 && alerta_2 == 0) {
        sensor_davant = pins.digitalReadPin(DigitalPin.P15)
        sonar_2 = sonar.ping(
        DigitalPin.P9,
        DigitalPin.P11,
        PingUnit.Centimeters
        )
        if (sonar_2 > 2 && sonar_2 < 40) {
            alerta_2 = 1
        }
    }
    if (sensor_davant == 0) {
        GIRAR_VINGUENT_DAVANT()
    } else {
        darrere()
    }
}
function GIRAR_VINGUENT_DAVANT () {
    motorbit.back(100)
    basic.pause(800)
    motorbit.brake()
    gir = randint(0, 1)
    if (gir == 0) {
        motorbit.freestyle(50, -50)
    } else {
        motorbit.freestyle(-50, 50)
    }
    temps_de_gir = randint(400, 1000)
    basic.pause(temps_de_gir)
    motorbit.brake()
    basic.pause(100)
    sonar_2 = sonar.ping(
    DigitalPin.P9,
    DigitalPin.P11,
    PingUnit.Centimeters
    )
    if (sonar_2 > 2 && sonar_2 < 40) {
        darrere()
    } else {
        davant()
    }
}
function darrere () {
    motorbit.back(100)
    basic.pause(200)
    motorbit.back(85)
    alerta_1 = 0
    sensor_darrera = 1
    while (sensor_darrera == 1 && alerta_1 == 0) {
        sensor_darrera = pins.digitalReadPin(DigitalPin.P16)
        sonar_1 = sonar.ping(
        DigitalPin.P13,
        DigitalPin.P14,
        PingUnit.Centimeters
        )
        if (sonar_1 > 2 && sonar_1 < 40) {
            alerta_1 = 1
        }
    }
    if (sensor_darrera == 0) {
        GIRAR_VINGUENT_DARRERA2()
    } else {
        davant()
    }
}
function GIRAR_VINGUENT_DARRERA2 () {
    motorbit.forward(100)
    basic.pause(800)
    motorbit.brake()
    gir = randint(0, 1)
    if (gir == 0) {
        motorbit.freestyle(50, -50)
    } else {
        motorbit.freestyle(-50, 50)
    }
    temps_de_gir = randint(400, 1000)
    basic.pause(temps_de_gir)
    motorbit.brake()
    basic.pause(100)
    sonar_2 = sonar.ping(
    DigitalPin.P9,
    DigitalPin.P11,
    PingUnit.Centimeters
    )
    if (sonar_2 > 2 && sonar_2 < 40) {
        darrere()
    } else {
        davant()
    }
}
let sonar_1 = 0
let alerta_1 = 0
let temps_de_gir = 0
let gir = 0
let sonar_2 = 0
let alerta_2 = 0
let sensor_darrera = 0
let sensor_davant = 0
sensor_davant = pins.digitalReadPin(DigitalPin.P15)
sensor_darrera = pins.digitalReadPin(DigitalPin.P16)
basic.showIcon(IconNames.Heart)
basic.pause(3400)
basic.clearScreen()
davant()
