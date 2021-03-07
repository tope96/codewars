def array_diff(a, b):
    list = a.copy()

    for searched in a:
        if searched in b:
            list.remove(searched)

    return list


print(array_diff([-5, -11, 15, -17, -1, -10, 13, -2, 20, 8, -8, 0, -6, 20, 10, 17, 1], [0, -6, -15, -15, -13, -13]))
print(array_diff([1, 2, 2], [1, 2]))
