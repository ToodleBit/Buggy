/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% color=#008C8C weight=10 icon="\uf1b9"
namespace ToodleBit {

	let adjust_left_wheel = 0
  	let adjust_right_wheel = 0
	
    let pin_left_wheel = AnalogPin.P1
    let pin_right_wheel = AnalogPin.P2

    let digital_pin_left_wheel = DigitalPin.P1
    let digital_pin_right_wheel = DigitalPin.P2

    /**
    * Set each wheel to the correct pin
    * @param left describe parameter here, eg: AnalogPin.P1
    * @param right describe parameter here, eg: AnalogPin.P2
    */
    //% weight=10
    //% blockId=toodlebit_setwheels block="left wheel %left|right wheel %right"
    export function set_wheels(left: AnalogPin, right: AnalogPin): void {
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
    * Move forward for a set number of milliseconds (0 = no time limit)
    * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
    */
    //% weight=9
    //% blockId=toodlebit_forward block="forward %ms"
	 //% ms.shadow="timePicker"
    export function forwards(ms: number): void {
        // Add code here
	    if (ms == 0){
			pins.servoWritePin(pin_left_wheel, 0)
			pins.servoWritePin(pin_right_wheel, 180)
	    } else {
			pins.servoWritePin(pin_left_wheel, 0)
			pins.servoWritePin(pin_right_wheel, 180)
			basic.pause(ms)
			pins.digitalWritePin(digital_pin_left_wheel, 0)
			pins.digitalWritePin(digital_pin_right_wheel, 0)
	    }
    }
	
/**
    * Move backwards for a set number of milliseconds (0 = no time limit)
    * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
    */
    //% weight=8
    //% blockId=toodlebit_backward block="backwards %ms"
	 //% ms.shadow="timePicker"
    export function backwards(ms: number): void {
        // Add code here
	    if (ms == 0){
		  	pins.servoWritePin(pin_left_wheel, 180)
			pins.servoWritePin(pin_right_wheel, 0)
	    } else {
			pins.servoWritePin(pin_left_wheel, 180)
			pins.servoWritePin(pin_right_wheel, 0)
			basic.pause(ms)
			pins.digitalWritePin(digital_pin_left_wheel, 0)
			pins.digitalWritePin(digital_pin_right_wheel, 0)
	    }
    }

	

	
    /**
    * Turn left for a set number of Milliseconds (0 = no time limit)
	* @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
    */
    //% weight=7
    //% blockId=toodlebit_left block="left turn %ms"
	//% ms.shadow="timePicker"
    export function leftTurn(ms: number): void {
        // Add code here
					if (ms == 0){
						pins.servoWritePin(pin_left_wheel, 180) //hard left turn
						pins.servoWritePin(pin_right_wheel, 180) 
					} else {
						pins.servoWritePin(pin_left_wheel, 180) //hard left turn
						pins.servoWritePin(pin_right_wheel, 180) 
						basic.pause(ms)
						pins.digitalWritePin(digital_pin_left_wheel, 0)
						pins.digitalWritePin(digital_pin_right_wheel, 0)
							}
    }



	
	
    /**
    * Turn right for a set number of Milliseconds (0 = no time limit)
	* @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
    */
    //% weight=6
    //% blockId=toodlebit_right block="right turn %ms"
	//% ms.shadow="timePicker"
    export function rightTurn(ms: number): void {
        // Add code here
					if (ms == 0){
						pins.servoWritePin(pin_left_wheel, 0) //hard right turn
						pins.servoWritePin(pin_right_wheel, 0)
						} else {
						pins.servoWritePin(pin_left_wheel, 0) //hard right turn
						pins.servoWritePin(pin_right_wheel, 0)
						basic.pause(ms)
						pins.digitalWritePin(digital_pin_left_wheel, 0)
						pins.digitalWritePin(digital_pin_right_wheel, 0)
						}

			}
	

	/**
    * Curved right turn for a set number of Milliseconds (0 = no time limit)
	* @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
    */
    //% weight=6
    //% blockId=toodlebit_rightslow block="curved right turn %ms"
	//% ms.shadow="timePicker"
    export function curvedRightTurn(ms: number): void {
        // Add code here
					if (ms == 0){
						pins.servoSetPulse(pin_left_wheel, 1200)
						pins.servoSetPulse(pin_right_wheel, 1700)
						} else {
						pins.servoSetPulse(pin_left_wheel, 1200)
						pins.servoSetPulse(pin_right_wheel, 1700)
						basic.pause(ms)
						pins.digitalWritePin(digital_pin_left_wheel, 0)
						pins.digitalWritePin(digital_pin_right_wheel, 0)
						
						}

			}

	/**
    * Curved left turn for a set number of Milliseconds (0 = no time limit)
	* @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
    */
    //% weight=5
    //% blockId=toodlebit_leftslow block="curved left turn %ms"
	//% ms.shadow="timePicker"
    export function curvedLeftTurn(ms: number): void {
        // Add code here
				if (ms == 0){
					pins.servoSetPulse(pin_left_wheel, 1300)
					pins.servoSetPulse(pin_right_wheel, 1800)
					} else {
					pins.servoSetPulse(pin_left_wheel, 1300)
					pins.servoSetPulse(pin_right_wheel, 1800)
					basic.pause(ms)
					pins.digitalWritePin(digital_pin_left_wheel, 0)
					pins.digitalWritePin(digital_pin_right_wheel, 0)
					}
		}

    
    /**
    * Stop the buggy
    */
    //% weight=9
	//% advanced=true
    //% blockId=toodlebit_brake block="brake"
    export function brake(): void {
        // Add code here

        pins.digitalWritePin(digital_pin_left_wheel, 0)
        pins.digitalWritePin(digital_pin_right_wheel, 0)

    }


    /**
    * Choose the power/direction for each wheel
    * @param m the m from -5 (min) to 5 (max), eg:0
    * @param n the n from -5 (min) to 5 (max), eg:0
    */
    //% weight=10
	//% advanced=true
    //% blockId=toodlebit_freestyle block="left wheel speed %m| right wheel speed %n"
    //% m.min=-5 m.max=5
    //% n.min=-5 n.max=5
    export function freestyle(m: number, n: number): void {
        // Add code here
		
		switch (m) {
            case -5:
                pins.servoWritePin(pin_left_wheel, 180) //reverse
                break
            case -4:
                pins.servoSetPulse(pin_left_wheel, 1700)
                break
            case -3:
				pins.servoSetPulse(pin_left_wheel, 1630)
                break
            case -2:
				pins.servoSetPulse(pin_left_wheel, 1610)
				break
			case -1:
                pins.servoSetPulse(pin_left_wheel, 1595)
                break
			case 0:
                pins.digitalWritePin(digital_pin_left_wheel, 0) //stop
                break
			case 1:
                pins.servoSetPulse(pin_left_wheel, 1410)
                break
			case 2:
                pins.servoSetPulse(pin_left_wheel, 1390)
                break
			case 3:
                pins.servoSetPulse(pin_left_wheel, 1370)
                break
			case 4:
                pins.servoSetPulse(pin_left_wheel, 1300)
                break
			case 5:
                pins.servoWritePin(pin_left_wheel, 0) //straight
                break
            default:
                pins.digitalWritePin(digital_pin_left_wheel, 0) //stop
        }
		
		switch (n) {
            case -5:
                pins.servoWritePin(pin_right_wheel, 0) //reverse
                break
            case -4:
                pins.servoSetPulse(pin_right_wheel, 1300)
                break
            case -3:
		pins.servoSetPulse(pin_right_wheel, 1370)
                break
            case -2:
		pins.servoSetPulse(pin_right_wheel, 1390)
		break
	case -1:
                pins.servoSetPulse(pin_right_wheel, 1400)
                break
		case 0:
                pins.digitalWritePin(digital_pin_right_wheel, 0) //stop
                break
			case 1:
                pins.servoSetPulse(pin_right_wheel, 1595)
                break
			case 2:
                pins.servoSetPulse(pin_right_wheel, 1610)
                break
			case 3:
                pins.servoSetPulse(pin_right_wheel, 1630)
                break
			case 4:
                pins.servoSetPulse(pin_right_wheel, 1700)
                break
			case 5:
                pins.servoWritePin(pin_right_wheel, 180) //straight
                break
            default:
                pins.digitalWritePin(digital_pin_right_wheel, 0) //stop
        }
		
			
    }
	
	
	/**
    * get ultrasonic distance
    */
    //% blockId=toodlebit_sonarbit block="ultrasonic distance(cm) on|pin %pin"
    //% weight=8
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
    * crash sensor (if = 0 then turn around)
    */
    //% blockId=toodlebit_crash block="crash sensor on|pin %pin"
    //% weight=7
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
