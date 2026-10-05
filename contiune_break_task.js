//-----break-----
// 1.Find the first even digit from the left in 753914286.
let n = 753914286
let rev = 0
while(n!=0){
    let ld=n%10
    rev = rev*10+ld
    n = parseInt(n/10)
}
while(rev!=0){
    let ld=rev%10
    if(ld%2==0){
        console.log(ld);
        break; 
    }
    rev= parseInt(rev/10)
}

// 2.Find the first prime number between 50 and 100.
for(let n=50; n<=100; n++){
    let count = 0
    for(let i=1; i<=n; i++){
        if(n%i==0){
            count++
        }
    }
    if(count==2){
        console.log(n);
        break;
        
    }
}

// 3.Find the first number whose digit sum is 10.
for(let n=1; n<=100; n++){
    let sum = 0
    let temp = n
    while(temp!=0){
        let ld=temp%10
       sum=sum+ld
       temp= parseInt(temp/10)
    }
    if(sum==10){
        console.log(n);
        break;
    }
}

// 4.Find the first number with exactly 3 divisors between 1 and 100.
for(let n=1; n<=100; n++){
    let count=0
    for(let i=1; i<=n; i++){
        if(n%i==0){
            count++
        }
    }
    if(count==3){
        console.log(n);
        break;
    }
}

// 5.Stop when 3 consecutive odd numbers occur between 1 and 50.
let count = 0
for(let n=1; n<=50; n++){
    if(n%2!=0){
        count++
    }
    if(count==3){
        console.log(n);
        break;
    }
}

// 6.Find the first palindrome between 10 and 500.
for(let n=10; n<=500; n++){
    let temp = n
    let revs = 0
    while(temp!=0){
        let ld = temp%10
        revs= revs*10+ld
        temp= parseInt(temp/10)
    }
    if(revs==n){
        console.log(n);
        break;
        
    }
}

// 7.Find the first perfect number between 1 and 1000.
for(let n=1; n<=1000; n++){
    let sum = 0
    for(let i=1; i<n; i++){
        if(n%i==0){
            sum+=i
        }
    }
     if(sum==n){
        console.log(n);
        break;
    }
}

// 8.Print the first 5 even numbers.
let coun2=0
for(let n=1; n<=10; n++){
    if(n%2==0){
        console.log(n);
        coun2++  
    }
    if(coun2==5){
        break;
    }
}

// 9.Print the first 5 prime numbers.
let count2=0
for(let n=1; n<=20; n++){
    let fact=0
    for(let i=1; i<=n; i++){
        if(n%i==0){
            fact++
        }
    }
    if(fact==2){
        console.log(n);
        count2++;
    }
    if(count2==5){
        break;
    }
}

// 10.Print the first 3 numbers divisible by 7.
 let count3=0
 for(let n=1; n<=50; n++){
    if(n%7==0){
        console.log(n);
        count3++
    }
    if(count3==3){
        break;
    }
 }

//    -----contiune------
//  1.Print 1–30, skipping even numbers.
for(let i=1; i<=30; i++){
    if(i%2==0){
        continue;
    }
    console.log(i);
}

// 2.Print 1–40, skipping multiples of 4.
for(let n=1; n<=40; n++){
    if(n%4==0){
        continue;
    }
    console.log(n); 
}

// 3.Print 1–30, skipping numbers from 10–20.
for(let n=1; n<=30; n++){
    if(n>=10 && n<=20){
        continue;
    }
    console.log(n); 
}

// 4.Print 1–50, skipping multiples of 3.
for(let n=1; n<=50; n++){
    if(n%3==0){
        continue;
    }
    console.log(n);
    
}

// 5.Extract 502304, skipping digit 0.
let n1 = 502304
let result = " "
while(n1!=0){
    let ld=n1%10
    n1= parseInt(n1/10)
    if(ld==0){
        continue;
    }
    result+=ld
}
console.log(result);

// 6.Extract 5832461, printing only even digits.
let n2 = 5832461
while(n2!=0){
    let ld=n2%10
    n2 = parseInt(n2/10);
    if(ld%2!=0){
        continue;
    }
    console.log(ld);
}

// 7.Extract 1432578, skipping odd digits.
let n3 = 1432578
while(n3!=0){
    let ld = n3%10
    n3= parseInt(n3/10);
    if(ld%2==0){
        continue;
    }
    console.log(ld);
}
// 8.Print 1–200, skipping multiples of 3 or 5.
for(let n=1; n<=200; n++){
    if(n%3==0 || n%5==0){
        continue;
    }
    console.log(n);
}

// 9.Print 1–500, skipping numbers with odd digit sum.
for(let n=1; n<=500; n++){
    let sum = 0
    let temp = n
    while(temp!=0){
     let ld= temp%10
      sum+=ld
    temp=parseInt(temp/10)   
    }
    if(sum%2!=0){
        continue;
    }
    console.log(n); 
}

// 10.Print 1–500, skipping numbers containing digit 0.
for(let n=1; n<=500; n++){
    let temp = n;
    let hasZero = false;
    while(temp != 0){
        let ld = temp % 10;
        temp = parseInt(temp / 10);
        if(ld == 0){
            hasZero = true;
            break;
        }
    }
    if(hasZero){
        continue;
    }
    console.log(n);
}

// --------break + continue----------
// 1.Print 1–50, skip multiples of 3, stop at 40.
for(let n=1; n<=50; n++){
    if(n==40){
        break;
    }
    if(n%3==0){
        continue
    }
    console.log(n);
}

// 2.Print odd numbers, skip evens, stop at the first multiple of 7.
for(i=1; i<=50; i++){
    if(i%2==0){
        continue;
    }
    if(i%7==0){
        break;
    }
    console.log(i); 
}

// 3.Extract 5830421, skip odd digits, stop at 0.
let n4 = 5830421
while(n4!=0){
    let ld= n4%10
    if(ld==0){
        break;
    }
    n4= parseInt(n4/10)
    if(ld%2!=0){
        continue;
    }
    console.log(ld);
}

// 4.Extract 8325147, print digits until 5.
let n5 = 8325147
while(n5!=0){
    let ld = n5%10
    console.log(ld);
    n5= parseInt(n5/10)
     if(ld==5){
        break;
    }
    continue;
}

// 5.earch from 51, skip non-multiples of 9, stop at the first multiple of 9.
for(let n=51; n<=100; n++){
    if(n%9!=0){
        continue;
    }
    console.log(n);
    break;
}