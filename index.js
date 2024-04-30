const product1=()=>{
    window.location.href = './Description/Product1.html';
}
const product2=()=>{
    window.location.href = './Description/Product2.html';
}
const product3=()=>{
    window.location.href = './Description/Product3.html';
}
const product4=()=>{
    window.location.href = './Description/Product4.html';
}
const product5=()=>{
    window.location.href = './Description/Product5.html';
}
const product6=()=>{
    window.location.href = './Description/Product6.html';
}
const product7=()=>{
    window.location.href = './Description/Product7.html';
}
const product8=()=>{
    window.location.href = './Description/Product8.html';
}
const scrolldown = () => {
    const element = document.getElementById("product1");
        element.scrollIntoView({"behavior":"smooth"});
    
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
