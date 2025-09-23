// checked boxes

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = "hmmm okay";
    }
    else{
        subResult.textContent = "ohhhhh";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "holy cow";
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = "holy crap";
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = "big gooner";
    }
    else{
        paymentResult.textContent = "well how are you gooning?";
    }
}