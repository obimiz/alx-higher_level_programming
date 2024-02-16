#!/usr/bin/python3
def uniq_add(my_list=[]):
    uniq_sum = 0
    uniq_elements = set()
    
    for num in my_list:
        if num not in uniq_elements:
            uniq_sum += num
            uniq_elements.add(num)

    return uniq_sum
