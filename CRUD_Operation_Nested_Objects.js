//creating the Nested Objects

let institute = {
    Batch60 : {
        StudentsDetails : {
            name : "Devi",
            passout : 2026,
            courseDetails:{
                Course : "Python FSD",
                languages : {
                    frontEnd : {
                        frontEedLanguage : "HTML , CSS, JavaScript",
                        frontEndFrameWorks : "Boostrap , ReAct js"
                    },
                    backEnd :{
                        backEndLanguage : "Python, Java",
                        backEndLanguage : " Django, Spring , Spring Boot",
                    },
                    dataBase : "MongoDB , SQl , Postgress SQL" 
                }
            } 
        },
         StudenstDetailsS2 : {
            name : "Baby",
            passOut : 2026,
            CourseDetails : {
                Course : "Java FSD",
                languages : {
                    frontEnd : {
                        frontEndLanguage : "HTML , CSS, JavaScript",
                        frontEndFrameworks : "Vootstrap, ReAct js",
                    },
                BackEnd : {
                    backEndLanguage : "Python Java",
                    backEndLanguage : "Django, Spring ,Spring Boot",
                },
                dataBase : "MongoDB , SQL, Postgress SQL",
            }
         }
    },
    StudentDetailsS3 : {
        name : "Gopika",
        passOut : 2026,
        CourseDetails : {
            Course : "Data Science",
            languages:{
            frontEnd : {
                        frontEndLanguage : "HTML , CSS, JavaScript",
                        frontEndFrameworks : "Bootstrap, ReAct js",
                    },
                BackEnd : {
                    backEndLanguage : "Python Java",
                    backEndLanguage : "Django, Spring ,Spring Boot",
                },
                dataBase : "MongoDB , SQL, Postgress SQL",
            
                }
            }
        }
    }
}

// Accessing the key
console.log(institute);
console.log(institute.Batch60);
console.log(institute.Batch60.StudentsDetails);
console.log(institute.Batch60.StudenstDetailsS2);
console.log(institute.Batch60.StudentDetailsS3);
console.log(institute.Batch60["StudentsDetails"].name);
console.log(institute.Batch60["StudentsDetails"]["courseDetails"]);
console.log(institute.Batch60["StudentsDetails"]["courseDetails"].languages);
console.log(institute.Batch60["StudentsDetails"]["courseDetails"].languages.dataBase);

//Updation :
institute.Batch60.StudenstDetailsS2.name = "Baby Karilla"
console.log(institute.Batch60.StudenstDetailsS2.name);

//Deleting :
console.log("Before deleting",institute.Batch60.StudentDetailsS3.CourseDetails.languages.frontEnd);
delete institute.Batch60.StudentDetailsS3.CourseDetails.languages.BackEnd;
console.log("After deleting",institute.Batch60.StudentDetailsS3.CourseDetails.languages.frontEnd);

