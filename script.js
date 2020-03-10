// all DOM ELEMENTS

var lengthEl = document.getElementById('charAmountNumber');
var form = document.getElementById('passwordGeneratorForm');
var includeLowercaseEl = document.getElementById('includeLowercase');
var includeUppercaseEl = document.getElementById('includeUppercase');
var includeNumbersEl = document.getElementById('includeNumbers');
var includeSymbolsEl = document.getElementById('includeSymbols');
var printPasswordEl = document.getElementById('printPassword');
var generateBtn = document.getElementById('generate');
var clipboardEl = document.getElementById('clipboard');


// Copying generated password to clipboard

clipboardEl.addEventListener('click', () => {
  var textarea = document.createElement('textarea');
  var password = printPasswordEl.value;

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

// Syncing the Slider & Number input fields

charAmountRange.addEventListener("input", syncCharAmount)
charAmountNumber.addEventListener("input", syncCharAmount)

function syncCharAmount (event) {
  var value = event.target.value
  charAmountNumber.value = value
  charAmountRange.value = value
}

// Syncing the checkboxes 

generateBtn.addEventListener('click', () => {
  var length = +lengthEl.value;
  var includeLowercase = includeLowercaseEl.checked; 
  var includeUppercase = includeUppercaseEl.checked;
  var includeNumbers = includeNumbersEl.checked;
  var includeSymbols = includeSymbolsEl.checked;

  // Validating user input 

  if (length < 8)
      length = 8;
    else if (length > 128)
      length = 128;

  if (includeLowercase != true && includeUppercase != true 
    && includeNumbers != true && includeSymbols != true)
  {
    alert("Please select at least one type of character");
  }
  else {
      printPasswordEl.innerText = generatePassword(
      includeLowercase, includeUppercase, includeNumbers, 
      includeSymbols, length);
  }
  
  });


  // Generate password function 

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
  

  // validating each checkbox

    if (typesArray.length === 0) 
      return '';
  
      var lowercase = 'qwertyuiopasdfghjklzxcvbnm';
      var uppercase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
      var numbers = '1234567890';
      var symbols = '!@#$%^&*(){}[]=<>/,.';

  // looping over length call generator function for each critera input
  
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

    // Adding the generated password to the display text area field. 

    return generatedPassword;
  }





