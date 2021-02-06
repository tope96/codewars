def likes(names):
    names_length = len(names)

    if(names_length == 0):
        return "no one likes this"
    elif(names_length  == 1):
        return " and ".join(names) + " like this"
    elif(names_length == 2):
        return " and ".join(names) + " likes this"
    elif(names_length == 3):
        return ", ".join(names[0:2]) + " and " + names[2] + " like this"
    else:
        return ", ".join(names[0:2]) + " and " + str(len(names)-2) + " others like this"

print(likes(["Adam"]))
print(likes(["Adam", "Tomek"]))
print(likes(["Adam", "Tomek", "Kinga"]))
print(likes(["Adam", "Tomek", "Kinga", "Piotr"]))
