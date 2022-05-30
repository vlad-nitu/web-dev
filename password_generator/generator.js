const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");

const includeUppercaseElement = document.getElementById("includeUppercase") ;
const includeNumbersElement = document.getElementById("includeNumbers") ;
const includeSymbolsElement = document.getElementById("includeSymbols") ;


//Check ASCII Character Codes Table
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90) ; // from A to Z
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122) ; // from a to z
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57) ; // from 0 to 9
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)  
) ;  // For all symbols


characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);

const form = document.getElementById("passwordGeneratorForm");
const passwordDisplay = document.getElementById("passwordDisplay");

form.addEventListener('submit', event => { 
    event.preventDefault() ; // Clicking on a "Submit" button, prevent it from submitting a form
    
    const characterAmount = characterAmountNumber.value ;
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;

    const password = generatePassword(characterAmount, includeUppercase, 
        includeNumbers, includeSymbols);


        passwordDisplay.innerText = password;    
});


function generatePassword(characterAmount, includeUppercase,
     includeNumbers, includeSymbols){ 

    let charCodes = LOWERCASE_CHAR_CODES ;
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES) ;
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES) ;
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES) ;
    
        const passwordCharacters = []; 
       

    for (let i = 0; i < characterAmount; i++){
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)] ;
        passwordCharacters.push(String.fromCharCode(characterCode)) ;
    }

    return passwordCharacters.join('') ; // converts array into a string

}

function arrayFromLowToHigh(low, high) { 
    const arr = [] ;
    for (let i = low; i <= high; i++){
            arr.push(i);
    }

    return arr; 

}

function syncCharacterAmount(event){
    
    const value = event.target.value ;
    characterAmountNumber.value = value ;
    characterAmountRange.value = value ;

}