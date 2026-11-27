// 1.Filter Duplicate Elements
// Extract elements appearing more than once in an array. Return each duplicate only once.
let num = [10, 20, 30, 40, 50, 20, 10, 30]
let output = []
for(let i=0; i<=num.length; i++){
    count = 0
    for(let j=0; j< num.length-1; j++){
        if(num[i] == num[j]){
            count++
        }
    }
    if(count >1 && !output.includes(num[i])){
         output.push(num[i])
    }   
}
console.log(output);
//filter()
let values = [10, 20, 30, 20, 40, 10, 50, 30];
let result = values.filter((cv, i) => {
    return values.indexOf(cv) != i &&
           values.indexOf(cv) == values.lastIndexOf(cv) ||
           values.indexOf(cv) == i && 
           values.lastIndexOf(cv) != i;
});
console.log([...new Set(result)]);

// 2.
let numbers2 = [2, 4, 5, 8, 11, 15, 17, 20, 23];
let output2 = [];
for(let i = 0; i < numbers2.length; i++){
    let count = 0;
    for(let j = 1; j <= numbers2[i]; j++){
        if(numbers2[i] % j == 0){
            count++;
        }
    }
    if(count == 2){
        output2.push(numbers2[i]);
    }
}
console.log(output2);
// filter()
let values2 = [2, 4, 5, 8, 11, 15, 17, 20, 23];
let result2 = values2.filter((cv) => {
    let count = 0;
    for(let i = 1; i <= cv; i++){
        if(cv % i == 0){
            count++;
        }
    }
    return count == 2;
});
console.log(result2);
// 3.
let words = ["madam", "hello", "level", "world", "radar"];
let output3 = [];
for(let i = 0; i < words.length; i++){
    let reverse = "";
    for(let j = words[i].length - 1; j >= 0; j--){
        reverse = reverse + words[i][j];
    }
    if(words[i] == reverse){
        output3.push(words[i]);
    }
}
console.log(output3);
// filter()
let words2 = ["madam", "hello", "level", "world", "radar"];
let result3 = words2.filter((cv) => {
    let reverse = cv.split("").reverse().join("");
    return cv == reverse;
});
console.log(result3);
// 4
let students = [
    {name:"Santhosh", marks:75, age:21},
    {name:"Phani", marks:85, age:20},
    {name:"Pavan", marks:92, age:23},
    {name:"Anusha", marks:88, age:19},
    {name:"Kiran", marks:78, age:21}
];
let output4 = [];
for(let i = 0; i < students.length; i++){
    if(students[i].marks > 70 && students[i].age < 22){
        output4.push(students[i].name);
    }
}
console.log(output4);

// filter()
let result4 = students.filter((cv) => {
    return cv.marks > 70 && cv.age < 22;
});
console.log(result4);

// 5.
let products = [
    {name:"Laptop", price:50000, rating:4.5, stock:true},
    {name:"Mouse", price:800, rating:4.2, stock:true},
    {name:"Keyboard", price:1500, rating:3.8, stock:true},
    {name:"Headphones", price:1800, rating:4.5, stock:false},
    {name:"Speaker", price:1200, rating:4.3, stock:true}
];
let output5 = [];
for(let i = 0; i < products.length; i++){
    if(products[i].price < 2000 &&
       products[i].rating > 4 &&
       products[i].stock == true){
    output5.push(products[i].name);
    }
}
console.log(output5);
// filter()
let result5 = products.filter((cv) => {
    return cv.price < 2000 &&
           cv.rating > 4 &&
           cv.stock == true;
});
console.log(result5);