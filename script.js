// Variables declared or initialized
var pwdLen = 0;
var uCase;
var lCase;
var strPwdCriteria = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // 1. Prompt user to input the password length  
    var pwdLgth = function() {
      pwdLen = prompt("Enter the length of the password");
      if(pwdLen < 8 || pwdLen > 128) 
        {
          alert("Please enter password length of at least 8 characters and no more than 128 characters.");
        }
      };
      
      while(pwdLen < 8 || pwdLen > 128) {
        pwdLgth();
      }

    //2. Prompt user if LowerCase/Uppercase/Numeric/Special Characters is required
    var charTypes = function() {
      var boolLC = confirm("Do you want password to contain Lowercase?");
      if(boolLC) {
        strPwdCriteria = strPwdCriteria + "L";
      }
      var boolUC = confirm("Do you want password to contain Uppercase?");
      if(boolUC) {
        strPwdCriteria = strPwdCriteria + "U";
      }
      var boolNum = confirm("Do you want password to contain numeric values?");
      if(boolNum) {
        strPwdCriteria = strPwdCriteria + "N";
      }
      var boolSC = confirm("Do you want password to contain special characters?");
      if(boolSC) {
        strPwdCriteria = strPwdCriteria + "S";
      }
      if(strPwdCriteria === "") {
        alert("Please select at least one character type.");
      }
    };
    
    while(strPwdCriteria === "") {
      charTypes();
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
