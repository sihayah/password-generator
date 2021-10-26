var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // create an array to organize possible character selections
  let chosenCharacters = [];

// Gather and define desired password criteria
  var input = function(){
    var charLength = "";
    charLength= prompt("What is the desired 'LENGTH' of your new password? Please choose a number between 8 and 128.");
    charLength= parseInt(charLength);
    if (charLength < 8 || charLength > 128) {
      window.alert("Sorry, try again.")
      return input();
    }
    console.log("Password length: " + charLength);

    var uppercase= "";
    uppercase= confirm("Would you like to include 'UPPERCASE' characters?");
    console.log("Uppercase: " + uppercase);
      if (uppercase) {
        chosenCharacters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      };

    var lowercase= "";
    lowercase= confirm("Would you like to include 'LOWERCASE' characters?");
    console.log("Lowercase: " + lowercase);
      if (lowercase) {
        chosenCharacters.push("abcdefghijklmnopqrstuvwxyz");
      };

    var numbers= "";
    numbers= confirm("Would you like to include 'NUMBERS'?");
    console.log("Numbers: " + numbers);
      if (numbers) {
        chosenCharacters.push("0123456789");
      };

    var symbols= "";
    symbols= confirm("Would you like to include 'SYMBOLS'?");
    console.log("Symbols: " + symbols);
      if (symbols) {
        chosenCharacters.push("~!@#$%^&*()_+-?");
      };
    

  // transform all chosen character into one string without commas or spaces
  chosenCharacters = chosenCharacters.join("");

  // Function to generate the new password
  var newPassword = "";
  var generatePassword = function(length) {   
    for ( var i = 0; i < length; i++ ) {
      newPassword += (chosenCharacters).charAt(Math.floor(Math.random() * 
      chosenCharacters.length));
    }
    return newPassword;
  }  

  // call to generate newPassword
  generatePassword(charLength);
  var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
  console.log(newPassword);
  }

  // ask user for input to start the process
  input();
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);