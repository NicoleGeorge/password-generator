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


// Stage 6: Copying to clipboard

clipboardEl.addEventListener('click', () => {
  var textarea = document.createElement('textarea');
  var password = printPasswordEl.innerText;

  if (!password) {
    return
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('password copied to clipboard');
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

  var typesArray = [];

  if (lower)
    typesArray.push("lower");

  if (upper)
    typesArray.push("upper");

  if (number)
    typesArray.push("number");

  if (symbol)
    typesArray.push("symbol");
  
    // console.info(typesArray); trying to find where the bug is!

  // Filter out unchecked boxes - if not check, don't want it to generate anything

  // checking if no checkboxes are checked

    if (typesArray.length === 0) 
      return '';
  
    var lowercase = 'qwertyuiopasdfghjklzxcvbnm';
    var uppercase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    var numbers = '1234567890';
    var symbols = '!@#$%^&*(){}[]=<>/,.';

    //loop over length call generator function for each critera input
  
    for(var i = 0; i < length; i++) {
      var type = typesArray[Math.floor(Math.random() * typesArray.length)];
      
      var randomChar;

      if (type == "lower") {
       randomChar = lowercase.charAt(Math.floor(Math.random() * lowercase.length));
      }
      else if (type == "upper") {
        randomChar = uppercase.charAt(Math.floor(Math.random() * uppercase.length));
      }
      else if (type == "number") {
        randomChar = numbers.charAt(Math.floor(Math.random() * numbers.length));
      }
      else if (type == "symbol") {
        randomChar = symbols.charAt(Math.floor(Math.random() * symbols.length));
      }
      
      generatedPassword += randomChar;
    }


    // only generating password length selector - not how many boxes checked


    // Adding the generated password to the display text area field.

    return generatedPassword;
  }
  



// wanted to simplify the code; removed the ASCII code and inserted character manually:
//  Stage 2: GENERATE FUNCTIONS // using ASCII (https://www.ascii-code.com/)

// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 5);
// }

// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
//   var symbols = '!@#$%^&*(){}[]=<>/,.';
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

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



