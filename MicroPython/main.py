"""
Created by: Sophie
Created on: Sep 2023
This module is a Micro:bit MicroPython program and shows temperature in kelvin
"""

from microbit import *

display.scroll("Hello, World!")
display.clear
display.show(Image.HEART)

temperature = 0

while True:
    if button_a.is_pressed():
        temperature = temperature()
        temperature = temperature + 273.15
        display.scroll("The temperature is " + str(temperature) + " K")
