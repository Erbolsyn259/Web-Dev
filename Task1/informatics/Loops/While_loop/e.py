n = int(input())

k = 0
current_power = 1

while current_power < n:
    current_power *= 2
    k += 1
print(k)