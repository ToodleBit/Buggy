

# ToodleBit Car Package
This ToodleBit Buggy package was developed by [ToodleBit](https://www.toodlebit.com/) based on a project by [ElecFreaks](https://www.elecfreaks.com/).

ToodleBit Buggy has been designed for use in education, particularly the primary(KS2) sector. These code blocks have been created to provide an easier route for users to get their buggies moving. They also provide easy access to the sonar and crash sensors. ToodleBit is based on the BBC micro:bit and ElecFreaks ring:bit. The two sensors, sonar and crash detector are from ElecFreaks.


![ToodleBit Buggy](https://github.com/ToodleBit/Buggy/blob/master/icon.png?raw=true)

## Code Example
```JavaScript
basic.forever(function () {
    ToodleBit.forward()
    if (ToodleBit.toodlebit_crash(DigitalPin.P1) == 0) {
        ToodleBit.back()
        basic.pause(500)
        ToodleBit.turnleft()
        basic.pause(500)
    }
})
```

## License
MIT

## Supported targets
for PXT/microbit (The metadata above is needed for package search.)

