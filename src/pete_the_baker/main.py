import math

def cakes(recipe, available):
    isSubset = set(recipe).issubset(available)
    quantity = []

    if(isSubset):
        for requiredProduct, requiredNumber in recipe.items():
            for availableProduct, availableNumber in available.items():
                if requiredProduct == availableProduct:
                    div = math.floor(availableNumber/requiredNumber)
                    quantity.append(div)
        return min(quantity)
    else:
        return 0

recipe = {"flour": 500, "sugar": 200, "eggs": 1}
available = {"flour": 1200, "sugar": 1200, "eggs": 5, "milk": 200}
print(cakes(recipe, available))