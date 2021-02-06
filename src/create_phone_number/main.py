def create_phone_number(n):
    n = [str(int) for int in n]
    return "({}) {}-{}".format("".join(n[:3]), "".join(n[3:6]), "".join(n[6:]))

print(create_phone_number([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))