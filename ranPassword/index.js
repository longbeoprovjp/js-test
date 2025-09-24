//random password generator

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    const lowercaseChars = "qwertyuiopasdfghjklzxcvbnm";
    const uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=<>?/:;'{]|}";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += uppercaseChars ? uppercaseChars : "";
    allowedChars += numberChars ? numberChars : "";
    allowedChars += symbolChars ? symbolChars : "";

    if(length <= 0){
        return `(password needs to be there vro)`;
    }
    if(allowedChars.length === 0){
        return `(just pick one vro)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random()* allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                includeLowerCase, 
                includeUpperCase, 
                includeNumbers, 
                includeSymbols);

console.log(`Generated password: ${password}`);