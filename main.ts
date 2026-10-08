input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(2500)
    control.reset()
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # . .
        . . . # .
        . . # . .
        . . . # .
        . # # # .
        `)
    pins.digitalWritePin(DigitalPin.P2, 2)
    basic.pause(2500)
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . . . # .
        . . # . .
        . # # # .
        `)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(2500)
    control.reset()
})
