let valor_dado = 0
let promedio = 0
input.onButtonPressed(Button.A, function () {
    valor_dado = 0
    for (let index = 0; index < 7; index++) {
        valor_dado += randint(0, 6)
    }
    promedio = valor_dado / 7
    basic.showNumber(promedio)
    if (promedio < 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (promedio >= 1 && promedio < 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    }
    if (promedio >= 2 && promedio < 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    }
    if (promedio >= 3 && promedio < 4) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (promedio >= 4 && promedio < 5) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (promedio >= 5 && promedio <= 6) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    basic.pause(1000)
    basic.clearScreen()
})
