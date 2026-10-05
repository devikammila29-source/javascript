// 1. Animal → Dog → Puppy
class Animal {
    static type = "Living Being";
    constructor(name) {
        this.name = name;
    }
    displayAnimal() {
        console.log("Animal Name:", this.name);
        console.log("Type:", Animal.type);
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    displayDog() {
        console.log("Breed:", this.breed);
    }
}
class Puppy extends Dog {
    constructor(name, breed, age) {
        super(name, breed);
        this.age = age;
    }
    displayPuppy() {
        console.log("Age:", this.age);
    }
}
let p = new Puppy("Tommy", "Labrador", 2);
p.displayAnimal();
p.displayDog();
p.displayPuppy();

// 2. Person → Student → CollegeStudent
class Person {
    static country = "India";
    constructor(name) {
        this.name = name;
    }
    displayPerson() {
        console.log("Name:", this.name);
        console.log("Country:", Person.country);
    }
}
class Student extends Person {
    constructor(name, rollno) {
        super(name);
        this.rollno = rollno;
    }
    displayStudent() {
        console.log("Roll No:", this.rollno);
    }
}
class CollegeStudent extends Student {
    constructor(name, rollno, course) {
        super(name, rollno);
        this.course = course;
    }
    displayCollege() {
        console.log("Course:", this.course);
    }
}
let s = new CollegeStudent("Krish", 101, "Java Full Stack");
s.displayPerson();
s.displayStudent();
s.displayCollege();

// 3. Vehicle → Car → SportsCar
class Vehicle {
    static company = "Toyota";
    constructor(model) {
        this.model = model;
    }
    displayVehicle() {
        console.log("Model:", this.model);
        console.log("Company:", Vehicle.company);
    }
}
class Car extends Vehicle {
    constructor(model, color) {
        super(model);
        this.color = color;
    }
    displayCar() {
        console.log("Color:", this.color);
    }
}
class SportsCar extends Car {
    constructor(model, color, speed) {
        super(model, color);
        this.speed = speed;
    }
    displaySportsCar() {
        console.log("Speed:", this.speed);
    }
}
let c = new SportsCar("Supra", "Black", "250 km/h");
c.displayVehicle();
c.displayCar();
c.displaySportsCar();

// 4. Employee → Developer → SeniorDeveloper
class Employee {
    static company = "Infosys";
    constructor(name) {
        this.name = name;
    }
    displayEmployee() {
        console.log("Name:", this.name);
        console.log("Company:", Employee.company);
    }
}
class Developer extends Employee {
    constructor(name, language) {
        super(name);
        this.language = language;
    }
    displayDeveloper() {
        console.log("Language:", this.language);
    }
}
class SeniorDeveloper extends Developer {
    constructor(name, language, experience) {
        super(name, language);
        this.experience = experience;
    }
    displaySenior() {
        console.log("Experience:", this.experience);
    }
}
let e = new SeniorDeveloper("Rahul", "JavaScript", "5 Years");
e.displayEmployee();
e.displayDeveloper();
e.displaySenior();
// 5. Bank → Account → SavingsAccount
class Bank {
    static bankName = "SBI";
    constructor(customer) {
        this.customer = customer;
    }
    displayBank() {
        console.log("Customer:", this.customer);
        console.log("Bank:", Bank.bankName);
    }
}
class Account extends Bank {
    constructor(customer, accountNo) {
        super(customer);
        this.accountNo = accountNo;
    }
    displayAccount() {
        console.log("Account No:", this.accountNo);
    }
}
class SavingsAccount extends Account {
    constructor(customer, accountNo, balance) {
        super(customer, accountNo);
        this.balance = balance;
    }
    displaySavings() {
        console.log("Balance:", this.balance);
    }
}
let a = new SavingsAccount("Arjun", 12345, 50000);
a.displayBank();
a.displayAccount();
a.displaySavings();