from itertools import permutations

S, k = input().split()
k = int(k)

for p in sorted(permutations(S, k)):
    print(''.join(p))