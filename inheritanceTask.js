//Ex-1
class Instagram{
    constructor(follower,likes,views){
        this.follower = follower;
        this.likes = likes;
        this.views = views;
    }
    displayDetalis(){
        console.log("Insta Followers :",this.follower);
        console.log("Insta Likes :",this.likes);
        console.log("Insta Views :",this.views);
    }
}
class App extends Instagram{
    constructor(follower,likes,views,Id){
        super(follower,likes,views)
        this.insta_id = Id;
    }
    displayAppDetalis(){
        super.displayDetalis()
        console.log("Insta Id :",this.insta_id);
    }
}
let Inst = new App(247,"392k","2.4M","Insta@123");
Inst.displayAppDetalis();

//Ex-2
class E_commerce{
    constructor(productname,quantity,price){
        this.E_Name = productname;
        this.E_quantity = quantity;
        this.E_price = price;
    }
    displayDetalis(){
        console.log("The Product Name :",this.E_Name);
        console.log("The Quantity :",this.E_quantity);
        console.log("The Price :",this.E_price);
    }
}
class Product extends E_commerce{
    constructor(productname,quantity,price,address){
        super(productname,quantity,price)
        this.E_address = address;
    }
    displayEdetalis(){
        super.displayDetalis()
        console.log("The Address :",this.E_address);
    }
}
let e = new Product(101,"Smart Watch",2500,"Hyderabad");
e.displayEdetalis();

//Ex-3
class Shopping{
    constructor(name,product){
        this.c_Name = name;
        this.c_product = product;
    }
    displayDetalis(){
        console.log("Coustmer Name :",this.c_Name);
        console.log("Coustmer Product :",this.c_product);
    }
}
class Dress extends Shopping{
    constructor(name,product,price){
        super(name,product)
        this.c_price = price;
    }
    displayrDetalis(){
        super.displayDetalis()
        console.log("Price :",this.c_price);
    }
}
let s = new Dress("Anusha","Dress",2000);
s.displayrDetalis();

//Ex-4
class Vehicle {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    displayDetails() {
        console.log("Vehicle Brand :", this.brand);
        console.log("Vehicle Price :", this.price);
    }
}
class Car extends Vehicle {}
let c = new Car("Toyota", 1500000);
c.displayDetails();