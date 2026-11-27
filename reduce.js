// 1.Find Average:
//  Calculate the average of all elements in an array.
let arr = [10, 20, 30, 40, 50]
let sum = arr.reduce((ac, cv) => {
    return ac + cv;
}, 0) ;
let avg = sum/arr.length
console.log(avg);

// 2.Count Positive Numbers:
// Count how many positive numbers are present in an array.
let arr1 = [-10, 20, -5, 30, 0, 40, -2]
let count = arr1.reduce((ac , cv) => {
    if(cv>0){
      return ac++  
    }
    else{
        return ac;
    }
}, 0)
console.log(count);

// 3.Find the Most Frequent Element:
// Find the element that appears the maximum number of times in an array.
let arr2 = [1, 2, 3, 2, 4, 2, 5, 3]
let obj = arr2.reduce((ac, cv) => {
    if(ac[cv]){
        ac[cv]++;
    }else{
        ac[cv] = 1
    }
    return ac
}, {})
console.log(obj);

let result = Object.keys(obj).reduce((acc, curr) =>  freq[acc] > freq[acc] ? acc : curr);
console.log(result);

//4.Count Even Numbers:
let myArr4 = [10, 15, 20, 25, 30, 35];
let evenCount = myArr4.reduce((ac, cv) => {
    if (cv % 2 === 0) {
       return ac++;
    }
    return ac;
}, 0);
console.log(evenCount);

//5.Count Occurrences:
let myArr5 = [1, 2, 2, 3, 1, 4, 2, 3];
let freq = myArr5.reduce((ac, cv) => {
    if(ac[cv]){
        ac[cv]++;
    }
    else{
        ac[cv] = 1;
    }
    return ac;
}, {});
console.log(freq);

//6.Find Second Largest:
let myArr6 = [10, 50, 30, 80, 60];
let Large = 0;
let sec_large = myArr6.reduce((ac, cv) => {
    if (Large < cv) {
        ac = Large;
        Large = cv;
    } else if (ac < cv && Large != ac) {
        ac = cv;
    }
    return ac;
}, 0);
console.log(sec_large);

//7.Sum of Object Properties:
let myArr7 = [
  { name: "Rahul", marks: 80 },
  { name: "Priya", marks: 90 },
  { name: "Arjun", marks: 70 },
];
let sum2 = myArr7.reduce((ac, cv) => cv.marks + ac, 0);
console.log(sum2);

//8.Calculate Total Cart Price:
let myArr8 = [
    {name:"Laptop", price:50000},
    {name:"Mouse", price:800},
    {name:"Keyboard", price:1500}
];
let sum1 = myArr8.reduce((ac, cv) => cv.price + ac, 0);
console.log(sum1);

//9.Count Vowels:
let myArr9 = ["javascript", "react", "python", "java"];
let count1 = myArr9.reduce((ac, cv) => {
    let vowel = [...cv].reduce((c, ch)=> {
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'O' || ch == 'U') {
            c++;
        }
        return c;
    }, 0);
    return ac + vowel;
},0);
console.log(count1);