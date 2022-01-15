// Variables declared or initialized
var pwdLen = 0;
var uCase;
var lCase;
var strPwdCriteria = "";
//Arrays containing character
var uCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numArr = [0,1,2,3,4,5,6,7,8,9];
// var splCharArr = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
var splCharArr = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // 1. Function to prompt user to input the password length and validate the input
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

    //2. Function to prompt user to choose character type LowerCase/Uppercase/Numeric/Special Characters and validate the selection.
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
