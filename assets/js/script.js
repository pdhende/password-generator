// String variables containing different character types
var uCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lCaseStr = "abcdefghijklmnopqrstuvwxyz"
var numStr = "0123456789";
var splCharStr = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Initialize variables
    var pwdLen = 0;
    var strPwdCriteria = "";
    var pFlag = true;
    var pwdReturn = "";

  // 1. Function to prompt user to input the password length and validate the input
    var pwdLgth = function() {
      
      pwdLen = prompt("Enter the length of the password");

      // User input password length validation
      if(isNaN(pwdLen)) {
        alert("Please enter a number as password length");
      }
      else if(pwdLen < 8 || pwdLen > 128) {
          alert("Please enter password length of at least 8 characters and no more than 128 characters.");
      }
      else {
          pFlag = false;
      }
    };
      
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

    // 3. Function to generate password based on user inputs
    var createPwd = function() {

      var pCharType = "";
      var charStr = "";

      // Conditions to concatenate the strings based on the character types chosen
      if(strPwdCriteria.includes("L")) {
        charStr = charStr + lCaseStr;
      }

      if(strPwdCriteria.includes("U")) {
        charStr = charStr + uCaseStr;
      }

      if(strPwdCriteria.includes("N")) {
        charStr = charStr + numStr;
      }

      if(strPwdCriteria.includes("S")) {
        charStr = charStr + splCharStr;
      }

      for(var i = 0; i < pwdLen; i++) {
        pCharType = charStr[Math.floor(Math.random()*charStr.length)];
        pwdReturn = pwdReturn.concat(pCharType);
      }
    };
    
    // Call function to get password length from the user
    while(pFlag) {
      pwdLgth();
    }

    // Call function to get the character types from the user
    while(strPwdCriteria === "") {
      charTypes();
    }

    // Call function to create password with random character types
    if(pwdReturn == "") {
      createPwd();
    }

    return pwdReturn;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
