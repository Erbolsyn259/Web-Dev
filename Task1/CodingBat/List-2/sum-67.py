def sum67(nums):
    total = 0
    skip = False
    for n in nums:
        if n == 6:
            skip = True   # начинаем игнорировать числа
        elif skip:
            if n == 7:
                skip = False  # заканчиваем игнорировать после 7
        else:
            total += n
    return total
