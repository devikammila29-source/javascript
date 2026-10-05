//-----------named Function-----------
//without input and without return
let students = {
    name : "Anusha",
    age : 25,
    Course : "python",
    data:function details(){
        console.log(students.name);
        console.log(students.age);
        console.log(students.Course);
    }
}
students.data();
// students[data]();

//with input and without return
let student1 = {
    name : "Chetana",
    age : 22,
    Course: "java",
    data1 : function details(student1){
        console.log(student1.name);
        console.log(student1.age);
        console.log(student1.Course);
        
    }
}
student1.data1(student1);
// student1[data1(student1)];
//without input and with return
let student2 = {
    name : "teju",
    age : 21,
    Course : "Meran",
    data2 : function details(){
        console.log(student2.name);
        console.log(student2.age);
        console.log(student1.Course);
        
        return student2
    }
}
let num=student2.data2();

//with input and with return
let student3 = {
    name : "Anu",
    age : 24,
    Course : "data science",
    data3 : function details(student3){
        console.log(student3.name);
        return student3
    }
}
let da=student3.data3(student3)

//-------------Annonymous-------------
//Without input and without return
let mobile = {
    model : "Iphone",
    color : "oranage",
    Ram : "256gb",
    mob:function(){
        console.log(mobile.model);
    }
}
mobile.mob();

//with input and without return
let car = {
    color : "black",
    model : "BW",
    car1:function(car){
        console.log(car);
    }
}
car.car1(car);

//without input and with return
let cars = {
    color : "black",
    model : "BW",
    car2:function(){
        return cars
    }
}
console.log(cars.car2());

//with input and with return
let Course = {
    name : "data Science",
    fee : 40000,
    cour : function(Course){
        return Course
    }
}
console.log(Course.cour(Course));

// ----------Arrow-----------
//Without input and without return
let laptop = {
    version : "intel core i5",
    price : 55000,
    Ram : "32GB",
    lap :() => {
        console.log(laptop.version);
        console.log(laptop.price);
        console.log(laptop.Ram);
    }
}
laptop.lap();

//With input and without return
let college = {
    name : "Vishnu",
    location : "Bhimavaram",
    Course : "Java , Python, Meran",
    col : (college) =>{
        console.log(college.name);
        console.log(college.location);
        console.log(college.Course);
    }
}
college.col(college);

//Without input and with return
let product = {
    name : "Dell",
    quantity : 2,
    process : "windows 11",
    pro : () => {
        return product;
    }
}
console.log(product.pro());
//With input and with return
let person = {
    name : "Nani",
    city : "Hydrabad",
    age : 22,
    pers : (person) =>{
        return person
    }
}
console.log(person.pers(person));
