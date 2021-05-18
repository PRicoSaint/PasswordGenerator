// This is the javascript that will be run once the user asks for a new password.
// This 1st parts clears the values, if there are any, by setting them to 0.
var pwlength = 0;
var chartype = 0;
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "k", "i", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w" , "x", "y", "z"];
var spchars = ["!", "#", "$", "%", "&","(",")","*","+",",","-",".","/",":",";","<","=",">","?", "@","[","\",","^","_","`","{","|","}","~"];
var ALPHA = ["A", "B", "C", "D", "E", "F", "G", "H", "K", "I", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// function generatePassword(){
//   var userChoice = window.prompt("Need a new password? Y/N");
//   if (!userChoice) {
//     return;
//   }
//   if (userChoice === "Y"){
//     inputLength();
//   }else if (userChoice === "N"){
//     window.alert("Canceling processes!")
//     return;
//   }else {
//     window.alert("That is an incorrect option. Please try again.")
//     generatePassword();
//   }

// }

// function inputLength(){
//   var pwlength = window.prompt("Please choose a number between and including 8 and 128.");
//   if (isNaN(pwlength)){
//     window.alert("Incorrect value, please enter a number.");
//     inputLength();
//   } else if (pwlength < 8){
//     window.alert("Please choose a numeric value between 8 and 128.");
//     inputLength();
//   }else if (pwlength > 128){
//     window.alert("Please choose a numeric value between and including 8 and 128.");
//     inputLength();
//   } else if (!pwlength) {
//     window.alert("Canceling Process!");
//       return;
//   } else {
//     window.alert(pwlength + " has been submitted successfully. Now on to Char Type!");
//     inputCharType();
//   }
// }

// // function checkLandCtype(){
// //   if (pwlength === 0){
// //     inputLength();
// //   }else if (chartype === 0){
// //     inputCharType();
// //   }else {
// //     createuserpw()
// //   }
// // }

// function inputCharType(){
//   var chartype = window.prompt("Please choose character type(s) desired: \nlowercase, uppercase, numeric, and/or special characters.");
//   if (isNaN(chartype)){
//     window.alert("Incorrect value, please enter one of the following values: \nlowercase, uppercase, numeric, and/or special characters.");
//     inputCharType();
//   }else if (chartype === "lowercase"){
//     var lcase =1;
//     window.prompt("Please choose another type if desired")
//     inputCharType();
//   }else if (chartype === "uppercase"){
//     var ucase = 1;
//     window.alert("Please choose another type if desired")
//     inputCharType();
//   }else if (chartype === "numeric"){
//     var num = 1;
//     window.alert("Please choose another type if desired")
//     inputCharType();
//   }else if (chartype === "special characters"){
//     var spechar = 1;
//     window.alert("Please choose another type if desired")
//     inputCharType();
//   }
//   else {
//     window.alert("Character types" lcase + ucase + num + spechar + " have been submitted successfully.");
//     createuserpw();
//   }
// }

// function createuserpw(){
//   var charactertypes = [];
//   charactertypes.push(...lcase, ...ucase, ...num, ...spechar);
//   for (var i = 1; i < pwlength, i++){
//     var digittype = charactertypes[Math.floor(Math.random() * charactertypes.length)];
//     if (digittype === lcase){
//       randlower();
//     }
//   }


// }


// function generatePassword(){
//     var charactertypes = [randlower(),randupper(),randnum(),randspecchar()];
//     for (var i = 1; i <9; i++){
//     var digit = randctype();
//       console.log(digit);
//     return;
//     }
// }
function generatePassword(){
    // function randctype() {
    //     var ctype = charactertypes[Math.floor(Math.random() * charactertypes.length)]
    //     console.log(ctype);
    // }

    function randlower() {
      var ldigit = alphabet[Math.floor(Math.random() * alphabet.length)];
      console.log(ldigit);

    }

    function randupper() {
      var updigit = ALPHA[Math.floor(Math.random() * ALPHA.length)];
      console.log(updigit);
    }

    function randnum() {
      var num = numeric[Math.floor(Math.random() * numeric.length)];
      console.log(num);
    }

    function randspecchar() {
      var spec = spchars[Math.floor(Math.random() * spchars.length)];
      console.log(spec);

    }
    randlower();
    randupper()
    randnum();
    randspecchar();
}





// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
