def friend(x):
    return list((friend for friend in x if len(friend) == 4))

print(friend(["Ryan", "Kieran", "Mark"]))