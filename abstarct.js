// Food Delivery Bill Calculator
class Food{
    constructor(){
        if (new.target === Food){
            throw new Error("Cannot create object for abstract class");
        }
    }
    calculateBill(){
        throw new Error("Subclass must implement calculateBill()");
    }
}
class NormalFood extends Food{
    #pricePerItem=100;
    calculateBill(quantity){
        let total = quantity*this.#pricePerItem;
        return total;
    }
}

class PremiumFood extends Food {
    #pricePerItem = 200;
    #taxRate = 0.05;
    calculateBill(quantity) {
        let baseCost = quantity * this.#pricePerItem;
        let total = baseCost + (baseCost * this.#taxRate);
        return total;
    }
}
class FoodApp{
    showBill(foodType, quantity){
        console.log("Quantity:", quantity);
        console.log("Total bill:", foodType.calculateBill(quantity));
    }
}
let food1=new NormalFood();
let food2=new PremiumFood();
let app=new FoodApp();

app.showBill(food1,2);
app.showBill(food2,2);

// Movie Ticket Booking
class Ticket{
    constructor(){
        if (new.target == Ticket){
            throw new Error("Cannot create object for abstract class");
        }
    }
    calculatePrice(){
        throw new Error("Subclass must implement calculatePrice()");
    }
}
class NormalTicket extends Ticket{
    #price=150;
    calculatePrice(count){
        return count*this.#price;
    }
}
class PremiumTicket extends Ticket{
    #price=300;
    #serviceCharge=50;
    calculatePrice(count){
        let baseCost=count*this.#price;
        let total=baseCost+(count*this.#serviceCharge);
        return total;
    }
}
class CinemaApp {
    showPrice(ticketType,count) {
        console.log("Number of tickets:",count);
        console.log("Total price:",ticketType.calculatePrice(count));
    }
}
let ticket1=new NormalTicket();
let ticket2=new PremiumTicket();
let cinema=new CinemaApp();
cinema.showPrice(ticket1,2);
cinema.showPrice(ticket2,2);


// Online Payment System
class Payment{
    constructor(){
        if (new.target == Payment){
            throw new Error("Cannot create object for abstract class");
        }
    }
    makePayment(){
        throw new Error("Subclass must implement makePayment()");
    }
}
class UpiPayment extends Payment{
    #upiId = "gopika@upi";
    makePayment(amount){
        console.log("Payment through UPI");
        console.log("UPI ID:", this.#upiId);
        console.log("Amount paid:", amount);
    }
}
class CardPayment extends Payment{
    #cardNumber = "3452-3214-1234";
    makePayment(amount){
        console.log("Payment through Debit Card");
        console.log("Card Number:", this.#cardNumber);
        console.log("Amount paid:", amount);
    }
}
class PaymentApp{
    pay(paymentType,amount){
        paymentType.makePayment(amount);
    }
}
let payment1 = new UpiPayment();
let payment2 = new CardPayment();
let a = new PaymentApp();
a.pay(payment1, 500);
console.log("------------------");
a.pay(payment2, 1000);
