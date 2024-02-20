#!/usr/bin/python3
def only_diff_elements(set_1, set_2):
    return set_1 ^ set_2

set_1 = {1, 2, 3, 4}
set_2 = {3, 4, 5, 6}
result = only_diff_elements(set_1, set_2)
print("Elements present in only one set:", result)
