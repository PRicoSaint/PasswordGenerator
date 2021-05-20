// This is the javascript that will be run once the user asks for a new password.
// This 1st parts clears the values, if there are any, by setting them to 0. It also set up the arrays to be used to randomize the different selections.
// Some of the special chars needed to be removed due to conflicting with the code. Causing errors.
var pwlength = 0;
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var password = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "k", "i", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w" , "x", "y", "z"];
var spchars = ["!", "#", "$", "%", "&","*","+","-",".","/","<","=",">","?", "@","^","_","`","~", "(", ")", "'"];
var ALPHA = ["A", "B", "C", "D", "E", "F", "G", "H", "K", "I", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charactertypes = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  // Clears charactertypes array so that a new password can be generated with possible new user inputs chosen without having to reload page.
  charactertypes.length = 0;
  // Calls generatePassword function and assigns its output to variable password.
  var password = generatePassword();
  // Takes whats in the variable password and writes it to the location on the html id=password.
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// This is the beginning of the password generator. It begins with asking the user if they need a new password, taking them through
// a series of prompts so that a new password is generated and displayed on screen.
function generatePassword(){
      var userChoice = window.confirm("Need a new password?")
      // The web page will prompt the user. Ok will continue the script, while cancel will end it, letting the user know that it has been ended.
      if (userChoice){
        inputLength();
      }else{
        window.alert("Canceling process!")
        return;
      }
  // Once the user decides and hits OK, the web page will prompt the user for number of characters, setting the length of the password.
  // The script will check to make sure it is bewteen 8 and 128 characters. If not, it will return an alert and rerun the function inputLength(). 
    function inputLength(){
          var length = window.prompt("Please choose a number between and including 8 and 128.");
          if (isNaN(length)){
            window.alert("Incorrect value, please enter a number.");
            inputLength();
          } else if (length < 8){
            window.alert("Please choose a numeric value between 8 and 128.");
            inputLength();
          }else if (length > 128){
            window.alert("Please choose a numeric value between and including 8 and 128.");
            inputLength();
          } else if (!length) {
            window.alert("Canceling Process!");
              return;
          } else {
        // Once the length is typed in and accepted, the user is alerted to the value and taken to next function, determining what types of characters
        // the user would like to include in their password.
        // The amount that was typed in is also made equal to the global variable (pwlength = length;) so it can be used in later functions.
          window.alert( length + " has been submitted successfully. Now on to Character Types!");
          pwlength = length;
          inputNumeric();
        }
      }
    //The next four functions complete the second part of the required task of the password generator. 
    // The user is prompted to either confirm or deny the options of numeric, lower, upper, and special characters. One of these MUST be chosen.
    // They can be selected in any combination. When a selection is confirmed, the script will push the corresponding array into the main one.
    // This main one (charactertypes) will be used to randomly select options from it and generate the password.
    // If the confirm is cancelled, the script will alert the user and move on to the next option.

    // This function is for the numeric values selection.
    function inputNumeric(){
          var numericEnable = window.confirm("Would you like for the password to include numbers? (example: 0938234)")
          if (numericEnable){
            charactertypes.push(...numeric);
            window.alert("Numbers will be included in the password.");
            inputLowerCase();
          }else {
            window.alert("Numbers will NOT be included in the password.");
            inputLowerCase();
          }
    } 
  // This function is for the lower case selection of letters.
    function inputLowerCase(){
          var lowerEnable = window.confirm("Would you like for the password to include lowercase letters? (example: sdfnd)")
          if (lowerEnable){
            charactertypes.push(...alphabet);
            window.alert("Lower case letters will be included in the password.");
            inputUpperCase();
          }else{
            window.alert("Lower case letters will NOT be included in the password");
            inputUpperCase();
          }
    }
  // This function is for the upper case selection of letters.
    function inputUpperCase(){
          var upperEnable = window.confirm("Would you like for the password to include uppercase letters? (example: SANDGOH)");
          if (upperEnable){
            charactertypes.push(...ALPHA);
            window.alert("Upper case letters will be included in the password.");
            inputSpecialChars();
          }else{
            window.alert("Upper case letters will NOT be included in the password.");
            inputSpecialChars();
          }
    }
  // This function is for the selection of special characters.
    function inputSpecialChars(){
          var specialCharEnable = window.confirm("Would you like to include special characters in your password? (example: @!#$%^)");
          if (specialCharEnable){
            charactertypes.push(...spchars);
            window.alert("Special characters will be included in the password.");
            checkSelections()
          }else{
            window.alert("Special characters will NOT be included in the password.");
            checkSelections()
          }
    }
  // This function is the safeguard check. It makes sure the user made at least one choice of the previous four for character type.
  // If there is at least one selection, it continues to the createUserPW() function without notifying the user.
  // If all selections have been cancelled, it will alert the user and go back to running the inputNumeric() function.
    function checkSelections(){
          if (charactertypes.length === 0){
            window.alert("No selections have been made. Please choose at least one: lower case, upper case, number, or special characters.")
            inputNumeric();
          }else{ 
            createUserPW()
          }
    }
  // This is the function that ultimately creates the password. It first begins with the creation of a function specific array. 
  // pass will server as a container for the values being generated by a for loop. It then takes the value in pwlength and runs and incremental
  // for loop that randomly generates a value from the charactertypes array. It then pushes this value to pass until it reaches the pwlength-1 value.
  // Once the for loop is completed, the value is loaded into password without commas using the .join("") method.
    function createUserPW(){
          var pass = [];  
          for (var i=0; i<pwlength; i++){
            var ctype = charactertypes[Math.floor(Math.random() * charactertypes.length)]
            pass.push(...ctype);
            pass.join("");
            
        }
        password = (pass.join(""));
    } 
  // This is the final crucial step to output the value of generatePassword() and allow the rest of the script to display it on the website.
 return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
