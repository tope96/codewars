from collections import Counter

def duplicate_count(text):
    return sum((duplicate > 1) for duplicate in Counter(text.lower()).values())

print(duplicate_count("aabcB"))