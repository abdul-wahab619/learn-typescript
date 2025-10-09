class Person {
  name: string;
  age: number;

  // constructor initializes class properties
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // method
  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// create object
const person1 = new Person("Abdul", 24);
person1.greet();

class Car {
  public brand: string;
  private engineNumber: string;
  protected year: number;

  constructor(brand: string, engineNumber: string, year: number) {
    this.brand = brand;
    this.engineNumber = engineNumber;
    this.year = year;
  }

  getInfo(): void {
    console.log(
      `Car: ${this.brand} having engine number: ${this.engineNumber}, Year: ${this.year}`
    );
  }
}

class ElectricCar extends Car {
  batteryCapacity: number;

  constructor(
    brand: string,
    engineNumber: string,
    year: number,
    batteryCapacity: number
  ) {
    super(brand, engineNumber, year);
    this.batteryCapacity = batteryCapacity;
  }

  getBatteryInfo() {
    // can access protected member 'year'
    console.log(`Battery: ${this.batteryCapacity}kWh (${this.year})`);
  }
}

const tesla = new ElectricCar("Tesla", "ENG123", 2023, 100);
tesla.getInfo();
tesla.getBatteryInfo();
// tesla.engineNumber ❌  private -> can't access

class Account {
  private _balance: number = 0;

  get balance(): number {
    return this._balance;
  }

  set balance(amount: number) {
    if (amount < 0) throw new Error("Balance cannot be negative");
    this._balance = amount;
  }
}

const acc = new Account();
acc.balance = 500; // setter called
console.log(acc.balance); // getter called

class Animal {
  makeSound() {
    console.log("Some sound...");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof 🐶");
  }
}

const dog = new Dog();
dog.makeSound(); // Woof 🐶
