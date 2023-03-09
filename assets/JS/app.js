
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;
}



document.getElementById('length').addEventListener('change', charLength)



const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length') 
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numberEl = document.getElementById('numbers')
const symbolEl = document.getElementById('symbols')
const generateEl = document.getElementById('btn')



const randomFunction = {
 lower:getRandomLower,
 upper:getRandomUpper,
 number:getRandomNumber,
 Symbol: getRandomSymbol

};

generateEl.addEventListener('click',() =>{
const length = +lengthEl.value;
const hasLower = lowercaseEl.checked;
const hasUpper = uppercaseEl.checked;
const hasNUmber = numberEl.checked;
const hasSymbol = symbolEl.checked;

resultEl.innerText = generatePassword(hasLower,hasUpper,hasNUmber,hasSymbol,length);

function generatePassword(lower,upper,number,symbol,length) {
let generatedPass = '';

const typesCount = lower + upper + number+ symbol;

const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
item => Object.values(item)[0]

if(typesCount === 0){
    return '';
}

for(let i =0; i < length; i+= typesCount){
  typesArr.forEach(type => {
    const funName = Object.keys(type)[0];
   
   generatedPassword += randomFunction[funName]();
  });
}
const finalPassword = generatedPassword.slice(0, length)
    return finalPassword;
}





})


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26)+ 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26)+ 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10)+ 65);
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.' 
    return String.fromCharCode[Math.floor(Math.random() * symbols.length)];
}





