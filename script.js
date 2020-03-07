//DOM elements

var charAmountRange = document.getElementById("charAmountRange")
var charAmountNumber = document.getElementById("charAmountNumber")
var form = document.getElementById("passwordGeneratorForm")
var includeLowerCaseEl = document.getElementById("includeLowercase")
var includeUpperCaseEl = document.getElementById("includeUppercase")
var includeNumbersEl = document.getElementById("includeNumbers")
var includeSymbolsEl = document.getElementById("includeSymbols")
var printPassword = document.getElementById("printPassword")
var generateBtn = document.getElementById("generate");

var lowercaseCharCodes = arrayAscend(97, 122)
var uppercaseCharCodes = arrayAscend(65, 90)
var numberCharCodes = arrayAscend(48, 57)

// 4 sections within the Char codes that include symbols. 
// they must therefore be concatenated so the function pulls out
// all characters within one array.

var symbolCharCodes = arrayAscend(33, 47).concat(arrayAscend(58, 64)
).concat(arrayAscend(91, 96)
).concat(arrayAscend(123, 126)
)


// Stage 1: Syncing the Slider & Number input fields - making them dynamic

charAmountRange.addEventListener("input", syncCharAmount)
charAmountNumber.addEventListener("input", syncCharAmount)

function syncCharAmount (event) {
  var value = event.target.value
  charAmountNumber.value = value
  charAmountRange.value = value
}

// Stage 2: Syncing the checkboxes to the password generate field

form.addEventListener("submit", event => {
  event.preventDefault()
  var characterAmount = charAmountNumber.value
  var includeLowercase = includeLowercaseEl.checked
  var includeUppercase = includeUppercaseEl.checked
  var includeNumbers = includeNumbersEl.checked
  var includeSymbols = includeSymbolsEl.checked

  var password = generatePassword(characterAmount, includeLowercase, includeUppercase,
    includeNumbers, includeSymbols)
    printPassword.innerHTML= password
})


// Stage 3: creating the characters for the password via ASCII 
// (https://www.ascii-code.com/)

// Stage 5: list all the possible character code combinations

function generatePassword(characterAmount, includeLowercase, includeUpperCase, includeNumbers, includeSymbols) {
  
let charCodes = lowercaseCharCodes
  if (includeUpperCase) charCodes = charCodes.concat(uppercaseCharCodes)
  if (includeSymbols) charCodes = charCodes.concat(symbolCharCodes)
  if (includeNumbers) charCodes = charCodes.concat(numberCharCodes)

  var passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
  var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
   }
   return passwordCharacters.join('')
}


// Stage 4: looping through the differnt ASCII variables from the low to high number


function arrayAscend (low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// // Assignment Code

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

