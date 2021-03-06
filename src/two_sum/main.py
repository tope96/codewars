def two_sum(numbers, target):
    for indexOfFirst, firstNumber in enumerate(numbers):
        for indexOfSecond, secondNumber in enumerate(reversed(numbers)):
            if firstNumber + secondNumber == target:
                return indexOfFirst, len(numbers)-indexOfSecond-1

print(two_sum([1,2,3], 4))
print(two_sum([1234,5678,9012], 14690))
print(two_sum([2,2,3], 4))