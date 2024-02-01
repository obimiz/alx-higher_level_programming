#Main program

#!/usr/bin/python3
if __name__ == "__main__":

#import the add function from add_0.py
    from add_0 import add
    a = 1
    b = 2

#import the add function from add_0.py

#Use the variable a and b as an argument and print the result
    print("{} + {} = {}".format(a, b, add(a, b)))
