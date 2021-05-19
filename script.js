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
  if (userChoice){
    inputLength();
  }else{
    window.alert("Canceling process!")
    return;
  }
  
  function inputLength(){
      var length = window.prompt("Please choose a number between and including 8 and 128.");
      console.log(length);
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
        window.alert( length + " has been submitted successfully. Now on to Character Types!");
        pwlength = length;
        console.log(pwlength);
        inputNumeric();
      }
    }

  function inputNumeric(){
    console.log(pwlength);
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
  function inputLowerCase(){
    console.log(charactertypes);
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
  function inputUpperCase(){
    console.log(charactertypes);
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
  function inputSpecialChars(){
    console.log(charactertypes);
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
  function checkSelections(){
    console.log(charactertypes);
    if (charactertypes.length === 0){
      window.alert("No selections have been made, please choose at least one, lower case, upper case, number, or special characters.")
      inputLength();
    }else{ 
      createUserPW()
    }
  }
  function createUserPW(){
    console.log(charactertypes);
      var pass = [];  
      for (var i=0; i<pwlength; i++){
        var ctype = charactertypes[Math.floor(Math.random() * charactertypes.length)]
        console.log(ctype);
        pass.push(...ctype);
        console.log(pass);
        pass.join("");
        console.log(pass.join(""));
        
    }console.log(pass.join(""));
    password = (pass.join(""));
  }   console.log(password);
 return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
