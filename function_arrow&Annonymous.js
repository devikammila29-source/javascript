//----------Annonymous----------
//1.Annonymous function without Input and without Return:
// 1.Find sum of digits.
let sumDigits = function(){
    let n = 4658;
    let sum = 0;
    while(n!=0){
        let ld=n%10;
        sum+=ld;
        n = parseInt(n/10);
    }
    console.log("Sum of Digits :",sum);
}
sumDigits();

// 2. Check prime number.
let PrimeNum = function(){
    let n = 13;
    let count = 0
    for(let i=1; i<=n; i++){
        if(n%i==0){
            count++;
        }
    }
    if(count==2){
        console.log("Prime");
    }else{
        console.log("Not a Prime");
    }
}
PrimeNum();

// 3. Reverse a number.
let ReverseNum = function(){
    let n = 12345;
    let rev = 0;
    while(n!=0){
        let ld=n%10;
        rev=rev*10+ld;
        n = parseInt(n/10)
    }
    console.log(rev);
}
ReverseNum();

// 4. Print Fibonacci series.
let Fibonacci = function(){
    let a = 0;
    let b = 1;
    for(let i=1; i<=10; i++){
        console.log(a);
        let temp = a+b
        a = b;
        b = temp;
    }
}
Fibonacci();

// 5. Check whether a number is positive or negative.
let positive = function(){
    let num = -30;
    if(num>0){
        console.log("Postive");
    }else if(num<0){
        console.log("Negative"); 
    }else{
        console.log("Zero");
    }
}
positive();

//2.Annonymous function with Input and without Return:
// 1. Check whether given number is factors or not
let factors = function(n){
    for(let i=1; i<=n; i++){
        if(n%i==0){
            console.log(i);
        }
    }
}
factors(6);

// 6. Find the given number is factorial or not.
let Factorials = function(n){
   let fact = 1
   for(let i=1; i<=n; i++){
    fact*=i
   }
   console.log(fact);
}
Factorials(5);

// 7.Write a function that accepts a number and prints whether it is an Armstrong number.
let Armstrong = function(n){
    let temp = n;
    let sum = 0;
    let count = 0;
    while(temp!=0){
        count++;
        temp= parseInt(temp/10);
    }
    temp = n;
    while(temp!=0){
        let ld= temp%10;
        sum=ld**count+sum;
        temp = parseInt(temp/10)
    }
    if(sum==n){
        console.log("Armstrong");
    }else{
        console.log("Not a Armstrong");
    }
}
Armstrong(153);

// 8.Find first number whose digit sum is 10.
let fristSum = function(start, end){
    for(let n=start; n<=end; n++){
        let temp = n;
        let sum = 0;
        while(temp!=0){
            let ld = temp%10;
            sum+=ld;
            temp = parseInt(temp/10);
        }
        if(sum==10){
            console.log("Sum of digits:",n);
            break;
        }
    }
}
fristSum(1,100);

//9.Write a function that the largest number from 10 and 20.
let largest_num = function(n1, n2){
    if(n1>n2){
        console.log(n1,"is a largest");
    }else{
        console.log(n2, "is a largest");
    }
}
largest_num(10,20);

// 10. Check whether given number is even or Odd.
let EvenOdd = function(n){
    if(n%2==0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
EvenOdd(10);

//3.Annonymous function without Input and with Return:
//11. check whether given numbers is strong or not
let storng = function (){
    let n = 145;
    let temp = n;
    let sum = 0
    while(temp!=0){
        let ld=temp%10;
        let fact = 1;
        for(let i=1; i<=ld; i++){
            fact*=i;
        }
        sum+=fact;
        temp = parseInt(temp/10)
    }
    if(sum==n){
        return n+ "strong"
    }else{
        return n+ "Not a strong"
    }
}
console.log(storng());

//12.Write a function that returns the sum of digits of 45678.
let sum_digits = function (){
    let n = 45678;
    let sum = 0;
    while(n!=0){
        let ld = n%10;
        sum+=ld;
        n = parseInt(n/10)
    }
    return sum;
}
console.log(sum_digits());

//13.Write a function that returns the sum of numbers from 1 to 10.
let SumofNum = function(){
    let sum = 0;
    for(let i=1; i<=10; i++){
        sum+=i;
    }
    return sum;
}
console.log(SumofNum());

//14.Write a function that returns the square of 15.
let square = function(){
    let n = 15
    return n*n;
}
console.log(square());

//15.Write a function that returns the number of digits in 987654.
let NumofDigit = function(){
    let n = 987654;
    let count = 0;
    while(n!=0){
        let ld = n%10;
        count++;
        n = parseInt(n/10)
    }
    return count;
}
console.log(NumofDigit());

//4.Annonymous function with Input and with Return:
// 16.Write an anonymous function that accepts a number and returns the sum of even digits.
let SumEven = function(n){
    let sum = 0;
    while(n!=0){
        let ld = n%10;
        if(n%2==0){
            sum+=ld;
        }
        n = parseInt(n/10)
    }
    return sum;
}
console.log(SumEven(1234567));

// 17.Write a function that accepts a number and returns the largest digit.
let LargestDigit = function(n){
    let max = 0
    while(n!=0){
        let ld=n%10
        if(max<ld){
            max = ld;
        }
        n = parseInt(n/10)
    }
    return max;
}
console.log(LargestDigit(457863));

//18.Write a function that accepts two numbers and returns the GCD/HCF.
let gcd = function (a, b) {
    while (b != 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(gcd(24, 36));

// 19.Write an anonymous function that accepts a number and returns the sum of odd digits.
let SumofOdd = function(n){
    let sum = 0;
    while(n!=0){
        let ld = n%10;
        if(ld%2!=0){
            sum+=ld;
        }
        n = parseInt(n/10)
    }
    return sum;
}
console.log(SumofOdd(987654321));

// 20.Write an anonymous function that accepts a number and returns the product of its digits.
let productofDigits = function(n){
    let product = 1;
    while(n!=0){
        let ld = n%10
        product*=ld
        n = parseInt(n/10)
    }
    return product;
}
console.log(productofDigits(12345));

// --------Arrow Function----------
// 1.Arrow function without Input and without Return:
//1. Check whether a number is positive or negative.
let positiveNum = () => {
    let n = -12;
    if(n>0){
        console.log(n + "Positive");
    }else if(n<0){
        console.log(n + "Negative");
    }else{
        console.log("Zero");
    }
}
positiveNum();

// 2.Write an arrow function to print the sum of numbers from 1 to 10.
let sum = () => {
    let sum = 0;
    for(let i=1; i<=10; i++){
        sum+=i;
    }
    console.log(sum);
}
sum();

//3.Print multiplication table.
let table = () => {
    let n = 5;
    for(let i=1; i<=10; i++){
        console.log(n, "X", i , "=", n*i);
    }
}
table();

// 4.Count digits of a number.
let Countdigit = () => {
    let n = 583271;
    let count = 0;
    while(n!=0){
        count++;
        n = parseInt(n/10)
    }
    console.log(count);
}
Countdigit();

//5.Find sum of digits.
let Sumofdigi = () => {
    let n = 3456;
    let sum = 0;
    while(n!=0){
        let ld = n%10
        sum+=ld
        n = parseInt(n/10)
    }
    console.log(sum);
}
Sumofdigi();

//2.Arrow function with Input and without Return:
// 6.Write an arrow function to print the squares of numbers from 1 to 10.
let squares = (n) => {
    for(let i = 1; i <= n; i++) {
        console.log(i * i);
    }
};
squares(10);

//7.Write an arrow function to print the cubes of numbers from 1 to 10.
let cubes = (n) => {
    for(let i=1; i<=n; i++){
        console.log(i**3);
    }
}
cubes(5)

// 8.Write an arrow function to print the first 10 Fibonacci numbers.
let Fibonaccinum = (n) => {
    let a = 0;
    let b = 1;
    while(n!=0){
        console.log(a);
        let c = a+b;
        a = b;
        b = c;
        n--;
    }
}
Fibonaccinum(10);

// 9.Write an arrow function to print all prime numbers between 1 and 100.
let primeCount = () =>{
    let primeCount = 0;
    for(let n= 1; n<=100; n++){
        let count = 0;
        for(let i=1; i<=n; i++){
            if(n%i==0){
                count++;           
             }
        }
        if(count==2){
            primeCount++;
        }
    }
    return primeCount;
}
console.log(primeCount());

// 10.Write an arrow function to print all Armstrong numbers or not.
let ArmstrongNum = (n) =>{
    let temp = n;
    let sum = 0;
    let count = 0;
    while(temp!=0){
       count++
       temp = parseInt(temp/10)
    }
    temp=n;
    while(temp!=0){
        let ld= temp%10
        sum=ld**count+sum;
        temp= parseInt(temp/10)
    }
    if(sum==n){
        console.log("Armstrong");
        
    }else{
         console.log("Not a Armstrong");
    }
}
ArmstrongNum(153);

//3.Arrow function without Input and with Return:
// 11.Write an arrow function to print all palindrome numbers between 1 and 500.
let palindrome = (n) => {
    let temp = n;
    let revs = 0;
    while(n!=0){
        let ld = n%10;
        revs = revs*10+ld
        n = parseInt(n/10)
    }
    if(temp==revs){
        console.log("palindrome");
    }else{
        console.log("Not a palindrome");
    }
}
palindrome(1221);

// 13.Write an arrow function to print all Strong numbers or not.
let storngs =  (n) => {
    let temp = n;
    let sum = 0
    while(temp!=0){
        let ld=temp%10;
        let fact = 1;
        for(let i=1; i<=ld; i++){
            fact*=i;
        }
        sum+=fact;
        temp = parseInt(temp/10)
    }
    if(sum==n){
        console.log();
        
    }else{
        console.log("Not a strong");
        
    }
}
storngs(151);

// 14.Write an arrow function to print the sum of even digits of a given fixed number.
let SumEvens = (n) => {
    let sum = 0;
    while(n != 0) {
        let ld = n % 10;
        if(ld % 2 == 0) {
            sum += ld;
        }
        n = parseInt(n / 10);
    }
    console.log(sum);
};
SumEvens(1234567);

// 15.Write an arrow function that accepts a number and returns the count of even digits in it.
let COuntevendigits = (n) => {
    let count = 0;
    while(n!=0){
        let ld = n%10;
        if(ld%2==0){
            count++;
        }
        n=parseInt(n/10)
    }
    console.log(count);
}
COuntevendigits(1259684);

//4.Arrow function with Input and with Return:
// 16.Write an arrow function that accepts a number and returns the sum of odd digits.
let sumoddDigits = (n) => {
    let sum = 0;
    while(n!=0){
        let ld = n%10
        if(ld%2!=0){
         sum+=ld;
    }
    n = parseInt(n/10)
    }
    return sum;
}

console.log(sumoddDigits(9765431));

// 17.Write an arrow function that accepts a number and returns the reverse of the number.
let revers = (n) => {
    let rev = 0;
    while(n!=0){
        let ld = n%10
        rev = rev*10+ld
        n = parseInt(n/10)
    }
   return rev;
}
console.log(revers(12345));

// 18.Write an arrow function that accepts a number and returns the largest digit in it.
let largestdigits = (n) => {
    let max = 0
    while(n!=0){
        let ld = n%10
        if(max<ld){
            max=ld
        }
        n = parseInt(n/10)
    }
    return max;
}
console.log(largestdigits(376854));

// 19.Write an arrow function that accepts a number and returns the product of its digits.
let productofDigit = (n) =>{
    let product = 1;
    while(n!=0){
        let ld = n%10
        product*=ld
        n = parseInt(n/10)
    }
    return product;
}
console.log(productofDigit(1345));

// 20. check whether given numbers is prefect or not
let perfectNum = (n) => {
    let sum = 0;
    for(i=1; i<=n; i++){
        if(n%i==0){
            sum=sum+i;
        }
    }
    if(sum==n){
        return n+ "prefect"
    }else{
        return n+ "Not a prefect"
    }
}
console.log(perfectNum(6));

