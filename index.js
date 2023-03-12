const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let canGenerate = true
let passwordLength = 8

function generatePassword() {
    let password1 = ""
    let password2 = ""
    let characterList = []
    let randomNumber = ""
    let password1El = document.getElementById("password1")
    let password2El = document.getElementById("password2")
    
    if (document.getElementById("letters-box").checked) {
        includeLetters = true
    } else includeLetters = false;
    if (document.getElementById("numbers-box").checked) {
        includeNumbers = true
    } else includeNumbers = false;
        if (document.getElementById("symbols-box").checked) {
        includeSymbols = true
    } else includeSymbols = false;
    if (includeLetters === true) 
        characterList = characterList.concat(letters);
    if (includeNumbers === true) 
        characterList = characterList.concat(numbers);
    if (includeSymbols === true) 
        characterList = characterList.concat(symbols);
    if (includeLetters === false && includeNumbers === false && includeSymbols === false) {
        canGenerate = false
    } else {canGenerate = true}
    
    if (canGenerate === true) {
        for(let i = 0; i < passwordLength; i++) {
            password1 += characterList[Math.floor(Math.random() * characterList.length)]
            password2 += characterList[Math.floor(Math.random() * characterList.length)]
        }
        password1El.textContent = password1
        password2El.textContent = password2
    } else {
        password1El.textContent = ""
        password2El.textContent = ""
    }
}
