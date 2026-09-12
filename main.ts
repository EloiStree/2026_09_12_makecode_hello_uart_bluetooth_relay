function disable_all_pin () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        # # # # #
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    enable_all_pin()
})
function enable_all_pin () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    list_data_received.push(bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)))
})
input.onButtonPressed(Button.B, function () {
    disable_all_pin()
})
let process_data_received = ""
let list_data_received: string[] = []
let time_between_tick_test = 1000
bluetooth.startUartService()
bluetooth.setTransmitPower(7)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.forever(function () {
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P3, 0)
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P12, 0)
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P13, 0)
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P15, 0)
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P3, 1)
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.pause(time_between_tick_test)
    pins.digitalWritePin(DigitalPin.P16, 1)
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (list_data_received.length > 0) {
        process_data_received = list_data_received.pop()
    }
    if (process_data_received == "P8") {
        pins.digitalWritePin(DigitalPin.P8, 1)
    }
    if (process_data_received == "p8") {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
    if (process_data_received == "P12") {
        pins.digitalWritePin(DigitalPin.P12, 1)
    }
    if (process_data_received == "p12") {
        pins.digitalWritePin(DigitalPin.P12, 0)
    }
    if (process_data_received == "P13") {
        pins.digitalWritePin(DigitalPin.P13, 1)
    }
    if (process_data_received == "p13") {
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
    if (process_data_received == "P14") {
        pins.digitalWritePin(DigitalPin.P14, 1)
    }
    if (process_data_received == "p14") {
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
    if (process_data_received == "P15") {
        pins.digitalWritePin(DigitalPin.P15, 1)
    }
    if (process_data_received == "p15") {
        pins.digitalWritePin(DigitalPin.P15, 0)
    }
    if (process_data_received == "P16") {
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
    if (process_data_received == "p16") {
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
    if (process_data_received == "P0") {
        pins.analogWritePin(AnalogPin.P0, 1023)
    }
    if (process_data_received == "p0") {
        pins.analogWritePin(AnalogPin.P0, 0)
    }
    if (process_data_received == "P1") {
        pins.analogWritePin(AnalogPin.P1, 1023)
    }
    if (process_data_received == "p1") {
        pins.analogWritePin(AnalogPin.P1, 0)
    }
    if (process_data_received == "P2") {
        pins.analogWritePin(AnalogPin.P2, 1023)
    }
    if (process_data_received == "p2") {
        pins.analogWritePin(AnalogPin.P2, 0)
    }
    if (process_data_received == "PA") {
        enable_all_pin()
    }
    if (process_data_received == "pa") {
        disable_all_pin()
    }
})
/**
 * Pin	Digital Analog write (PWM)	Notes
 * 
 * P0	✅	✅	General purpose
 * 
 * P1	✅	✅	General purpose
 * 
 * P2	✅	✅	General purpose
 * 
 * P3	⚠️	⚠️	Used by LED matrix
 * 
 * P4	⚠️	⚠️	Used by LED matrix
 * 
 * P5	⚠️	⚠️	Button A
 * 
 * P6	⚠️	⚠️	LED matrix
 * 
 * P7	⚠️	⚠️	LED matrix
 * 
 * P8	✅	❌	Digital only
 * 
 * P9	⚠️	⚠️	LED matrix
 * 
 * P10	⚠️	⚠️	LED matrix
 * 
 * P11	⚠️	⚠️	Button B
 * 
 * P12	✅	❌	Digital only
 * 
 * P13	✅	❌	SPI
 * 
 * P14	✅	❌	SPI
 * 
 * P15	✅	❌	SPI
 * 
 * P16	✅	❌	Digital only
 */
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
