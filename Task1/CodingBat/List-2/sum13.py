def sum13(nums):
    total = 0
    i = 0
    while i < len(nums):
        if nums[i] == 13:
            i += 2   # пропускаем 13 и число сразу после него
        else:
            total += nums[i]
            i += 1
    return total
