let institute={
    name :"Innomatics",
    branches : {
        branch1:{
            location:"hyderabad",
            phone:18004123539,
        },
        branch2:{
            location:"Pune",
            phone:9951666671,
        },
        branch3:{
            location:"Bengaluru",
            phone:99516672,
        },
    },
    courses:{
        course1:"Advanced Data science with gen AI",
        fee:80000,
        duration:"6 months",
        course2:{
            name:"FSD Python/java",
            fee:60000,
            duration:"8 months",
        },
        course3:{
            name:"data science",
            fee:90000,
            duration:"10 months",
        },
        students:{
            student1:{
                name:"BABY KARELLA",
                course:"FSD Python",
                address:{
                    village:"BHIMAVARAM",
                    district:"West godavari",
                },
            student2:{
                name:"Gopika",
                course:"FSD java",
                address:{
                    village:"NSP",
                    district:"East godavari",
                },
            },
            student3:{
                name:"DEVI",
                course:"Data science",
                address:{
                    village:"Tadepalligudem",
                    district:"Eluru",
                }
            }


            }
        }
    }
}
//accessing data
console.log(institute)
console.log(institute.name)
console.log(institute["courses"])
console.log(institute["courses"].course1)
console.log(institute["courses"].course2.duration)
//update data
institute.courses.course2.duration="10 months"
console.log("After updation=",institute.courses.course2.duration)
institute.courses.students.student1.address.pincode =534124
console.log("After updation=",institute.courses.students.student1.address)
//deleting
delete institute.courses.course3.name
console.log("After deletion =",institute.courses.course3.name)
console.log(institute)
