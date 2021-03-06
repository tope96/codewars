def namelist(names):
    namesList = []
    for name in names:
        namesList.append(name.get("name"))

    if len(names) <= 1:
        return  ", ".join(namesList)
    else:
        return ", ".join(namesList[:len(namesList)-1]) + " & " + namesList[-1]


print(namelist([ {'name': 'Bart'}, {'name': 'Lisa'}, {'name': 'Maggie'} ]))
print(namelist([ {'name': 'Bart'}, {'name': 'Lisa'} ]))
print(namelist([ {'name': 'Bart'} ]))
print(namelist([]))
print(namelist([{'name': 'Bart'},{'name': 'Lisa'},{'name': 'Maggie'},{'name': 'Homer'},{'name': 'Marge'}]))