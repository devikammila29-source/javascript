//Static Method :
class Arithmetic {
    //without input and without return
    static add(){
        let x = 20;
        let y = 30;
        console.log("addition ",x,"and",y,"is =",x+y);
    }
    //with input and without return
    static sub(x,y){
        console.log("Subtration on",x,"and",y,"is=",x-y);
    }
    //without input and with return
    static mutl(){
        // let x = 30;
        // let y = 5;
        return 5*50;
    }
    //with input and with return
    static mod(x,y){
        return x%y;
    }
}
Arithmetic.add();
Arithmetic.sub(84,76)
console.log(Arithmetic.mutl());
console.log(Arithmetic.mod(47,3));


// 1. Check Divisible by Both 3 and 5
// without input and without return
class logics{
    static divisible(){
        let n = 15;
        if(n%3==0 && n%5==0){
            console.log("is 3 and 5 both are divisible by :",n);
        }else{
            console.log("is 3 and 5 both are not divisible by:",n);
        }
    }
}
logics.divisible()
//2.Check Last Digit is 0
//  with input and without return
class task{
    static digit(num){
        let ld = num%10;
        if(ld==0){
            console.log("the last digit is 0:",num); 
        }else{
            console.log("the last digit is not  0:",num);
        }
    }
}

task.digit(100)
// 3.Check Positive or Negative
//without input and with return

class task1{
    static positive(){
        let num = 70;
        if(num>0){
           return "Positive"
        }else if(num<0){
            return "Negative"
        }else{
           return "Zero"
        }
    }
}
console.log(task1.positive());

// 4. Check Two Numbers are Equal
//with input and with return

class task2{
    static Twonum(a,b){
        if(a==b){
            return "Two numbers are Equal"
        }else{
            return "Two number are Not Equal"
        }
    }
}
console.log(task2.Twonum(10,50));
