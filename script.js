// Variables declared or initialized
var pwdLen = 0;
var strPwdCriteria = "";
var pFlag = true;
//Arrays containing character
// var uCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// var lCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// var numArr = [0,1,2,3,4,5,6,7,8,9];
// var splCharArr = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
var uCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lCaseStr = "abcdefghijklmnopqrstuvwxyz"
var numStr = "0123456789";
var splCharStr = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // 1. Function to prompt user to input the password length and validate the input
    var pwdLgth = function() {

        pwdLen = prompt("Enter the length of the password");

        // User input password length validation
        if(isNaN(pwdLen)) {
          alert("Please enter a number as password length");
        }
        else if(pwdLen < 8 || pwdLen > 128) 
          {
            alert("Please enter password length of at least 8 characters and no more than 128 characters.");
          }
        else {
            pFlag = false;
        }
      };
      
      while(pFlag) {
        pwdLgth();
      }

    //2. Function to prompt user to choose character type LowerCase/Uppercase/Numeric/Special Characters and validate the selection.
    var charTypes = function() {

      // LowerCase validation
      var boolLC = confirm("Do you want password to contain Lowercase?");
      if(boolLC) { 
        strPwdCriteria = strPwdCriteria + "L";
      }

      // UpperCase validation
      var boolUC = confirm("Do you want password to contain Uppercase?");
      if(boolUC) {
        strPwdCriteria = strPwdCriteria + "U";
      }

      // Numeric values validation
      var boolNum = confirm("Do you want password to contain numeric values?");
      if(boolNum) {
        strPwdCriteria = strPwdCriteria + "N";
      }

      // Special characters validation
      var boolSC = confirm("Do you want password to contain special characters?");
      if(boolSC) {
        strPwdCriteria = strPwdCriteria + "S";
      }

      // If no character types are selected show alert
      if(strPwdCriteria === "") {
        alert("Please select at least one character type.");
      }
    };

    while(strPwdCriteria === "") {
      charTypes();
    }

    // 3. Function to generate password based on user inputs
    var createPwd = function() {
    };

    return strPwdCriteria;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
