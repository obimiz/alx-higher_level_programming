#!/usr/bin/python3
def complex_delete(a_dictionary, value):
    for key, val in a_dictionary.items():
        if value in a_dictionary:
            del a_dictionary[value]
