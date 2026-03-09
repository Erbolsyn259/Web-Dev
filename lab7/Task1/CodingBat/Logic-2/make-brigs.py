def make_bricks(small, big, goal):
    # Maximum we can achieve with big bricks (but not exceeding goal)
    max_big = min(big, goal // 5) * 5
    
    # Remaining length after using big bricks
    remaining = goal - max_big
    
    return remaining <= small