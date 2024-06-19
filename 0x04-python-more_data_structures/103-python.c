#include <Python.h>

void print_python_list(PyObject *p)
{
    	Py_ssize_t size;
    	Py_ssize_t i;
    	PyObject *item;

	if (!PyList_Check(p))
	{
		printf("[ERROR] Invalid Python list\n");
		return;
	}

	size = PyList_Size(p);
	printf("[*] Size of the Python List = %ld\n", size);
	printf("[*] Allocated = %ld\n", ((PyListObject *)p)->allocated);

	for (i = 0; i < size; i++)
	{
		item = PyList_GetItem(p, i);
		printf("Element %ld: %s\n", i, Py_TYPE(item)->tp_name);
	}
}
