const women1=()=>{
    window.location.href = './Description/Women1.html';
}
const women2=()=>{
    window.location.href = './Description/Women2.html';
}
const women3=()=>{
    window.location.href = './Description/Women3.html';
}
const women4=()=>{
    window.location.href = './Description/Women4.html';
}
const women5=()=>{
    window.location.href = './Description/Women5.html';
}
const women6=()=>{
    window.location.href = './Description/Women6.html';
}
const women7=()=>{
    window.location.href = './Description/Women7.html';
}
const women8=()=>{
    window.location.href = './Description/Women8.html';
}

window.addEventListener('load',()=>{
    document.getElementById("cartTab").style.display="none";
})
const showCart=()=>{
  document.getElementById("cartTab").style.display="block";
}
const closeCart=()=>{
  document.getElementById("cartTab").style.display="none";
}
let total=4697;
let quantity1=1;
let quantity2=1;
let quantity3=1;
let price1=2499;
let price2=799;
let price3=1399;

const m1=()=>{
    quantity1--;
    if(quantity1<1){
        quantity1++;
    }
    else{
        document.getElementById("a1").innerHTML=quantity1;
        price1=quantity1*2499;
        document.getElementById("price1").innerHTML=price1+"Rs";
    }
}
const p1=()=>{
    quantity1++;
    if(quantity1>5){
        quantity1--;
    }
    else{
        document.getElementById("a1").innerHTML=quantity1;
        price1=quantity1*2499;
        document.getElementById("price1").innerHTML=price1+"Rs";
    }
}


const m2=()=>{
    quantity2--;
    if(quantity2<1){
        quantity2++;
    }
    else{
        document.getElementById("a2").innerHTML=quantity2;
        price2=quantity2*799;
        document.getElementById("price2").innerHTML=price2+"Rs";
    }
}
const p2=()=>{
    quantity2++;
    if(quantity2>5){
        quantity2--;
    }
    else{
        document.getElementById("a2").innerHTML=quantity2;
        price2=quantity2*799;
        document.getElementById("price2").innerHTML=price2+"Rs";
    }
}

const m3=()=>{
    quantity3--;
    if(quantity3<1){
        quantity3++;
    }
    else{
        document.getElementById("a3").innerHTML=quantity3;
        price3=quantity3*1399;
        document.getElementById("price3").innerHTML=price3+"Rs";
    }
}
const p3=()=>{
    quantity3++;
    if(quantity3>5){
        quantity3--;
    }
    else{
        document.getElementById("a3").innerHTML=quantity3;
        price3=quantity3*1399;
        document.getElementById("price3").innerHTML=price3+"Rs";
    }
}
