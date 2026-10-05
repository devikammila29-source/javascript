// Functions in objects with input and without return.
function details(Students){
    console.log(Students.name);
    console.log(Students.age);
    console.log(Students["Job"]);
    console.log(Students.address);
    console.log(Students["coures"]);
}
    let Students = {
    name : "Chetana",
    Job : "Software Developer",
    age : 22,
    address : "Bhimavaram",
    coures : {
        c_name : "Java",
        validtion : "jan-2027",
        gmail :" chetana07@gmail.com",
        fee : {
           total_fee: 50000,
        }
    }
}

details(Students);

// with input and with return :

function persons(person){
    console.log(person.name);
    console.log(person.age);
    console.log(person["Job"]);
    console.log(person.address);
    console.log(person.gmail);
    console.log(person["coures"]);
   return (person);
}
let person = {
    name : "Tejasri",
    Job : "Software Developer",
    age : 21,
    salary : 900000,
    address : {
        city : "Hydrabad",
    },
    coures : {
        c_name : "Java FSD",
        foolr_no : "3rd",
        gmail :"tejasri07@gmail.com",
        fee : {
           total_fee: 50000,
        }
    }
};
let result = persons(person);
console.log(result);
