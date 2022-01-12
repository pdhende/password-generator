// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // 1. Prompt user to input the password length  
    do {
      var pwdLen = prompt("Enter the length of the password");
      if(pwdLen < 8 || pwdLen > 128) 
       {
        alert("Please enter password length of at least 8 characters and no more than 128 characters.");
       } 
    }while(pwdLen < 8 || pwdLen > 128);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
