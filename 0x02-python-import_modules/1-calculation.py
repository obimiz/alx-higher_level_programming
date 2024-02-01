from calculator_1 import add, sub, mul, div

#Examples values

a = 10
b = 5

# Perform calculations using imported functions
result_add = add(a, b)
result_subtract = sub(a, b)
result_multiply = mul(a, b)
result_divide = div(a, b)

# print the result
print("Addition: {} + {} = {}".format(a, b, result_add))
print("Subtraction: {} - {} = {}".format(a, b, result_subtract))
print("Multiplication: {} * {} = {}".format(a, b, result_multiply))
print("Division: {} / {} = {}".format(a, b, result_divide))
