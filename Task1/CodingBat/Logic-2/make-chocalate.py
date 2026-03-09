def make_chocolate(small, big, goal):
    
    max_big = goal // 5
    big_used = min(big, max_big)
    
    remainder = goal - big_used * 5
    if remainder <= small:
        return remainder
    else:
        return -1
