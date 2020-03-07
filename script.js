var charRange = document.getElementById("charRange")
var charNumber = document.getElementById("charNumber")
var passwordGeneratorForm = document.getElementById("passwordGeneratorForm")
var includeLowercaseEl = document.getElementById("includeLowerCase")
var includeUppercaseEl = document.getElementById("includeUpperCase")
var includeNumbersEl = document.getElementById("includeNumbers")
var includeSymbolsEl = document.getElementById("includeSymbols")

// Stage 1: Syncing the Slider & Number input fields - making them dynamic
charRange.addEventListener("input", syncCharAmount)
charNumber.addEventListener("input", syncCharAmount)

// Stage 2: Syncing the checkboxes to the password generate field

FormData.addEventListener("generate", event => ) {
    event.preventDefault()
    var CharacterAmount = charNumber.value
    var includeLowercase = includeLowercaseEl.checked
    var includeUppercaseEl = includeUppercase.checked
    var includeNumbersEl = includeNumbers.checked
    var includeSymbolsEl = includeSymbols.checked
    var password = generatePassword(CharacterAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbol); 
}

function syncCharAmount (event) {
  var value = event.target.value
  charNumber.value = value
  charRange.value = value
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
