// 1. Animal → Dog & Cat
class Animal {
    eat() {
        console.log("Animals can eat");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Dog can bark");
    }
}
class Cat extends Animal {
    meow() {
        console.log("Cat can meow");
    }
}
let d = new Dog();
d.eat();
d.bark();
let c = new Cat();
c.eat();
c.meow();

// 2. Person → Student & Teacher
class Person {
    display() {
        console.log("This is a person");
    }
}
class Student extends Person {
    study() {
        console.log("Student is studying");
    }
}
class Teacher extends Person {
    teach() {
        console.log("Teacher is teaching");
    }
}
let s = new Student();
s.display();
s.study();
let t = new Teacher();
t.display();
t.teach();

// 3. Vehicle → Car & Bike
class Vehicle {
    start() {
        console.log("Vehicle is starting");
    }
}
class Car extends Vehicle {
    drive() {
        console.log("Car is driving");
    }
}
class Bike extends Vehicle {
    ride() {
        console.log("Bike is riding");
    }
}
let c2 = new Car();
c2.start();
c2.drive();
let b = new Bike();
b.start();
b.ride();

// 4. Employee → Developer & Manager
class Employee {
    company() {
        console.log("Employee works in a company");
    }
}
class Developer extends Employee {
    coding() {
        console.log("Developer writes code");
    }
}
class Manager extends Employee {
    manage() {
        console.log("Manager manages the team");
    }
}
let d1 = new Developer();
d1.company();
d1.coding();
let m = new Manager();
m.company();
m.manage();

// 5. Bank → Savings & Current
class Bank {
    bankName() {
        console.log("Bank Name: SBI");
    }
}
class Savings extends Bank {
    savingsAccount() {
        console.log("This is a Savings Account");
    }
}
class Current extends Bank {
    currentAccount() {
        console.log("This is a Current Account");
    }
}
let s1 = new Savings();
s1.bankName();
s1.savingsAccount();
let c1 = new Current();
c1.bankName();
c1.currentAccount();