function avgnums(){
    let n1 =parseInt(document.getElementById("n1").value)
    let n2 =parseInt(document.getElementById("n2").value)
    let n3 =parseInt(document.getElementById("n3").value)
let sum = n1+n2+n3;
let avg = sum/3;
document.getElementById("sum").value=sum;
document.getElementById("avg").value=avg;
}


function naturalnum(){
    let n = parseInt(document.getElementById("nat").value);
    let sum = n*(n+1)/2;
    document.getElementById("s1").value=sum;
}

function avgnum(){
    let n1 = parseInt(document.getElementById("num1").value);
    let sum = n1*(n1+1)/2
    let avg = sum/n1
    document.getElementById("average").value=avg;
}

function missingnums(){
    let a1 = parseInt(document.getElementById("n1").value);
    let a2 = parseInt(document.getElementById("n2").value);
    let angles = 180-(a1+a2);
    document.getElementById("anglers").value=angles;
}

function profitnum(){
    let sp = parseInt(document.getElementById("numb1").value);
    let cp = parseInt(document.getElementById("numb2").value);
    let profit = sp-cp;
    let profitpercantage = (profit)*100;
    document.getElementById("profitperc").value=profitpercantage;
}

function intersetnum(){
  let p = parseInt(document.getElementById("p1").value);
  let t = parseInt(document.getElementById("t1").value); 
  let r = parseInt(document.getElementById("r1").value);
  let si = p*t*r/100;
  document.getElementById("simpleI").value=si;
}