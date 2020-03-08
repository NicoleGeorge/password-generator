// Stage 3: create DOM ELEMENTS //

var lengthEl = document.getElementById('charAmountNumber');
var form = document.getElementById('passwordGeneratorForm');
var includeLowercaseEl = document.getElementById('includeLowercase');
var includeUppercaseEl = document.getElementById('includeUppercase');
var includeNumbersEl = document.getElementById('includeNumbers');
var includeSymbolsEl = document.getElementById('includeSymbols');
var printPasswordEl = document.getElementById('printPassword');
var generateBtn = document.getElementById('generate');
var clipboardEl = document.getElementById('clipboard');

var randomPassword = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Stage 6: Copying to clipboard

clipboardEl.addEventListener('click', () => {
  var textarea = document.createElement('textarea');
})

// Stage 1: Syncing the Slider & Number input fields - making them dynamic

charAmountRange.addEventListener("input", syncCharAmount)
charAmountNumber.addEventListener("input", syncCharAmount)

function syncCharAmount (event) {
  var value = event.target.value
  charAmountNumber.value = value
  charAmountRange.value = value
}

// Stage 4: Syncing the checkboxes | Generate event listener

generateBtn.addEventListener('click', () => {
  var length = +lengthEl.value;
  var includeLowercase = includeLowercaseEl.checked; 
  var includeUppercase = includeUppercaseEl.checked;
  var includeNumbers = includeNumbersEl.checked;
  var includeSymbols = includeSymbolsEl.checked;

  printPasswordEl.innerText = generatePassword(
    includeLowercase, includeUppercase, includeNumbers, 
    includeSymbols, length);
});


// Stage 5: Generate password function

function generatePassword(lower, upper, number, symbol, length) {



  // Create a string of variables based on user input criteria

  var generatedPassword = '' ;
  var typesCount = lower + upper + number + symbol;

  // console.log('typesCount: ', typesCount); working.

  // var typesArray = [lower, upper, number, symbol];

  // Filter out unchecked boxes - if not check, don't want it to generate anything

  var typesArray = [{lower}, {upper}, {number}, {symbol}].filter(
    item => Object.values(item)[0]
    ); 

  console.log('typesArray:', typesArray); // returning correct array sequence

    // checking if no checkboxes are checked

    if (typesCount === 0) {
      return '';
    }
  
    //loop over length call generator function for each critera input
  
    for(var i = 0; i < length; i += typesCount) {
      typesArray.forEach(type => {
        var funcCriteria = Object.keys(type)[0];

        //console.log('funcCriteria: ', funcCriteria); --> working correctly

        generatedPassword += randomPassword [funcCriteria] ();
      })
    }
    //
    // only generating password length selector - not how many boxes checked


    // Adding the generated password to the display text area field.

    var password = generatedPassword.slice(0,length); 

    return password;
  }
  




//  Stage 2: GENERATE FUNCTIONS // using ASCII (https://www.ascii-code.com/)

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 5);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  var symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//console.log(getRandomSymbol());


// FINAL Stage: Password Validation 

function validatePassword() {
  var password = document.getElementById('password');
  var valid = password.value.length >=8;
  if (!valid) {
    setErrorMessage(password, 'Password must be at least 8 characters')
  }
  return valid;
}




















// //DOM elements



// var lowercaseCharCodes = arrayAscend(97, 122)
// var uppercaseCharCodes = arrayAscend(65, 90)
// var numberCharCodes = arrayAscend(48, 57)

// // 4 sections within the Char codes that include symbols. 
// // they must therefore be concatenated so the function pulls out
// // all characters within one array.

// var symbolCharCodes = arrayAscend(33, 47).concat(arrayAscend(58, 64)
// ).concat(arrayAscend(91, 96)
// ).concat(arrayAscend(123, 126)
// )


// // Stage 1: Syncing the Slider & Number input fields - making them dynamic

// charAmountRange.addEventListener("input", syncCharAmount)
// charAmountNumber.addEventListener("input", syncCharAmount)

// function syncCharAmount (event) {
//   var value = event.target.value
//   charAmountNumber.value = value
//   charAmountRange.value = value
// }

// // Stage 2: Syncing the checkboxes to the password generate field

// form.addEventListener("submit", event => {
//   event.preventDefault()
//   var characterAmount = charAmountNumber.value
//   var includeLowercase = includeLowercaseEl.checked
//   var includeUppercase = includeUppercaseEl.checked
//   var includeNumbers = includeNumbersEl.checked
//   var includeSymbols = includeSymbolsEl.checked

//   var password = generatePassword(characterAmount, includeLowercase, includeUppercase,
//     includeNumbers, includeSymbols)
//     printPassword.innerHTML= password
// })


// // Stage 3: creating the characters for the password via ASCII 
// // (https://www.ascii-code.com/)

// // Stage 5: list all the possible character code combinations

// function generatePassword(characterAmount, includeLowercase, includeUpperCase, includeNumbers, includeSymbols) {
  
// let charCodes = lowercaseCharCodes
//   if (includeUpperCase) charCodes = charCodes.concat(uppercaseCharCodes)
//   if (includeSymbols) charCodes = charCodes.concat(symbolCharCodes)
//   if (includeNumbers) charCodes = charCodes.concat(numberCharCodes)

//   var passwordCharacters = []
//   for (let i = 0; i < characterAmount; i++) {
//   var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
//     passwordCharacters.push(String.fromCharCode(characterCode))
//    }
//    return passwordCharacters.join('')
// }


// // Stage 4: looping through the differnt ASCII variables from the low to high number


// function arrayAscend (low, high) {
//   var array = []
//   for (let i = low; i <= high; i++) {
//     array.push(i)
//   }
//   return array
// }




// // // Assignment Code

// // function writePassword() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector("#password");

// //   passwordText.value = password;

// // }

// // // Add event listener to generate button
// // generateBtn.addEventListener("click", writePassword);

