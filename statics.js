class Bank{
    static bank_Name = "Inno";
    set_data(ac_no,ac_Name,ac_blc){
        this.myAcNo = ac_no;
        this.myAcName = ac_Name;
        this.myAcBlc = ac_blc;
    }
    //display Account Data
    displayAccdetails(){
        console.log("Account Name",Bank.bank_Name);
        console.log("Account Number",this.myAcNo);
        console.log("Account Holder Name",this.myAcName);
        console.log("Account Balance",this.myAcBlc);
    }
}
let user1 = new Bank()
console.log("_----------Account Holder 1-----------");
user1.set_data(101,"Hero1",45670987);
user1.displayAccdetails();

let user2 = new Bank()
console.log("_----------Account Holder 2-----------");
user2.set_data(102,"Hero2",98767);
user2.displayAccdetails();

let user3 = new Bank()
console.log("_----------Account Holder 3-----------");
user3.set_data(103,"Hero3",856009);
user3.displayAccdetails();
// 1
class students{
    static college = "Vishnu College";
    static course = "Java Full Stack";
    static location = "Bhimavaram";
    set_Data(Stu_name,Stu_Age,Stu_Rollno,Stu_marks,Stu_grade){
        this.studentName = Stu_name;
        this.studentsAge = Stu_Age;
        this.studentRollNo = Stu_Rollno;
        this.studentmarks = Stu_marks;
        this.studentgrade = Stu_grade;
    }
    displayStuDetails(){
        console.log("Students college :",students.college);
        console.log("Students course :",students.course);
        console.log("Students location :",students.location);
        console.log("Students Name :",this.studentName);
        console.log("Students Age :",this.studentsAge);
        console.log("Students RollNo :",this.studentRollNo);
        console.log("Students Marks :",this.studentmarks);
        console.log("Students Grade :",this.studentgrade);
    }
}
// 2
let Stu1 = new students();
console.log("----------Student 1-----------");
Stu1.set_Data("Devi",21,563,96,"A+")
Stu1.displayStuDetails();
let Stu2 = new students();
console.log("----------Student 2-----------");
Stu2.set_Data("chetana",22,506,85,"A")
Stu2.displayStuDetails();
let Stu3 = new students();
console.log("----------Student 3-----------");
Stu3.set_Data("Tejasri",23,537,80,"B")
Stu3.displayStuDetails();

class Employee {
    static company = "Infosys";
    static location = "Hyderabad";
    static department = "Software";
    set_Data(emp_Name, emp_Id, emp_Age, emp_Salary) {
        this.employeeName = emp_Name;
        this.employeeId = emp_Id;
        this.employeeAge = emp_Age;
        this.employeeSalary = emp_Salary;
    }
    displayDetails() {
        console.log("Company :", Employee.company);
        console.log("Location :", Employee.location);
        console.log("Department :", Employee.department);
        console.log("Employee Name :", this.employeeName);
        console.log("Employee ID :", this.employeeId);
        console.log("Employee Age :", this.employeeAge);
        console.log("Employee Salary :", this.employeeSalary);
    }
}
let emp1 = new Employee();
console.log("----------Employee 1-----------");
emp1.set_Data("Rahul", 101, 22, 30000);
emp1.displayDetails();
let emp2 = new Employee();
console.log("----------Employee 2-----------");
emp2.set_Data("Priya", 102, 23, 35000);
emp2.displayDetails();
let emp3 = new Employee();
console.log("----------Employee 3-----------");
emp3.set_Data("Kiran", 103, 24, 40000);
emp3.displayDetails();

// 3
class Product {
    static company = "Samsung";
    static category = "Electronics";
    static location = "Hyderabad";
    set_Data(product_Name, product_Id, product_Price, product_Rating) {
        this.productName = product_Name;
        this.productId = product_Id;
        this.productPrice = product_Price;
        this.productRating = product_Rating;
    }
    displayDetails() {
        console.log("Company :", Product.company);
        console.log("Category :", Product.category);
        console.log("Location :", Product.location);
        console.log("Product Name :", this.productName);
        console.log("Product ID :", this.productId);
        console.log("Product Price :", this.productPrice);
        console.log("Product Rating :", this.productRating);
    }
}
let product1 = new Product();
console.log("----------Product 1-----------");
product1.set_Data("Samsung Mobile", 101, 25000, 4.5);
product1.displayDetails();
let product2 = new Product();
console.log("----------Product 2-----------");
product2.set_Data("Samsung TV", 102, 45000, 4.2);
product2.displayDetails();
let product3 = new Product();
console.log("----------Product 3-----------");
product3.set_Data("Samsung Laptop", 103, 65000, 4.7);
product3.displayDetails();