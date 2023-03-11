function charLength() {
    let charLength = document.getElementById("length").value;
    document.getElementById("result").innerHTML = charLength;
    // getting id from checkboxes
    let upperCase = document.getElementById("uppercase").checked;
    let lowerCase = document.getElementById("lowercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let symbols = document.getElementById("symbols").checked;

    // Decalring an array
    const upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    const lower = ["abcdefghijklmnopqrstuvwxyz"];
    const number = ["0123456789"];
    const symbol = ["!@#$%^&*()_+{}|:>?<~[];'./"];

    let conclusion = "";

    // Declare an for loop
    for(let i =0; i < charLength; i++){
        if(upperCase){
            conclusion += upper[0].charAt(Math.floor(Math.random() * 26));
        }
        if(lowerCase){
            conclusion += lower[0].charAt(Math.floor(Math.random() * 26));
        }
        if(numbers){
            conclusion += number[0].charAt(Math.floor(Math.random() * 26));
        }
        if(symbols){
            conclusion += symbol[0].charAt(Math.floor(Math.random() * 26));
        }       
    }

    // To create output password
    let output = conclusion.slice(0 ,charLength);

    // TO show output
    document.getElementById("password__result").value = output;

    return charLength;

}
// calling the function back
charLength();
// add event listener function
document.getElementById("length").addEventListener("input", charLength);
document.getElementById("btn").addEventListener("click", charLength);