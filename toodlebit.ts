/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% color=#008C8C weight=10 icon="\uf1b9"
namespace ToodleBit {

    let pin_left_wheel = AnalogPin.P1
    let pin_right_wheel = AnalogPin.P2

    let digital_pin_left_wheel = DigitalPin.P1
    let digital_pin_right_wheel = DigitalPin.P2

    /**
    * TODO: describe your function here
    * @param left describe parameter here, eg: AnalogPin.P1
    * @param right describe parameter here, eg: AnalogPin.P2
    */
    //% weight=10
    //% blockId=toodlebit_init block="left wheel: pin %left|right wheel: pin %right"
    export function init_wheel(left: AnalogPin, right: AnalogPin): void {
        // Add code here

        pin_left_wheel = left
        pin_right_wheel = right

        if (left == AnalogPin.P1) {
            digital_pin_left_wheel = DigitalPin.P1
        } 
        else if (left == AnalogPin.P2) {
            digital_pin_left_wheel = DigitalPin.P2
        } 
        else { digital_pin_left_wheel = DigitalPin.P0 }

        if (right == AnalogPin.P1) {
            digital_pin_right_wheel = DigitalPin.P1
        } 
        else if (right == AnalogPin.P2) {
            digital_pin_right_wheel = DigitalPin.P2
        } 
        else { digital_pin_right_wheel = DigitalPin.P0 }

    }



    /**
    * Move forward
    */
    //% weight=9
    //% blockId=toodlebit_forward block="forward"
    export function forward(): void {
        // Add code here

	pins.servoSetPulse(pin_left_wheel, 1300)
        pins.servoSetPulse(pin_right_wheel, 1700)

    }



    /**
    * Move backwards
    */
    //% weight=8
    //% blockId=toodlebit_back block="backwards"
    export function back(): void {
        // Add code here

	pins.servoSetPulse(pin_left_wheel, 1700)
        pins.servoSetPulse(pin_right_wheel, 1300)

    }



    /**
    * Turn left
    */
    //% weight=7
    //% blockId=toodlebit_left block="turn left"
    export function turnleft(): void {
        // Add code here

	pins.servoSetPulse(pin_left_wheel, 1500)
        pins.servoSetPulse(pin_right_wheel, 1650)

    }


    /**
    * Turn right
    */
    //% weight=6
    //% blockId=toodlebit_right block="turn right"
    export function turnright(): void {
        // Add code here

        pins.servoSetPulse(pin_left_wheel, 1350)
        pins.servoSetPulse(pin_right_wheel, 1500)

    }


	/**
    * Gentle right turn
    */
    //% weight=6
    //% blockId=toodlebit_rightslow block="gentle right turn"
    export function turnrightslow(): void {
        // Add code here

        pins.servoSetPulse(pin_left_wheel, 1200)
        pins.servoSetPulse(pin_right_wheel, 1700)

    }

		 /**
    * Gentle left turn
    */
    //% weight=7
    //% blockId=toodlebit_leftslow block="gentle left turn"
    export function turnleftslow(): void {
        // Add code here

        pins.servoSetPulse(pin_left_wheel, 1300)
        pins.servoSetPulse(pin_right_wheel, 1800)

    }
    /**
    * Stop the buggy
    */
    //% weight=5
    //% blockId=toodlebit_brake block="brake"
    export function brake(): void {
        // Add code here

        //pins.servoSetPulse(pin_left_wheel, 1500)
        //pins.servoSetPulse(pin_right_wheel, 1500)

        pins.digitalWritePin(digital_pin_left_wheel, 0)
        pins.digitalWritePin(digital_pin_right_wheel, 0)

    }


    /**
    * Choose the power for each wheel
    * @param m the m from -3 (min) to 3 (max), eg:0
    * @param n the n from -3 (min) to 3 (max), eg:0
    */
    //% weight=4
	//% advanced=true
    //% blockId=toodlebit_freestyle block="left wheel speed %m| right wheel speed %n"
    //% m.min=-2 m.max=2
    //% n.min=-2 n.max=2
    export function freestyle(m: number, n: number): void {
        // Add code here

		
		 switch (m) {
            case -2:
                pins.servoSetPulse(pin_right_wheel, 1000)
                break
            case -1:
                pins.servoSetPulse(pin_right_wheel, 1350)
                break
            case 0:
                pins.servoSetPulse(pin_right_wheel, 1500)
                break
            case 1:
                pins.servoSetPulse(pin_right_wheel, 1650)
                break
			case 2:
                pins.servoSetPulse(pin_right_wheel, 2000)
                break
            default:
                pins.servoSetPulse(pin_right_wheel, 1500)

        }
		
		switch (n) {
            case -2:
                pins.servoSetPulse(pin_left_wheel, 2000)
                break
            case -1:
                pins.servoSetPulse(pin_left_wheel, 1650)
                break
            case 0:
                pins.servoSetPulse(pin_left_wheel, 1500)
                break
            case 1:
                pins.servoSetPulse(pin_left_wheel, 1350)
                break
			case 2:
                pins.servoSetPulse(pin_left_wheel, 1000)
                break
            default:
                pins.servoSetPulse(pin_left_wheel, 1500)

        }
      

    }
	    /**
    * get Ultrasonic distance
    */
    //% blockId=toodlebit_sonarbit block="Ultrasonic distance(cm) on|pin %pin"
    //% weight=5
//% advanced=true
    export function sonarbit_distance(pin: DigitalPin): number {

        // send pulse
        pins.setPull(pin, PinPullMode.PullNone)
        pins.digitalWritePin(pin, 0)
        control.waitMicros(2)
        pins.digitalWritePin(pin, 1)
        control.waitMicros(10)
        pins.digitalWritePin(pin, 0)

        // read pulse
        let d = pins.pulseIn(pin, PulseValue.High, 23000)  // 8 / 340 = 
        let distance = d * 10 * 5 / 3 / 58

        if (distance > 4000) distance = 0
	return Math.round(distance / 10) //cm

    }

	/**
    * crash sensor
    */
    //% blockId=toodlebit_crash block="crash sensor on|pin %pin"
    //% weight=6
	//% advanced=true
    export function toodlebit_crash(pin: DigitalPin): number {

        // set pin to 1
		
        pins.setPull(pin, PinPullMode.PullUp)
		
			if (pins.digitalReadPin(pin) == 0) {
				 return 0
			} else {
				 return 1
			}
    }

}
