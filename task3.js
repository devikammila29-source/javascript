//1.Check whether a given number is a 3-digit number or not.
let n = 40
if(n>=0 && n<=999){
    console.log(n,"is a 3-digit");
}
else{
    console.log(n,"is not a 3-digit");
    
}

//2.Check whether a given number is divisible by both 3 and 5 or not.
let number = 15
if(number%3==0 || number%5==0){
    console.log(number,"is divisible by 3 and 5");   
}
else{
    console.log(number,"is not divisible by 3 and 5");
    
}

//3.Check whether a given triangle is a valid triangle or not.
//hint :The sum of any two sides should be greater than the third side.
let a = 60
let b =60
let sum_of_two_triangle= a+b
let c = 180-sum_of_two_triangle
if(sum_of_two_triangle>c){
    console.log("valid triangle");  
}
else{
    console.log("not valid triangle");
}

//4.Check whether a given number is a multiple of 10 or not.
let numb = 50
if(numb%10==0){
    console.log(n ,"multiple by 10");
}
else{
    console.log(n ," not multiple by 10");
}

//if-else-if :
//1.Check the type of triangle based on its sides.
//Equilateral, Isosceles, or Scalene.
let a1 = 10;
let b1 = 10
let c1 = 30;
if(a1==b1 && a1==c1 && c1==a1){
    console.log("Equilateral");
}
else if(b1==a1 && b1==c1 || c1==a1){
    console.log("Isosceles");   
}
else{
    console.log("Scalene.");  
}

//2.Calculate the electricity bill based on units consumed.
//0–100: ₹2/unit, 101–200: ₹3/unit, 201–300: ₹5/unit, above 300: ₹7/unit.
let ec_bill = 250;
let u1 = 2
let u2 = 3
let u3 = 5
let u4 = 7

if(ec_bill>=0 && ec_bill<=100){
    console.log(u1*ec_bill);
}
else if(ec_bill>=10 && ec_bill<=200){
    console.log(u2*ec_bill);
}
else if(ec_bill>=20 && ec_bill<=300){
    console.log(u3*ec_bill); 
}
else{
    console.log(u4*ec_bill);   
}

//3.Display the age category.
//Below 13 → Child, 13–19 → Teenager, 20–59 → Adult, 60 and above → Senior Citizen.
let age = 55
if(age<=13){
    console.log("Child");
}
else if(age>=13 && age<=19){
    console.log("Teenager");
}
else if(age>=20 && age<=59){
    console.log("Adult");
}
else{
    console.log("Citizen");  
}

//4.Calculate the discount based on shopping amount.
//Below ₹1,000 → No discount, ₹1,000–₹4,999 → 10%, ₹5,000–₹9,999 → 20%, ₹10,000 and above → 30%.
let amount = 700
if(amount<1000){
    console.log("No Discount");
}
else if(amount>1000 && amount<5000){
    discount = amount*10/100;
    console.log("discount1 :", discount);
}
else if(amount>5000 && amount<10000){
    discount = amount*20/100;
    console.log("discount2 :",discount);
}
else if(amount>10000){
     discount = amount*30/100;
    console.log("discount3 :",discount);
}
else{
    console.log("Wrong amount"); 
}

//5.Display the season based on the month number.
//3–5 → Spring, 6–8 → Summer, 9–11 → Autumn, 12/1/2 → Winter.
let n1 = 2
if(n1>=3 && n1<=5){
    console.log("Spring");
}
else if(n1>=6 && n1<=8){
    console.log("Summer");
}
else if(n1>=9 && n1<=11){
    console.log("Autumn");
}
else if(n1==12 || n1>=1 && n1<=2){
    console.log("Winter");
    
}
else{
    console.log("invalid"); 
}

//6.Check whether a given year is a Leap Year or not.
// Condition 1: year % 400 == 0
//Condition 2: year % 4 == 0 and year % 100 != 0
let year = 400
if(year%400==0){
    console.log("leap year");
}
else if(year%4==0 && year%100!=0){
    console.log("leap years");
}
else{
    console.log("not leap years"); 
}
//nested - if:
//1.Check whether a person is eligible to donate blood.
//Age should be between 18 and 60. If eligible by age, weight should be above 50 kg.
let agee = 50
let weight = 70
if(agee>=18 && age<=60){
    if(weight==50){
        console.log("eligible by age , weight should be above 50kg");
    }
    else {
        console.log("  eligible by age , not weight should be above 50kg");  
    }
}
else{
    console.log("not eligible");   
}

//2.Display the grade based on average only if the student has passed in all 4 subjects.
let sub1 = 100
let sub2 = 60
let sub3 = 70
let sub4 = 90
let avg = (sub1+sub2+sub3+sub4)/4
if(sub1>=35 && sub2>=35 && sub3>=35 && sub4>=35){
    if(avg>=90){
        console.log("grade is O :" ,avg);
    }
    else if(avg>=80 && avg<90){
        console.log("grade is A :" ,avg);
    }
    else if(avg>=60 && avg<70){
        console.log("grade is B :" ,avg);
    }
    else if(avg>=70 && avg<80){
        console.log("grade is C :" ,avg);
    }
     else if(avg>=50 && avg<35){
        console.log("grade is D :" ,avg);
    }
    else{
        console.log("student fail");
    }
}
else{
    console.log("fail");
    
}
//3.Check whether a student is eligible for a scholarship.
//Age should be above 18. If eligible by age, score should be above 86.
 let ages = 18
 let score = 90
 if(ages>=18){
    if(score>=86){
        console.log("eglibile by age , score be above 86");
    }
    else {
        console.log("eglibile by age , not score be above 86");
    }
 } 
 else{
    console.log("not eligibile");
 }