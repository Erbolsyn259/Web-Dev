n = int(input())
zeros_count = 0

for _ in range(n):
    number = int(input())
    if number == 0:
        zeros_count += 1
print(zeros_count)