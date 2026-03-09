x = int(input())
sumofi = 0
for i in range(1,x+1):
    if(x % i == 0):
        sumofi+=1
print(sumofi)        
