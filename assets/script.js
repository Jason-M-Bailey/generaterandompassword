// assignment Code
var generateBtn = document.querySelector("#generate");

// assigned variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@,#$%&*{}[]/\\+=";

var chosenCharacters = ""; // this is a bucket where the other arrays are added, then we'll use a charAt to randomly pick characters from the string

// write password function into the deployed page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); // find the id#password in index.html
  passwordText.value = password; // paste the randomly generated password in the id#password field
}

// event listener when the user clicks the generate password button
generateBtn.addEventListener("click", writePassword);

//generate password function gets called in writePassword function, and it should return the final password
function generatePassword() {

  //do random generation here and return the final password in the end
  var result = ""; // empty bucket where our math.random will add characters

  //ask the user how many characters they want
  var length = prompt(
    "How many characters in your random password? (between 8 and 128)"
  );
  if (isNaN(length)) {
    alert(
      "Come on! That's not even a number! Enter a number between 8 and 128, please."
    );
    return generatePassword(); // return to start if user enters a Not a Number
  }
  if (length < 8 || length > 128) {
    alert("That wasn't between 8 and 128, try again!");
    return generatePassword(); // return to start if user enters less than 8 or greater than 128
  }

  // now that user has entered a valid number, we move forward

  //ask the user if they want to include upper, lower, num, special?
  var includeUpper = confirm("Include upper case letters?");
  var includeLower = confirm("Include lower case letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  // if the user clicks cancel on all character types!
  if (!includeUpper && !includeLower && !includeNumbers && !includeSpecial) {
    alert(
      "How are you going to create a password with no character types? Start over!"
    );
    return generatePassword(); // is there a way to start this at -var includeUpper...?
  }
  if (includeUpper) {
    chosenCharacters += upper;
  }
  if (includeLower) {
    chosenCharacters += lower;
  }
  if (includeNumbers) {
    chosenCharacters += numbers;
  }
  if (includeSpecial) {
    chosenCharacters += special;
  }
  for (var i = 0; i < length; i++) {
    result += chosenCharacters.charAt(
      Math.floor(Math.random() * chosenCharacters.length)
    );
  }
  return result;
}

// copy to clipboard
var copyBtn = document.getElementById("copy"); //gets the id: #copy from index.html

copyBtn.addEventListener("click", () => {
  //when the button is clicked do something
  password.select(); // this is defined earlier by id #password as the text box, so select the contents of this text box
  document.execCommand("copy"); // copies to clipboard
  alert("Password Copied"); // creates popup at top of screen with message
});
