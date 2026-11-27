// 1. Student Management System
class Student  {
    #Name;
    #Roll_No;
    #Marks;
    constructor(myName,myRollNo,myMarks){
        this.#Name = myName;
        this.#Roll_No = myRollNo;
        this.#Marks = myMarks;
    }
    getName(){
        return this.#Name
    }
    getRollNo(){
        return this.#Roll_No
    }
    getmarks(){
        return this.#Marks
    }
    setname(newname){
        this.#Name = newname
    }
    setRollno(newRollno){
        this.#Roll_No = newRollno
    }
    setmarks(newmarks){
        this.#Marks = newmarks
    }
    addMarks(add){
        this.#Marks = this.#Marks+add
        console.log("After adding Marks is :",this.#Marks);
    }
    checkMarks(){
        if(this.#Marks>40){
            console.log("Student is Passed");
        }
        else{
            console.log("Student is failed");
        }
    }
}
let marks = new Student("Devi",563,85);
console.log("Before Updation");
console.log("My Name is :",marks.getName());
console.log("My Roll_No is :",marks.getRollNo());
console.log("My Marks is :",marks.getmarks());
marks.setname("Chandu")
marks.setRollno(506);
marks.setmarks(94)
marks.addMarks(5);
marks.checkMarks();
console.log("After      ` Updation");
console.log("My Name is :",marks.getName());
console.log("My Roll_No is :",marks.getRollNo());
console.log("My Marks is :",marks.getmarks());

class Mobile {
    #mobileName;
    #price;
    #battery;
    constructor(myMobileName, myPrice, myBattery) {
        this.#mobileName = myMobileName;
        this.#price = myPrice;
        this.#battery = myBattery;
    }
    getMobileName() {
        return this.#mobileName;
    }
    getPrice() {
        return this.#price;
    }
    getBattery() {
        return this.#battery;
    }
    setMobileName(newMobileName) {
        this.#mobileName = newMobileName;
    }
    setPrice(newPrice) {
        this.#price = newPrice;
    }
    setBattery(newBattery) {
        this.#battery = newBattery;
    }
    charge(amount) {
        this.#battery = this.#battery + amount;

        if (this.#battery > 100) {
            this.#battery = 100;
        }

        console.log("Battery after charging:", this.#battery + "%");
    }
    useMobile(amount) {
        this.#battery = this.#battery - amount;

        console.log("Battery after using mobile:", this.#battery + "%");
    }
    checkBattery() {
        if (this.#battery >= 20) {
            console.log("Battery is sufficient");
        } else {
            console.log("Battery is low");
        }
    }
}
let mobile = new Mobile("Samsung", 25000, 50);
console.log("Before Updation");
console.log("Mobile Name :", mobile.getMobileName());
console.log("Price :", mobile.getPrice());
console.log("Battery :", mobile.getBattery() + "%");
mobile.setMobileName("iPhone");
mobile.setPrice(60000);
mobile.charge(30);
mobile.useMobile(20);
mobile.checkBattery();
console.log("After Updation");
console.log("Mobile Name :", mobile.getMobileName());
console.log("Price :", mobile.getPrice());
console.log("Battery :", mobile.getBattery() + "%");


class Employee {
    #name;
    #employeeId;
    #salary;
    constructor(myname, myemployeeId, mysalary) {
        this.#name = myname;
        this.#employeeId = myemployeeId;
        this.#salary = mysalary;
    }
    getName() {
        return this.#name;
    }
    getEmployeeId() {
        return this.#employeeId;
    }
    getSalary() {
        return this.#salary;
    }
    setName(newName) {
        this.#name = newName;
    }
    setEmployeeId(newEmployeeId) {
        this.#employeeId = newEmployeeId;
    }
    setSalary(newSalary) {
        this.#salary = newSalary;
    }
    addBonus(bonus) {
        this.#salary = this.#salary + bonus;

        console.log("Salary after bonus:", this.#salary);
    }
    deduct(amount) {
        this.#salary = this.#salary - amount;

        console.log("Salary after deduction:", this.#salary);
    }
    checkSalary() {
        if (this.#salary >= 30000) {
            console.log("Salary is sufficient");
        } else {
            console.log("Salary is low");
        }
    }
}
let employee = new Employee("Ravi", 501, 35000);
console.log("Before Updation");
console.log("Employee Name :", employee.getName());
console.log("Employee ID :", employee.getEmployeeId());
console.log("Salary :", employee.getSalary());
employee.setName("Kiran");
employee.setEmployeeId(505);
employee.setSalary(40000);
employee.addBonus(5000);
employee.deduct(2000);
employee.checkSalary();
console.log("After Updation");
console.log("Employee Name :", employee.getName());
console.log("Employee ID :", employee.getEmployeeId());
console.log("Salary :", employee.getSalary());