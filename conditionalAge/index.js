// if-else

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age = 0;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

    if(age >= 100){
        resultElement.textContent = "Brother is hella old";
    }
    else if(age == 0){
        resultElement.textContent = "Bro missed everything";
    }
    else if(age >= 18){
        resultElement.textContent = "Unc pushing momento";
    }
    else if(age < 0){
        resultElement.textContent = "Bruh's not born yet";
    }
    else{
        resultElement.textContent = "Tell me bruh";
    }
}
