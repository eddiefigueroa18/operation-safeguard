// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterLength = 8; 
var choiceArr = [];

var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','_','-','=','+','{','}','[',']','|','/',':',';','<','>','?',];
var lowerCaseArr = [,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = [,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = [,'1','2','3','4','5','6','7','8','9','0'];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) { 
     var newPassword = generatePassword();
     passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random()  * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters would you like your password to contain? (8 - 128 characters)"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    window.alert("Character length has to be a number between 8 - 128 digits. Please try again.");
    return false;
  }
  if (window.confirm("Click OK to confirm including lowercase characters.")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (window.confirm("Click OK to confirm including uppercase characters.")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (window.confirm("Click OK to confirm including special characters.")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (window.confirm("Click OK to confirm including numeric characters.")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}




// window.confirm("How many characters would you like your password to contain?");
// window.confirm("Click OK to confirm including special characters.");
// window.confirm("Click OK to confirm including numeric characters.");
// window.confirm("Click OK to confirm including lowercase characters.");
// window.confirm("Click OK to confirm including uppercase characters.");
