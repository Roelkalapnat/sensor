basic.forever(function () {
    if (maqueenPlusV2.readUltrasonic(DigitalPin.P13, DigitalPin.P14) < 25) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, 100)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 0)
        basic.pause(500)
    } else {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    }
    maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Red)
})
