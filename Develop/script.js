// Assignment Code
var generateBtn = document.querySelector("#generate");
// function to generate a random number between two set limits

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


    chosenCharacters = chosenCharacters.join("");

    // create shuffle function to rearrange characters in array
    function shuffle(array) {
    var m = array.length, t, i;
      while (m) {
      i = Math.floor(Math.random() * m--);
      t=array[m];
      array[m]=array[i];
      array[i]=t;
      }
      return array;
    };
    
    chosenCharacters= shuffle(chosenCharacters);

    console.log(chosenCharacters);




    var password = "";
    function inventPassword(length) {   
    for ( var i = 0; i < charLength; i++ ) {
      password += (chosenCharacters).charAt(Math.floor(Math.random() * 
  charLength));
   }
      return password;
    }
    console.log(inventPassword(charLength));
  }
  input();
// turn user input into new password with given criteria

};


  // var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);