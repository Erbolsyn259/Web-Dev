class Vehicle:
    def __init__(self, brand, speed, year):
        self.brand = brand
        self.speed = speed
        self.year = year

    def move(self):
        return f"{self.brand} is moving at {self.speed} km/h"

    def stop(self):
        return f"{self.brand} has stopped"

    def __str__(self):
        return f"Vehicle: {self.brand}, Speed: {self.speed}, Year: {self.year}"


class Car(Vehicle):
    def __init__(self, brand, speed, year, doors):
        super().__init__(brand, speed, year)
        self.doors = doors

    def move(self):
        return f"Car {self.brand} drives on the road at {self.speed} km/h"

    def honk(self):
        return f"{self.brand} says Beep Beep!"


class Bike(Vehicle):
    def __init__(self, brand, speed, year, type):
        super().__init__(brand, speed, year)
        self.type = type

    def move(self):
        return f"Bike {self.brand} rides at {self.speed} km/h"

    def ring_bell(self):
        return f"{self.brand} rings the bell!"