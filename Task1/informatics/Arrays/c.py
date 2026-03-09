n = int(input())
arr = list(map(int, input().split()))
count = sum(1 for num in arr if num > 0)
print(count)