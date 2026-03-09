import math

a = int(input())
b = int(input())

start = int(math.sqrt(a))
if start * start < a:
    start += 1

for i in range(start, int(math.sqrt(b)) + 1):
    print(i * i, end=' ')