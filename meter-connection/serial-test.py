# from PyCRC.CRC16 import CRC16
from binascii import unhexlify, hexlify
import serial
import RPi.GPIO as GPIO
import time

ser = serial.Serial("/dev/serial0", 19200, timeout=1)
print ser.name

txd = 8
rxd = 10
de = 16
re = 18

GPIO.setmode(GPIO.BOARD)

pins = (re, de)

GPIO.setup(pins, GPIO.OUT)
GPIO.output(de, GPIO.HIGH)

slave_address = '10'
function_code = '03'
start_address_high = '50'
start_address_low = '04'
num_of_registers_high = '00'
num_of_registers_low = '04'
error_check_high = '54'
error_check_low = 'C0'

command = slave_address + function_code + start_address_high + start_address_low + num_of_registers_high + num_of_registers_low + error_check_high + error_check_low
print(command)
print(unhexlify(command))

ser.write(unhexlify(command))

GPIO.output(de, GPIO.LOW)
GPIO.output(re, GPIO.HIGH)


result = ser.readline()

print('Result: ' + hexlify(result))
GPIO.output(pins, GPIO.LOW)
GPIO.cleanup()