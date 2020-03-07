// Syncing the Slider & Number input fields

var charRange = document.getElementById("charRange")
var charNumber = document.getElementById("charNumber")

charRange.addEventListener("input", syncCharAmount)
charNumber.addEventListener("input", syncCharAmount)

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
