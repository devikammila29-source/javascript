class Student{
    #Name;
    #Roll_No;
    #Course;
    #fees
    constructor(myname,myrollno,mycourse,myfees){
        this.#Name = myname;
        this.#Roll_No = myrollno;
        this.#Course = mycourse;
        this.#fees = myfees
    }
    getName(){
        return this.#Name
    }
    getRoll_No(){
        return this.#Roll_No
    }
    getCourse(){
        return this.#Course
    }
    getFees(){
        return this.#fees
    }
    setName(newname){
        this.#Name = newname
    }
    setRoll_No(newrollno){
        this.#Roll_No = newrollno
    }
    setCourse(newcourse){
        this.#Course = newcourse
    }
    setFees(newfees){
        this.#fees = newfees
    }
}
let student = new Student("Devi",563,"Javascript",40000)
console.log("Before Updation");
console.log("My Name :",student.getName());
console.log("My Roll-No :",student.getRoll_No());
console.log("My Copurse :",student.getCourse());
console.log("My Fees :",student.getFees());
console.log("After Updation");
student.setName("Chandu")
student.setRoll_No(408)
student.setCourse("Python")
student.setFees(60000)
console.log("My Name :",student.getName());
console.log("My Roll-No :",student.getRoll_No());
console.log("My Copurse :",student.getCourse());
console.log("My Fees :",student.getFees());

class Bank{
    #accNum;
    #accBlc;
    constructor(myaccNum,myaccBlc){
        this.#accNum = myaccNum;
        this.#accBlc = myaccBlc;
    }
    getAccNum(){
        return this.#accNum
    }
    getAccBlc(){
        return this.#accBlc
    }
    setAccNum(newAcNum){
        this.#accNum = newAcNum
    }
    setAccBlc(newAccBlc){
        this.#accBlc = newAccBlc
    }
    deposite(amount){
        this.#accBlc =this.#accBlc+amount
        console.log("Total Amount After depositing is",this.#accBlc);
    }   
    withdraw(amt){
        this.#accBlc = this.#accBlc-amt
        console.log("Total Amount After Withdraw is",this.#accBlc); 
    } 
    insufficient(blc){
        if(this.#accBlc>blc){
            console.log("it is sufficient balence"); 
        }
        else{
            console.log("it is insufficient balence");
        }
    }        
}
let bank = new Bank(9876432345,120000);
console.log("Before updation");
console.log("My Account Number :",bank.getAccNum());
console.log("My Account Balance :",bank.getAccBlc());
bank.setAccNum(34598765345)
bank.setAccBlc(900000)
bank.deposite(50000)
bank.withdraw(30000)
bank.insufficient(20000)
console.log("After updation");
console.log("My Account Number :",bank.getAccNum());
console.log("My Account Balance :",bank.getAccBlc());
