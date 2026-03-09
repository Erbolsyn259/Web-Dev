from models import Vehicle, Car, Bike

def main():
    v1 = Vehicle("Generic", 50, 2010)
    c1 = Car("Toyota", 120, 2022, 4)
    b1 = Bike("Yamaha", 80, 2021, "Sport")

    vehicles = [v1, c1, b1]

    for v in vehicles:
        print(v)
        print(v.move())  
        print(v.stop())
        print()

    print(c1.honk())
    print(b1.ring_bell())


if __name__ == "__main__":
    main()