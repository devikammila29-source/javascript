let institute = {
    "institute_name" : "innomatics research labs",
    branch : {
        branch1 : {
          name : "Full Stack Experts",
          address : {
            area : "kukatpally",
            city : "hyderbad",
            state : "telangana",
          },
          courses : "fsd,data Science"
        },
        branch2 : {
            name : "innomatics",
            address: {
                area : "dilshuknagar",
                city : "hyderbad",
                state : "telangana",
            },
            course : "python , java"
        }
    },
    courses : {
        "python FSD" : {
            duration : "8 months",
            technologies : "python ,sql, html , css , js",
            fee : 80000,
            mode : "offline/ononline",
        },
        "Java FSD" : {
            duration : "9 months",
            technologies : "java,spring boot,html,css,js",
            fee : 85000,
            mode : "offline/ononline",
        },
        "Data Science" : {
            duration : "10 months",
            technologies : "python,pandas, numpy,ML",
            fee : 90000,
            mode : "offline/ononline"
        }
    },
        Students :{
           totalStudents:2000,
           inEachBatch:50,

        },
        palcedStudents: {
            students1: {
                name : "Devi",
                company : "AI Logic",
                package : "5LPA",
            },
            student2: {
                name : "Baby",
                company : "Python",
                package : "4LPA",
            },
            student3 : {
                name : "gopika",
                company : "Zensar",
                package : "4.5LPA"
            },
        },
        contact:{
        phone:8348787928,
        email:"innomatics@gmail.com",
        linkedin:"innomatics research labs",
        youtube:"InnomaticsResearchLabs",
    },
    rating:4.5,
}

console.log(institute);

// retrieving the data

console.log(institute["branch"])
console.log(institute["branch"]["branch1"])
console.log(institute["branch"]["branch2"])
console.log(institute["courses"])
console.log(institute["courses"]["data science"])
console.log(institute["courses"]["python FSD"]["technologies"])
console.log(institute["palcedStudents"])
console.log(institute["palcedStudents"]["student2"])

//Update data :
institute["branch"].branch2.name = "innomatics Research Labs",
institute.Students.totalStudents = 3500;

console.log(institute.branch["branch2"]);
console.log(institute.Students);

//add property :
institute.palcedStudents.students1= "python developer"
institute.Students["Students Placed"] = "1000+"

console.log(institute["palcedStudents"])
console.log(institute.students)

// delete property

delete institute["courses"]["data science"]
console.log(institute["courses"])
