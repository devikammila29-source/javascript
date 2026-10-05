// Sum of Prime Numbers
// 1.Find the sum of all prime numbers between 20 and 150.
let sum1 = 0
for(let j=20; j<=150; j++){
    let count = 0
    for(let i=1; i<=j; i++){
        if(j%i==0){
            count+=1
        }
    }
if(count==2){
    sum1+=j
}   
}
console.log(sum1);

// Average of Perfect Numbers
//2 Find the average of all perfect numbers between 1 and 1000.
let sum = 0;
let count = 0;
for (let n = 1; n <= 1000; n++) {
    let factorSum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            factorSum = factorSum + i;
        }
    }
    if (factorSum == n) {
        console.log(n);
        sum = sum + n;
        count++;
    }
}
let average = sum / count;
console.log("Average =", average);

// Leap Years in a Range (Not Nested Loop Logic)
//3.Print all leap years between 1900 and 2026.
for(let year=1900; year<=2026; year++){
    if(year%400==0 || (year%4==0 && year%100!=0)){
        console.log(year);
        
    }
}
// Palindrome Numbers
//4. Print all palindrome numbers between 100 and 500.
for(let j=100; j<=500; j++){
    let temp = j
    let rev = 0
   while(temp!=0){
        let digit = temp%10
        rev=rev*10+digit
        temp=parseInt(temp/10)
    }
    if(j==rev){
     console.log(j);
    
}
}

// Digit Sum = 10
// 5.Print all numbers between 120 and 850 whose digit sum is exactly 10.
for(let n=120; n<=850; n++){
    let temp = n
    let sum = 0
    while(temp!=0){
        let digit=temp%10
        sum+=digit
        temp= parseInt(temp/10)
    }
    if(sum==10){
     console.log(sum);
        
    }
}

// Pairs with Target Sum
//6.Print all pairs (a, b) between 1 and 50 whose sum is 30. Print each pair only once.
for(let a=1; a<=50; a++){
    for(let b=a+1;b<=50;b++){
        if(a+b==30){
            console.log(a,b);
            
        }
    }
}

// Exactly 3 Factors
//7.Print all numbers between 10 and 300 that have exactly 3 factors.
for(let j=10; j<=300; j++){
    let count = 0
    for(let i=1; i<j; i++){
        if(j%i==0){
            count+=1
        }
    }
    if(count==3){
     console.log(j);
    
}
}

// Prime Factors
//8.Print the prime factors of every number between 20 and 50.
for(let j=20; j<=50; j++){
    console.log("prime factord of",j);
    for(let i=1; i<j; i++){
        if(j%i==0){
            let count=0
            for(let n=1; n<=i; n++){
                if(i%n==0){
                    count++
                }
            }
            if(count==2){
                console.log(i);
                
            }
        }
    }
    
}

// Armstrong Numbers
//9.Print all Armstrong numbers between 100 and 999.
for(let j=100; j<=999; j++){
    let temp = j
    let sum = 0
    for(let i=1; i<=j; i++){
        let digit=temp%10
        sum=sum+digit**3
        temp=parseInt(temp/10)
    }
    if(sum==j){
      console.log(j);
    
}    
}

// Maximum Factors
//10.Find the number between 50 and 150 that has the maximum number of factors.
let max_factors = 0
let max_number = 0
for(let n=50; n<=150; n++){
    let count = 0
    for(let i=1; i<=n; i++){
        if(n%i==0){
            count+=1
        }
    }
    if(count>max_factors){
     max_factors=count
     max_number=n
}    
}
console.log("Number",max_number);
console.log("factor",max_factors);


