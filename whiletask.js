//1. Find the average of numbers from 1 to N.
// Example: If N = 5, calculate the average of 1, 2, 3, 4, 5.
// let i = 1
// sum = 0
// while(i<=5){
//     sum+=i
//     avg=sum/i
//     i+=1
// }
// console.log(avg);

//2.Find the sum of squares of numbers from 1 to N.
//Example: If N = 5, calculate 1² + 2² + 3² + 4² + 5².
// let i = 1
// sum = 0
// while(i<=5){
//     sum+=i
//     sum = sum+(i**2)
//     i+=1
// }
// console.log(sum);

//3.Find the sum of cubes of numbers from 1 to N.
// Example: If N = 5, calculate 1³ + 2³ + 3³ + 4³ + 5³.
// let i = 1
// sum = 0
// while(i<=5){
//     sum = sum+(i**3)
//     i+=1
// }
// console.log(sum);

//4.Calculate the power of a number without using the ** operator.
//Example: If base = 2 and power = 5, calculate 2 × 2 × 2 × 2 × 2.
// base = 2
// power = 5
// result = 1
// i = 1
// while(i<=5){
//     result=result*base
//     i+=1
// }
// console.log(result);

//5.Display the first N terms of the Fibonacci series.
//Example: If N = 7, display 0, 1, 1, 2, 3, 5, 8.
// let n = 7
// let a = 0
// let b = 1
// let i = 0
// while(i<=n){
//     console.log(a);
//     c=a+b
//     a=b
//     b=c
//     i+=1
    
// }

//6.Display the first N terms of the series:
//1, 1/2, 1/3, 1/4, ...
//Example: If N = 4, display 1, 1/2, 1/3, 1/4.
// let  n1 = 4
// let i=1
// while(i<=4){
//     console.log("1/"+i);
//     i+=1
    
// }

//7.Display the first N terms of the series:
//1, 11, 111, 1111, 11111, ...
// /Example: If N = 5, display 1, 11, 111, 1111, 11111.
// let i = 1
// num=0
// while(i<=5){
//     num= num*10+1
//     i+=1
//     console.log(num);
    
// }

//8.Display the first N terms of the series:
//1, 3, 9, 27, 81, ...
//Each term is obtained by multiplying the previous term by 3.
// let i = 1
// let mul=1
// while(i<=5){
//     console.log(mul);
//     mul=mul*3
//     i+=1
    
// }

//9.Print all numbers from 10 to 150 that are divisible by both 3 and 5.
// let i = 10
// while(i<=150){
//     if(i%3==0 && i%5==0){
//         console.log(i); 
//     }
//     i+=1
// }

//10.Count how many numbers from 200 down to 50 are divisible by 7.
// let  i = 200
// let count = 0
// while(i>=50){
//     if(i%7==0){
//         count+=1
//     }
//     i-=1
// }
// console.log(count);

//11.Print numbers from 120 down to 20 that are not divisible by 5.
// let i = 120
// let count = 0
// while(i>=20){
//     if(i%5!=0){
//         count+=1
//     }
//     i-=1
// }
// console.log(count);

//12.Find the average of all even numbers in the range from 10 to 100.
// let i =10
// sum = 0
// count = 0
// while(i<=100){
//     if(i%2==0){
//         count+=1
//         sum+=i
//         avg=sum/count
//     }
//     i+=1
// }
// console.log(avg);

//13.Find the average of all factors of a given number.
let i = 1
let factor = 6
let sum = 0
count = 0
while(i<=6){
    if(i%6==0){
         sum+=i
         count+=1
    }
   i+=1
}
let avg = sum/count
console.log((avg));
