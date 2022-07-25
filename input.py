import RPi.GPIO as GPIO
import dht11
import time
import datetime

# initialize GPIO
GPIO.setwarnings(True)
GPIO.setmode(GPIO.BCM)

# read data using pin 14
instance = dht11.DHT11(pin=14)

result=instance.read()
if result.is_valid():
	num1=str(result.humidity)
	num2=str(result.temperature)
	print(num1+","+num2 )
