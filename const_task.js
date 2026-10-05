class Restaurant{
    static Res_Name = "Food Place";
    static Res_Location = "Vijaywada";
    constructor(item, category, quantity, price, tableNo, customer){
        this.Res_item = item;
        this.Res_category = category;
        this.Res_quantity = quantity;
        this.Res_price = price;
        this.Res_Table = tableNo;
        this.Res_customer = customer;
    }
    displayDetails(){
        console.log("Restaurant :",Restaurant.Res_Name);
        console.log("Location :",Restaurant.Res_Location);
        console.log("Item :",this.Res_item);
        console.log("Category :",this.Res_category);
        console.log("Quantity :",this.Res_quantity);
        console.log("Price :",this.Res_price);
        console.log("TableNo :",this.Res_Table);
        console.log("Customer :",this.Res_customer);
    }
}
let C1 = new Restaurant("Biryani", "Non-Veg", 2, 500, 10, "Arun");
console.log("----------Custmer 1------------");
C1.displayDetails();
let C2 = new Restaurant("Dhum_Biryani", "Non-Veg", 2, 650, 5, "Teju");
console.log("----------Custmer 2------------");
C2.displayDetails();
let C3 = new Restaurant("Fried Rice", "Veg", 2, 250, 8, "Chetana");
console.log("----------Custmer 3------------");
C3.displayDetails();


class Mobile {
    static brand = "Iphone";
    static country = "South Korea";
    constructor(model, ram, storage, color, price, battery) {
        this.Mod_model = model;
        this.Mod_ram = ram;
        this.Mod_storage = storage;
        this.Mod_color = color;
        this.Mod_price = price;
        this.Mod_battery = battery;
    }
    displaydetalis(){
        console.log("Brand :",Mobile.brand);
        console.log("Country :",Mobile.country);
        console.log("Model :",this.Mod_model);
        console.log("Ram :",this.Mod_ram);
        console.log("Storage :",this.Mod_storage);
        console.log("Color :",this.Mod_color);
        console.log("Price :",this.Mod_price);
        console.log("Battery :",this.Mod_battery);
    }
}
let Model1 = new Mobile("Galaxy S25", "12GB", "256GB", "Black", 80000, "5000mAh")
console.log("----------Model 1----------");
Model1.displaydetalis();
let Model2 = new Mobile("RealMe 11Pro", "120GB", "256GB", "Cream", 25000, "4000mAh")
console.log("----------Model 2----------");
Model2.displaydetalis();
let Model3 = new Mobile("Iphone 17Pro", "12GB", "256GB", "Oranage", 95000, "5000mAh")
console.log("----------Model 3----------");
Model3.displaydetalis();



class Hospital {
    static hospitalName = "Apollo Hospital";
    static location = "Hyderabad";
    constructor(patientName, age, disease, doctor, roomNo, bill) {
        this.patientName = patientName;
        this.age = age;
        this.disease = disease;
        this.doctor = doctor;
        this.roomNo = roomNo;
        this.bill = bill;
    }
    displayDetails(){
        console.log("Hospital_Name :",Hospital.hospitalName);
        console.log("Location ",Hospital.location);
        console.log("Patient Name :",this.patientName);
        console.log("Patient Age :",this.age);
        console.log("Patient Disease :",this.disease);
        console.log("Patient Doctor :",this.doctor);
        console.log("Patient RoomNo :",this.roomNo);
        console.log("Patient Bill :",this.bill);
    }
}
let host1 = new Hospital("Ravi", 35, "Fever", "Dr. Kumar", 101, 5000)
console.log("-------------Patient 1-----------------");
host1.displayDetails();
let host2 = new Hospital("Rhul", 45, "Heart", "Dr. Prasad", 110, 10000)
console.log("-------------Patient 2-----------------");
host2.displayDetails();
let host3 = new Hospital("Arjun", 30, "Typhiod", "Dr.Karthik", 205, 6000)
console.log("-------------Patient 3-----------------");
host3.displayDetails();
let host4 = new Hospital("Ravi", 55, "Asthma", "Dr. Mahesh", 121, 3000)
console.log("-------------Patient 4-----------------");
host4.displayDetails();