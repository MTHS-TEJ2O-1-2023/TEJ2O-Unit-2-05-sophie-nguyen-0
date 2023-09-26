/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sophie
 * Created on: Sep 2023
 * This program shows temperature in kelvin
*/

basic.clearScreen()
basic.showIcon(IconNames.Heart)
basic.pause(1000)

// variables
let temperature: number

input.onButtonPressed(Button.A, function () {
  // get temperature value
  temperature = input.temperature()

  // process
  temperature = temperature + 273.15
  temperature = Math.round(temperature)

  //output
  basic.showString('The temperature is ' + temperature.toString() + ' K')
})
