// 1️⃣ Named Function — Without Input (Arguments) & Without Return
// Basic — 1 to 5
// 1. Print numbers from 1 to 10
function number(){
    for(let i=1; i<=10; i++){
        console.log(i);
        
    }
}
number();

// 2. Print even numbers from 1 to 20.
function EvenNum(){
    for(let i=1; i<=20; i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
EvenNum();

// 3. Print odd numbers from 1 to 20.
function OddNum(){
    for(let i=1; i<=20; i++){
        if(i%2!=0){
            console.log(i);
        }
    }
}
OddNum();

// 4. Find sum of 1 to 10.
function FindSum(){
    let sum =0
    for(let i=1; i<=10; i++){
        sum+=i
    }
    console.log("Sum of the 1 to 10 numbers:",sum);
}
FindSum();

// 5. Check whether a number is positive or negative.
function CheckNum(){
    let number = 50
    if(number>0){
        console.log("Positive");
    }
    else if(number<0){
        console.log("Negative");
    }
    else{
        console.log("Zero");
    }
}
CheckNum();

// Intermediate — 6 to 10
// 6. Print multiplication table.
function Multiply(){
    let n = 9
    for(let i=1; i<=10; i++){
        console.log(n + "X" + i + "=" + n*i);
    }
}
Multiply();

// 7. Count digits of a number.
function CountDigit(){
    let n = 583271;
    let count = 0
    while(n!=0){
        count++
        n= parseInt(n/10)
    }
    console.log(count);
}
CountDigit();

// 8. Find sum of digits.
function SumOfDigit(){
     let n = 4568;
    let sum = 0;
    while(n!=0){
        let ld = n%10
        sum+=ld
        n= parseInt(n/10)
    }
    console.log("Sum of Digit :",sum);
}
SumOfDigit();

// 10. Check prime number.
function Prime(){
    let n = 13
    let count = 0
    for(let i=1; i<=n; i++){
        if(n%i==0){
            count++
        }
    }
     if(count==2){
            console.log(n," is a Prime");
        }else{
            console.log(n, "Not  Prime");
        }
}
Prime();

// Advanced — 11 to 15
// 11. Reverse a number.
function ReverseNum(){
     let n = 12345;
    let rev = 0;
    while(n!=0){
        let ld=n%10
        rev= rev*10+ld
        n = parseInt(n/10)
    }
    console.log(rev);
}
ReverseNum();

// 12. Check palindrome.
function Palindrome(){
    let n = 1221
    let temp = n
    let rev = 0
    while(n!=0){
        let ld=n%10
        rev= rev*10+ld
        n= parseInt(n/10)
    }
    if(temp==rev){
        console.log(temp,"is Palindrome"); 
    }else{
        console.log(temp,"Not A Palindrome");
    }
}
Palindrome();

// 13. Print Fibonacci series.
function Fibonacci(){
    let a = 0
    let b = 1
    for(i=1; i<=10; i++){
        console.log(a);
        let c = a+b;
        a = b
        b = c 
    }
}
Fibonacci();

// 14. Find first multiple of 9 between 50 and 100.
function Multiple(){
    for(let i=50; i<=100; i++){
    if(i%9==0){
        console.log(i);
        break;
    }
}
}
Multiple();

// 15. Print numbers 1–50, skip multiples of 3, stop at 40.
function Multipes(){
    for(let i=1; i<=50; i++){
    if(i%3==0){
        continue;
    }
    if(i==40){
        break;
    }
    console.log(i);
  }
}
Multipes();

// 2️⃣ Named Function — With Input (Arguments) & Without Return:
// Basic — 1 to 5
// 1. Add two numbers.
function AddTwo(a ,b){
    console.log("Add of Two Num :",a+b);
}
AddTwo(60,20);

// 2. Find largest of two numbers.
function LargestTwo(a,b){
    if(a>b){
        console.log(a," A is a Biggest");
    }
    else{
        console.log(b, " B is a Biggest"); 
    }
}
LargestTwo(80,20);

// 3. Write a function that accepts a number and prints whether it is even or odd.
function EvenNum(n){
    if(n%2==0){
        console.log(n," is a Even");
    }else{
        console.log(n," is a Odd");
    }
}
EvenNum(10);

// 4. Write a function that accepts a number and prints its square.
function Square(n){
    console.log(n*n);
}
Square(100);

// 5.Write a function that accepts a number and Print multiplication table.
function Table(n){
    for(let i =1; i<=10; i++){
        console.log(i*n);
    }
}
Table(5);

// Intermediate — 6 to 10
// 6. Find factorial.
function Factorial(n){
   let fact = 1
   for(let i=1; i<=n; i++){
    fact*=i
   }
   console.log(fact);
}
Factorial(5);

// 7. Find sum of digits.
function Sumdigit(n){
    let sum = 0
    for(i=1; i<=10; i++){
        let ld = n%10;
        sum+=ld
        n = parseInt(n/10)
    }
    console.log(sum);
}
Sumdigit(5629);

// 8. Count digits.
function Countdigits(n){
    let count = 0
    while(n!=0){
        count++
        n = parseInt(n/10)
    }
    console.log(count);
}
Countdigits(6971234);

// 9. Check prime.
function primeNum(n){
    let count = 0
    for(let i=1; i<=n; i++){
        if(n%i==0){
            count++
        }
    }
    if(count==2){
        console.log(n,"is a Prime");
    }else{
        console.log(n,"Not is a Prime");
    }
}
primeNum(13);

// 10. Print factors.
function Factors(n){
    for(let i=1; i<=n; i++){
        if(n%i==0){
           console.log(i);  
        }
    }
}
Factors(24);

// Advanced — 11 to 15
// 11.Write a function that accepts a number and prints its reverse.
function reverseNum(n){
    let revs=0
    while(n!=0){
        let ld= n%10
        revs = revs*10+ld
        n = parseInt(n/10)
    }
    console.log(revs);
}
reverseNum(1234);

// 12. Check palindrome.
function palidromeNums(n){
    let temp = n
    let rev = 0;
    while(n!=0){
        let ld = n%10
        rev = rev*10+ld
        n = parseInt(n/10)
    }
    if(temp==rev){
        console.log(temp,"is a Palindrome");
    }else{
        console.log(temp,"Not is a Palindrome");
    }
}
palidromeNums(2002);

// 13. Print prime numbers in a range.
function primenum(start, end){
    for(let n=start; n<=end; n++){
      let count = 0
        for(let i=1; i<=n; i++){
            if(n%i==0){
                count++
            }
        }
        if(count==2){
            console.log(n);
        }
    }
}
primenum(30,50);

// 14. Find first number whose digit sum is 10.
function findNumber(start, end) {
    for(let n=start; n<=end; n++) {
        let temp = n;
        let sum = 0;
        while(temp!=0) {
            let ld = temp%10;
            sum += ld;
            temp = parseInt(temp/10);
        }
        if(sum==10) {
            console.log("sum of digit :",n);
            break;
        }
    }
}

findNumber(1, 100);

// 15. Print numbers skipping numbers containing 0.
function skipZero(start, end) {
    for(let n=start; n<=end; n++) {
        let temp = n;
        let found = false;
        while(temp!=0) {
            let ld = temp%10;
            if(ld==0) {
                found = true;
                break;
            }
            temp = parseInt(temp/10);
        }
        if(found) {
            continue;
        }

        console.log(n);
    }
}
skipZero(1, 100);

// 16.Write a function that accepts a number and prints whether it is an Armstrong number.
function Armstrong(n){
    let temp = n;
    let count = 0
    let sum = 0;
    while(temp!=0){
        count++;
        temp= parseInt(temp/10)
    }
    temp= n;
    while(temp!=0){
        let ld = temp%10
        sum=ld**count+sum;
        temp=parseInt(temp/10);
    }
    if(sum==n){
        console.log("Armstrong");
    }
    else{
        console.log(" Not a Armstrong");
    }
}
Armstrong(153);

// 3. Named Function – Without Input (Arguments) & With Return.
// Basic – 1 to 5
//1.Write a function that returns the number 100.
function ReturnsNum(){
        return 100;
}
console.log(ReturnsNum());

// 2.Write a function that returns the sum of numbers from 1 to 10.
function SumNumber(){
    let sum = 0;
    for(let i =1; i<=10; i++){
        sum+=i;
    }
     return sum;
}
console.log(SumNumber());

// 3.Write a function that returns the largest number from 10 and 20.
function largestNum(){
    let n1 = 10
    let n2 = 20
    if(n1>n2){
        return n1;
    }
    else{
        return n2;
    }
}
console.log(largestNum());

//  4.Write a function that returns the square of 15.
function square(){
    let n = 15;
    return n*n;
}  
console.log(square());

// 5.Write a function that returns the sum of even numbers from 1 to 20.
function SumEven(){
    let sum = 0;
    for(let i=1; i<=20; i++){
        if(i%2==0){
            sum+=i;
        }
    }
     return sum;
}
console.log(SumEven());

// Intermediate – 6 to 10
//6.Write a function that returns the factorial of 5.
function factorial(){
    let n = 5
    let fact = 1
    for(let i=1; i<=n; i++){
        fact*=i
    }
    return fact;
}
console.log(factorial());


// 7.Write a function that returns the reverse of 12345.
function reverseFun(){
    let n = 12345;
    let rev = 0;
    while(n!=0){
        let ld= n%10
        rev=rev*10+ld
         n= parseInt(n/10);
    }
    return rev;
}
console.log(reverseFun());

// 8.Write a function that returns the sum of digits of 45678.
function sumdigits(){
    let n = 45678;
    let sum = 0;
    while(n!=0){
        let ld = n%10;
        sum+=ld;
        n = parseInt(n/10);
    }
    return sum;
}
console.log(sumdigits());

// 9.Write a function that returns the number of digits in 987654.
function digitsnums(){
    let n = 987654;
    let count = 0
    while(n!=0){
        let ld= n%10
        count++;
        n = parseInt(n/10)
    }
    return count;
}
console.log(digitsnums());

// 10.Write a function that returns whether 121 is a palindrome.
function palindrome(){
    let n = 1221;
    let temp = n;
    let rev = 0;
    while(n!=0){
        let ld = n%10
        rev = rev*10+ld
        n = parseInt(n/10);
    }
    if(rev==temp){
        return "a palindrome"; 
    }else{
        return "Not a palindrome"; 
    }
}
console.log(palindrome());

// Advanced – 11 to 15
//11.Write a function that returns whether 153 is an Armstrong number.
function ArmstrongNum(){
    let n = 153;
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
        return "Armstrong";
    }else{
         return "Not a Armstrong";
    }
}
console.log(ArmstrongNum());

// 12.Write a function that returns whether 29 is a prime number.
function primenumbr(){
    let n = 29
    let count = 0
    for(let i=1; i<=n; i++){
        if(n%i==0){
            count+=1;
        }
    }
    if(count==2){
           return "Prime"
        }else{
         return "Not Prime"
        }
}
console.log(primenumbr());

// 13.Write a function that returns the largest digit in 583921.
function largestdigits(){
    let n = 583921;
    let max = 0;
    while(n!=0){
        let ld = n%10;
        if(ld>max){
            max=ld;
        }
        n= parseInt(n/10)
    }
    return ;
}
console.log(largestdigits());

// 14.Write a function that returns the count of prime numbers from 1 to 100.
function primeCount(){
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

// 15.Write a function that returns the sum of all perfect numbers between 1 and 1000.
function perfectNum(){
    let sum = 0;
    for(let n=1; n<=1000; n++){
        let factorsum = 0;
        for(let i=1; i<n; i++){
            if(n%i==0){
                factorsum+=i;
            }
        }
        if(factorsum==n){
            sum+=n;
        }
    }
    return sum;
}
console.log(perfectNum());


// 4. Named Function – With Arguments & With Return.
// Basic – 1 to 5
// 1.Write a function that accepts a number and returns its square.
function squresNum(n){
    return n*n;
}
console.log(squresNum(9));

//2.Write a function that accepts two numbers and returns their sum.
function sumofNum(n){
    let sum = 0;
    while(n!=0){
        let ld=n%10
        sum+=ld;
        n= parseInt(n/10)
    }
    return sum;
}
console.log(sumofNum(456));

// 3.Write a function that accepts two numbers and returns the larger number.
function largestnum(n1,n2){
    if(n1>n2){
        return n1;
    }else{
        return n2;
    }
}
console.log(largestnum(50,30));

// 4.Write a function that accepts a number and returns whether it is even or odd.
function EvenOdd(n){
    if(n%2==0){
        return "even"
    }else{
        return "Odd"
    }
}
console.log(EvenOdd(4));

// 5.Write a function that accepts three numbers and returns the largest number.
function largest(n1,n2,n3){
    if(n1>n2 && n1>n3){
        return n1;
    }else if(n2>n1 && n2>n3){
        return n2;
    }else{
        return n3;
    }
}
console.log(largest(40,30,10));

// Intermediate – 6 to 10
//6.Write a function that accepts a number and returns its factorial.
function factorial(n){
    let fact = 1
    for(let i=1; i<=n; i++){
        fact*=i
    }
    return fact;
}
console.log(factorial(5));

// 7.Write a function that accepts a number and returns its reverse.
function reversenumber(n){
    let rev = 0
    while(n!=0){
        let ld = n%10;
        rev= rev*10+ld;
        n = parseInt(n/10);
    }
    return rev;
}
console.log(reversenumber(123456));

// 8.Write a function that accepts a number and returns the sum of its digits.
function sum_digits(n){
    let sum1 = 0
    while(n!=0){
        let ld = n%10;
        sum1+=ld
        n = parseInt(n/10)
    }
    return sum1;
}
console.log(sum_digits(4567));

// 9.Write a function that accepts a number and returns the number of digits.
function digitis_num(n){
    let count = 0
    while(n!=0){
        let ld= n%10
        count++
        n= parseInt(n/10)
    }
    return count;
}
console.log(digitis_num(987345));

// 10.Write a function that accepts a number and returns whether it is a palindrome.
function palindrome_num(n){
    let temp = n;
    let rev = 0;
    while(n!=0){
        let ld = n%10;
        rev = rev*10+ld
        n = parseInt(n/10)
    }
    if(temp==rev){
        return "palindrome";
    }else{
        return "Not a palindrome"
    }
}
console.log(palindrome_num(1221));

// Advanced – 11 to 15
// 11.Write a function that accepts a number and returns whether it is prime.
function prime_num(n){
   let count = 0;
   for(let i=1; i<=n; i++){
    if(n%i==0){
        count++
    }
   }
   if(count==2){
    return "prime"
   }else{
    return "Not a prime"
   }
}
console.log(prime_num(13));

// 12.Write a function that accepts a number and returns whether it is an Armstrong number.
function Armstrong_num(n){
    let temp = n
    let sum = 0
    let count = 0
    while(temp!=0){
        count++;
        temp = parseInt(temp/10)
    }
    temp = n
    while(temp!=0){
        let ld=temp%10
        sum=ld**count+sum
        temp=parseInt(temp/10)
    }
    if(sum==n){
        return "Armstrong"
    }else{
        return "Not a Armstrong"
    }
}
console.log(Armstrong_num(153));

// 13.Write a function that accepts a number and returns the largest digit.
function largest_digit(n){
    let max = 0;
    while(n!=0){
        let ld=n%10
    if(max<ld){
        max=ld
    }
     n = parseInt(n/10)
}
    return max;
}
console.log(largest_digit(87496543));

// 14.Write a function that accepts a number and returns the count of prime digits in it.
function prime_digits(n) {
    let count = 0;
    while(n != 0) {
        let ld = n % 10;
        let fact = 0;
        for(let i = 1; i <= ld; i++) {
            if(ld % i == 0) {
                fact++;
            }
        }
        if(fact == 2) {
            count++;
        }
        n = parseInt(n / 10);
    }
    return count;
}
console.log(prime_digits(123457));

// 15.Write a function that accepts two numbers and returns the GCD/HCF.
function gcd(a, b) {
    while (b != 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(gcd(24, 36));