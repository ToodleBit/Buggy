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
    * Set each wheel to the correct pin
    * @param left describe parameter here, eg: AnalogPin.P1
    * @param right describe parameter here, eg: AnalogPin.P2
    */
    //% weight=10
    //% blockId=toodlebit_init block="left wheel: %left|right wheel: %right"
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
    * Move forward a set number of milliseconds (0 = no time limit)
    * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
    */
    //% weight=9
    //% blockId=toodlebit_forwardseconds block="forward:(ms) %ms"
	 //% ms.shadow="timePicker"
    export function forwardSeconds(ms: number): void {
        // Add code here
	    if (ms == 0){
		  	pins.servoSetPulse(pin_left_wheel, 1300)
			pins.servoSetPulse(pin_right_wheel, 1700)
	    } else {
			pins.servoSetPulse(pin_left_wheel, 1300)
			pins.servoSetPulse(pin_right_wheel, 1700)
			basic.pause(ms)
			pins.digitalWritePin(digital_pin_left_wheel, 0)
			pins.digitalWritePin(digital_pin_right_wheel, 0)
	    }
    }
	
/**
    * Move backwards a set number of milliseconds (0 = no time limit)
    * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
    */
    //% weight=8
    //% blockId=toodlebit_backwardseconds block="backwards:(ms) %ms"
	 //% ms.shadow="timePicker"
    export function backwardsSeconds(ms: number): void {
        // Add code here
	    if (ms == 0){
		  	pins.servoSetPulse(pin_left_wheel, 1690)
			pins.servoSetPulse(pin_right_wheel, 1300)
	    } else {
			pins.servoSetPulse(pin_left_wheel, 1690)
			pins.servoSetPulse(pin_right_wheel, 1300)
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
    //% blockId=toodlebit_leftseconds block="turn left:(ms) %ms"
	//% ms.shadow="timePicker"
    export function turnleftSeconds(ms: number): void {
        // Add code here
					if (ms == 0){
						pins.servoSetPulse(pin_left_wheel, 1500)
						pins.servoSetPulse(pin_right_wheel, 1650)
					} else {
						pins.servoSetPulse(pin_left_wheel, 1500)
						pins.servoSetPulse(pin_right_wheel, 1650)
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
    //% blockId=toodlebit_rightseconds block="turn right:(ms) %ms"
	//% ms.shadow="timePicker"
    export function turnrightSeconds(ms: number): void {
        // Add code here
					if (ms == 0){
						pins.servoSetPulse(pin_left_wheel, 1350)
						pins.servoSetPulse(pin_right_wheel, 1500)
						} else {
						pins.servoSetPulse(pin_left_wheel, 1350)
						pins.servoSetPulse(pin_right_wheel, 1500)
						basic.pause(ms)
						pins.digitalWritePin(digital_pin_left_wheel, 0)
						pins.digitalWritePin(digital_pin_right_wheel, 0)
						}

			}
	

	/**
    * Slow right turn for a set number of Milliseconds (0 = no time limit)
	* @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
    */
    //% weight=6
    //% blockId=toodlebit_rightslowseconds block="slow right turn:(ms) %ms"
	//% ms.shadow="timePicker"
    export function turnrightslowseconds(ms: number): void {
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
    * Slow left turn for a set number of Milliseconds (0 = no time limit)
	* @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
    */
    //% weight=5
    //% blockId=toodlebit_leftslowseconds block="slow left turn:(ms) %ms"
	//% ms.shadow="timePicker"
    export function turnleftslowseconds(ms: number): void {
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
    //% weight=4
	//% advanced=true
    //% blockId=toodlebit_brake block="brake"
    export function brake(): void {
        // Add code here

        //pins.servoSetPulse(pin_left_wheel, 1500)
        //pins.servoSetPulse(pin_right_wheel, 1500)

        pins.digitalWritePin(digital_pin_left_wheel, 0)
        pins.digitalWritePin(digital_pin_right_wheel, 0)

    }


    /**
    * Choose the power/direction for each wheel (-3 to +3)
    * @param m the m from -3 (min) to 3 (max), eg:0
    * @param n the n from -3 (min) to 3 (max), eg:0
    */
    //% weight=10
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
    //% weight=9
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
    //% weight=8
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
