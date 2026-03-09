def xor(x, y):
    
    return x != y

if __name__ == "__main__":
    
    x_val, y_val = map(int, input().split())

    result = xor(bool(x_val), bool(y_val))
    print(int(result))