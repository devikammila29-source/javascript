//Method Overriding
// 1. Single Inheritance – Method Overriding
class Bank {
    interest() {
        console.log("Bank provides interest");
    }
}
class SBI extends Bank {
    interest() {
        console.log("SBI provides 7% interest");
    }
}
let bank = new Bank();
bank.interest();
let sbi = new SBI();
sbi.interest();

//2. Multilevel Inheritance – Method Overriding
class payment{
    pay(){
        console.log("Making a payment");
    }
}
class Credticard extends payment{
    pay(){
        super.pay();
        console.log("Payment made using Credit Card");

    }
}
class UPI extends Credticard{
    pay(){
        super.pay()
        console.log("Payment made using UPI");
    }
}
let card = new Credticard();
card.pay();
let upi = new UPI();
upi.pay();

// 3. Method Overriding with Hierarchical Inheritance
class Shape {
    draw() {
        console.log("Drawing a shape");
    }
}
class Circle extends Shape {
    draw() { // Overriding Shape
        console.log("Drawing a circle");
    }
}
class Rectangle extends Shape {
    draw() { // Overriding Shape
        console.log("Drawing a rectangle");
    }
}
let circle = new Circle();
circle.draw();
let rectangle = new Rectangle();
rectangle.draw();