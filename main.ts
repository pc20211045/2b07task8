input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() > 315 || input.compassHeading() < 45) {
        basic.showString("N")
        music.playMelody("C5 B A G F E D C ", 120)
    } else if (input.compassHeading() > 45 || input.compassHeading() < 135) {
        basic.showString("E")
        music.playMelody("E B C5 A B G A F ", 120)
    } else if (input.compassHeading() > 135 || input.compassHeading() < 225) {
        basic.showString("S")
        music.playMelody("A F E F D G E F ", 120)
    } else if (input.compassHeading() > 225 || input.compassHeading() < 315) {
        basic.showString("W")
        music.playMelody("G B A G C5 B A B ", 120)
    }
})
