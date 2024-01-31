#Main program

a = 1
b = 2

#import the add function from add_0.py
from add_0 import add

#Use the variable a and b as an argument and print the result
print("{} + {} = {}".format(a, b, add(a, b)))
