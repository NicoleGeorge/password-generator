var charRange = document.getElementById("charRange")
var charNumber = document.getElementById("charNumber")
var form = document.getElementById("passwordGeneratorForm")
var includeLowerCaseEl = document.getElementById("includeLowercase")
var includeUpperCaseEl = document.getElementById("includeUppercase")
var includeNumbersEl = document.getElementById("includeNumbers")
var includeSymbolsEl = document.getElementById("includeSymbols")

var lowercaseCharCodes = arrayLowToHigh(97, 122)
var uppercaseCharCodes = arrayLowToHigh(65, 90)
var numberCharCodes = arrayLowToHigh(48, 57)

// 4 sections within the Char codes that include symbols. 
// they must therefore be concatenated so the function pulls out
// all characters within one array.

var symbolCharCodes = arrayLowToHigh(33, 47).concat(arrayLowToHigh(58, 64)
).concat(arrayLowToHigh(91, 96)
).concat(arrayLowToHigh(123, 126)
)


// Stage 1: Syncing the Slider & Number input fields - making them dynamic

charRange.addEventListener("input", syncCharAmount)
charNumber.addEventListener("input", syncCharAmount)

function syncCharAmount (event) {
  var value = event.target.value
  charNumber.value = value
  charRange.value = value
}

// Stage 2: Syncing the checkboxes to the password generate field

form.addEventListener("submit", event => {
 event.preventDefault()
 var characterAmount = charNumber.value
 var includeLowercase = includeLowercaseEl.checked
 var includeUppercase = includeUppercaseEl.checked
 var includeNumbers = includeNumbersEl.checked
 var includeSymbols = includeSymbolsEl.checked
 var password = generatePassword(characterAmount, includeLowercase, 
  includeUppercase, includeNumbers, includeSymbols)
})


// Stage 3: creating the characters for the password via ASCII 
// (link ascii website)

function generatePassword(characterAmount, includeLowercase, includeUpperCase,
  includeNumbers, includeSymbols) {
    console.log(lowercaseCharCodes)
}

// Stage 4: looping through the differnt ASCII variables from the low to high number


function arrayLowToHigh (low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

