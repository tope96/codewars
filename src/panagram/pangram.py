pangram = "The quick, brown fox jps over the lazy dog!"

def is_pangram(s):
    length_of_alphabet = 26
    only_letters = ''.join(x for x in s.lower() if x.isalpha())
    final = list(dict.fromkeys(only_letters))
    if length_of_alphabet == len(final):
        return True
    else:
        return False

print(is_pangram(pangram))