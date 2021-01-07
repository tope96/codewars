def accum(s):
    word = list(s.lower())

    for i, char in enumerate(word):
        word[i] = (char * (i+1)).capitalize()

    return "-".join(word)

print(accum("RqaEzty"))