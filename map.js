// 1 Square and Cube
let numbers = [2, 3, 4, 5];
let output = [];
for(let i = 0; i < numbers.length; i++){
    let obj = {
        square: numbers[i] * numbers[i],
        cube: numbers[i] * numbers[i] * numbers[i]
    };
    output.push(obj);
}
console.log(output);
// map()
let values = [2, 3, 4, 5];
let result = values.map((cv) => {
    return {
        square: cv * cv,
        cube: cv * cv * cv
    };
});
console.log(result);

// 2.Transform Strings
let words = ["javascript", "react", "python", "java"];
let output2 = [];
for(let i = 0; i < words.length; i++){
    let obj = {
        name: words[i].toUpperCase(),
        length: words[i].length
    };

    output2.push(obj);
}
console.log(output2);
// map()
let names = ["javascript", "react", "python", "java"];
let result2 = names.map((cv) => {
    return {
        name: cv.toUpperCase(),
        length: cv.length
    };
});
console.log(result2);

// 3.Extract Full Names
let employees = [
    {firstName:"Rahul", lastName:"Sharma"},
    {firstName:"Priya", lastName:"Reddy"},
    {firstName:"Arjun", lastName:"Kumar"}
];
let output3 = [];
for(let i = 0; i < employees.length; i++){
    let fullname = employees[i].firstName + " " + employees[i].lastName;

    output3.push(fullname);
}
console.log(output3);
// map()
let result3 = employees.map((cv) => {
    return cv.firstName + " " + cv.lastName;
});

console.log(result3);

// 4.Update Student Results
let students = [
    {name:"Rahul", marks:85},
    {name:"Priya", marks:32},
    {name:"Arjun", marks:65}
];
let output4 = [];
for(let i = 0; i < students.length; i++){
    let obj = {
        name: students[i].name,
        marks: students[i].marks
    };
    if(students[i].marks >= 40){
        obj.result = "Pass";
    }
    else{
        obj.result = "Fail";
    }
    output4.push(obj);
}
console.log(output4);
// map()
let result4 = students.map((cv) => {
    return {
        name: cv.name,
        marks: cv.marks,
        result: cv.marks >= 40 ? "Pass" : "Fail"
    };
});
console.log(result4);

// 5.Transform Product Prices
let products = [
    {name:"Laptop", price:50000},
    {name:"Mouse", price:800},
    {name:"Keyboard", price:1500}
];
let output5 = [];
for(let i = 0; i < products.length; i++){
    let obj = {
        name: products[i].name,
        price: products[i].price,
        finalPrice: products[i].price + (products[i].price * 18 / 100)
    };
    output5.push(obj);
}
console.log(output5);

// map()
let result5 = products.map((cv) => {
    return {
        name: cv.name,
        price: cv.price,
        finalPrice: cv.price * 1.18
    };
});
console.log(result5);

// 6.Character Increment
let words2 = ["abc", "hero"];
let output6 = [];
for(let i = 0; i < words2.length; i++){
    let str = "";
    for(let j = 0; j < words2[i].length; j++){
        let char = words2[i].charCodeAt(j) + 1;
        str = str + String.fromCharCode(char);
    }
    output6.push(str);
}
console.log(output6);
// map()
let characters = ["abc", "hero"];
let result6 = characters.map((cv) => {
    return a1.split("").map((cv) => {
        return String.fromCharCode(cv.charCodeAt(0) + 1);
    }).join("");
});
console.log(result6);
