// num guessing game

const minNum = 1;
const maxNum =100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Gimme a number vro...(hint: between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Bros trolling");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Bros hella wrong");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("bit too low");
        }
        else if(guess > answer){
            window.alert("bit too high");
        }
        else{
            window.alert(`ding ding ding the funni was ${answer}, took you ${answer}`);
            running = false;
        }
    }
}
