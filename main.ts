basic.forever(function () {
    while (mbit_Robot.Avoid_Sensor(mbit_Robot.enAvoidState.NOOBSTACLE)) {
        if (mbit_Robot.Ultrasonic_Car() > 30) {
            mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 255)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
            basic.showIcon(IconNames.Happy)
        } else if (mbit_Robot.Ultrasonic_Car() < 30) {
            mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_SpinRight, 255, 255)
            mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
            basic.showIcon(IconNames.Angry)
            basic.pause(1000)
            mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Back, 255, 255)
            music.setVolume(255)
            music.playTone(988, music.beat(BeatFraction.Breve))
            basic.pause(500)
        }
    }
})
