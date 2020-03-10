Password Generator Project:

VIEW APP: https://nicolegeorge.github.io/wk3-password-generator/

Brief:
Create an application that generates a random password based on user-selected criteria. 

Objective:
1. The app to run in the browser and feature dynamically updated HTML and CSS powered by JavaScript code. 
2. Feature a clean and polished UI and to be responsive, ensuring that it adapts to multiple screen sizes.

Method:

Step 1 - Two input methods were chosen as a way to control user input, by setting the min & max values, thus fulfilling the criteria of generating a password between 8-128 characters. The slider & value input field was synced, to create a seamless user experience. 

Step 2 - created the form within the HTMl document, which included 4 checkboxes, each pertaining to the criteria outlined in the brief; lowercase alpha, uppercase alpha, numeric values and symbols.

Step 3 - initialised all the DOM elements needed

Step 4 - An event listener event was added to the generate button.

Stage 5 - created the generatedPassword function.  This was returned to the printPassword box.  

Stage 6 - copying the newly generated password to clipboad.

Final Stage - valdating the user input via if/else statement; even though the slider was set to min = 8 & max = 128. this validaton was incuded to mitigate vulnerability, namely malicious Javascript code injections, which may compromising the integrity of the password generator. An alert box was added to prompt user if they select a password length < 8 or > 128.




