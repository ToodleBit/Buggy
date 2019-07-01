/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% color=#008C8C weight=10 icon="\uf1b9"
namespace ToodleBuggy {

let adjust_left_wheel = 0
let adjust_right_wheel = 0
	
let pin_left_wheel = AnalogPin.P1
let pin_right_wheel = AnalogPin.P2

let digital_pin_left_wheel = DigitalPin.P1
let digital_pin_right_wheel = DigitalPin.P2
	
let Left_speed = 100
let Right_speed = 100

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
    * Choose the forward speed for each wheel
    * @param m the m from 0 (min) to 100 (max), eg:100
    * @param n the n from 0 (min) to 100 (max), eg:100
    */
    //% weight=10
    //% blockId=toodlebit_forward_control block="Forward: left wheel %m| right wheel %n"
    //% m.min=0 m.max=100
    //% n.min=0 n.max=100
    export function fdControl(m: number, n: number): void {
        // Add code here
		
		switch (m) {
		case 0:
                	pins.digitalWritePin(digital_pin_left_wheel, 0) //stop
                break
		case 100:
                	pins.servoWritePin(pin_left_wheel, 0) //straight
                break
          	default:
			Left_speed = Math.round(1400-(120/(100/m)))
			pins.servoSetPulse(pin_left_wheel, Left_speed)	
       		 }
		
		switch (n) {
		case 0:
                	pins.digitalWritePin(digital_pin_right_wheel, 0) //stop
                break
		case 100:
                	pins.servoWritePin(pin_right_wheel, 180) //straight
                break
            	default:
                	Right_speed = Math.round(1580+(120/(100/n)))
			pins.servoSetPulse(pin_right_wheel, Right_speed)	
       		 }
		
    }

	 /**
    * Choose the backwards speed for each wheel
    * @param a the a from 0 (min) to 100 (max), eg:100
    * @param b the b from 0 (min) to 100 (max), eg:100
    */
    //% weight=10
    //% blockId=toodlebit_backwards_control block="Backwards: left wheel %a| right wheel %b"
    //% a.min=0 a.max=100
    //% b.min=0 b.max=100
    export function bkControl(a: number, b: number): void {
        // Add code here
		
		switch (a) {
		case 0:
                	pins.digitalWritePin(digital_pin_left_wheel, 0) //stop
                break
		case 100:
                	pins.servoWritePin(pin_left_wheel, 180) //straight
                break
          	default:
			Left_speed = Math.round(1580+(120/(100/a)))
			pins.servoSetPulse(pin_left_wheel, Left_speed)	
       		 }
		
		switch (b) {
		case 0:
                	pins.digitalWritePin(digital_pin_right_wheel, 0) //stop
                break
		case 100:
                	pins.servoWritePin(pin_right_wheel, 0) //straight
                break
            	default:
                	Right_speed = Math.round(1400-(120/(100/b)))
			pins.servoSetPulse(pin_right_wheel, Right_speed)	
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
    * Stop the buggy
    */
    //% weight=4
    //% blockId=toodlebit_brake block="brake"
    export function brake(): void {
        // Add code here

        pins.digitalWritePin(digital_pin_left_wheel, 0)
        pins.digitalWritePin(digital_pin_right_wheel, 0)

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
