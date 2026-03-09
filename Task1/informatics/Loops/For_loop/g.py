import math

def find_smallest_divisor(x):
    for i in range(2,int(math.sqrt(x))+1):
        if x % i == 0:
            return i
        return x
    
x =int(input())
print(find_smallest_divisor(x))