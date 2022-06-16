def davant():
    global alerta_2, sensor_davant, sonar_2
    motorbit.forward(100)
    basic.pause(200)
    motorbit.forward(85)
    alerta_2 = 0
    sensor_davant = 1
    while sensor_davant == 1 and alerta_2 == 0:
        sensor_davant = pins.digital_read_pin(DigitalPin.P15)
        sonar_2 = sonar.ping(DigitalPin.P9, DigitalPin.P11, PingUnit.CENTIMETERS)
        if sonar_2 > 2 and sonar_2 < 40:
            alerta_2 = 1
    if sensor_davant == 0:
        GIRAR_VINGUENT_DAVANT()
    else:
        darrere()
def GIRAR_VINGUENT_DAVANT():
    global gir, temps_de_gir, sonar_2
    motorbit.back(100)
    basic.pause(800)
    motorbit.brake()
    gir = randint(0, 1)
    if gir == 0:
        motorbit.freestyle(50, -50)
    else:
        motorbit.freestyle(-50, 50)
    temps_de_gir = randint(400, 1000)
    basic.pause(temps_de_gir)
    motorbit.brake()
    basic.pause(100)
    sonar_2 = sonar.ping(DigitalPin.P9, DigitalPin.P11, PingUnit.CENTIMETERS)
    if sonar_2 > 2 and sonar_2 < 40:
        darrere()
    else:
        davant()
def darrere():
    global alerta_1, sensor_darrera, sonar_1
    motorbit.back(100)
    basic.pause(200)
    motorbit.back(85)
    alerta_1 = 0
    sensor_darrera = 1
    while sensor_darrera == 1 and alerta_1 == 0:
        sensor_darrera = pins.digital_read_pin(DigitalPin.P16)
        sonar_1 = sonar.ping(DigitalPin.P13, DigitalPin.P14, PingUnit.CENTIMETERS)
        if sonar_1 > 2 and sonar_1 < 40:
            alerta_1 = 1
    if sensor_darrera == 0:
        GIRAR_VINGUENT_DARRERA2()
    else:
        davant()
def GIRAR_VINGUENT_DARRERA2():
    global gir, temps_de_gir, sonar_2
    motorbit.forward(100)
    basic.pause(800)
    motorbit.brake()
    gir = randint(0, 1)
    if gir == 0:
        motorbit.freestyle(50, -50)
    else:
        motorbit.freestyle(-50, 50)
    temps_de_gir = randint(400, 1000)
    basic.pause(temps_de_gir)
    motorbit.brake()
    basic.pause(100)
    sonar_2 = sonar.ping(DigitalPin.P9, DigitalPin.P11, PingUnit.CENTIMETERS)
    if sonar_2 > 2 and sonar_2 < 40:
        darrere()
    else:
        davant()
sonar_1 = 0
alerta_1 = 0
temps_de_gir = 0
gir = 0
sonar_2 = 0
alerta_2 = 0
sensor_darrera = 0
sensor_davant = 0
sensor_davant = pins.digital_read_pin(DigitalPin.P15)
sensor_darrera = pins.digital_read_pin(DigitalPin.P16)
basic.show_icon(IconNames.HEART)
basic.pause(3400)
basic.clear_screen()
davant()