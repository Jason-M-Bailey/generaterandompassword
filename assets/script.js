// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigned variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]/\\+=";
var chosenCharacters = "";

//write password function 
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

//generate password function gets called in writePassword function, and it should return the final password
function generatePassword(){

  //do random generation here and return the final password in the end
  var result = "";

  //ask the user how many characters they want
  var length = prompt("How many characters in your random password? (between 8 and 128)");
  if(isNaN(length)){
    alert("You must input a number!");
    return generatePassword() // return to start if user enters a Not a Number
  }
  if(length < 8 || length > 128){
    alert("Please choose numbers between 8 - 128!");
    return generatePassword() // return to start if user enters less than 8 or greater than 128
  }
  //ask the user if they want to include upper, lower, num, special?
  var hasUpper = confirm("Include upper case letters?");
  var hasLower = confirm("Include lower case letters?");
  var hasNumbers = confirm("Include numbers?");
  var hasSpecial = confirm("Include special characters?");

  if(!hasUpper && !hasLower && !hasNumbers && !hasSpecial){
    alert("You must at least choose 1 character type!");
    return generatePassword()
  }
  if(hasUpper){
    chosenCharacters += upper
  }
  if(hasLower){
    chosenCharacters += lower
  }
  if(hasNumbers) {
    chosenCharacters += numbers
  }
  if(hasSpecial) {
    chosenCharacters += special
  }
for (var i = 0; i < length; i++) {
  result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
return result;
}

// copy to clipboard
var copyBtn = document.getElementById("copy"); //gets the id: #copy from index.html

copyBtn.addEventListener("click", () => { //when the button is clicked do something 

  password.select(); // this is defined earlier by id #password as the text box, so select the contents of this text box 

  document.execCommand("copy"); // copies to clipboard 
  alert("Password Copied"); // creates popup at top of screen with message
});