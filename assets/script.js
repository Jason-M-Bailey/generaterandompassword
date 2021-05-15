// assignment code
var generateBtn = document.querySelector("#generate");

// assigned variables
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 

var chosenCharacters = ""; // this is a bucket where the other arrays are added, then we'll randomly pick characters from the string

// event listener when the user clicks the generate password button
generateBtn.addEventListener("click", writePassword);

// write password function into the deployed page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); // find the id#password in index.html
  passwordText.value = password; // paste the randomly generated password in the id#password field
}

// generate password function gets called in writePassword function, and it should return the final password
function generatePassword() {

  var result = ""; // empty bucket where our math.random will add characters

  // ask the user how many characters they want
  var length = prompt(
    "How many characters do you want in your random password? (between 8 and 128)"
  );

  // return to start if user enters a Not a Number
  if (isNaN(length)) {
    alert(
      "Come on! That's not even a number! Enter a number between 8 and 128, please."
    );
    return generatePassword(); 
  }

  // return to start if user enters less than 8 or greater than 128
  if (length < 8 || length > 128) {
    alert("That wasn't between 8 and 128, try again!");
    return generatePassword(); 
  }

  // now that user has entered a valid number, we move forward

  // ask the user if they want to include upper, lower, num, special?
  var includeUpper = confirm("Include upper case letters?");
  var includeLower = confirm("Include lower case letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

    // if the user clicks cancel on all character types!
    if (!includeUpper && !includeLower && !includeNumbers && !includeSpecial) {
      alert(
        "How are you going to create a password with no character types? Start over!"
      );
      return generatePassword(); // should we create a new function so the user restarts at the first character confirm prompt?
    }

  // if true, add to new bucket  
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

  // randomly pick a character from new array and add to result until length is hit
  for (var i = 0; i < length; i++) {
    result += chosenCharacters.charAt(
      Math.floor(Math.random() * chosenCharacters.length)
    );
  }

  return result;
}


// copy to clipboard
var copyBtn = document.getElementById("copy");

copyBtn.addEventListener("click", () => { 
  password.select(); 
  document.execCommand("copy"); 
  alert("Password Copied"); 
});
