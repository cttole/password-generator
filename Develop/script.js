
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var includeLowercase, includeUppercase, includeNumeric, includeSpecial;
// below is the characters the generator can use 
function generatePassword(length) {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+";
  var characters = "";
  var password = "";
// below is where the perfered characters get combined
  if (includeLowercase) {
    characters += lowercaseChars;
  }
  if (includeUppercase) {
    characters += uppercaseChars;
  }
  if (includeNumeric) {
    characters += numericChars;
  }
  if (includeSpecial) {
    characters += specialChars;
  }

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}
// below is where the application shows a prompt for the user to select desired characters
function handleGenerateClick() {
  var passwordLength = prompt("Enter desired password length (8-128)");

  if (passwordLength >= 8 && passwordLength <= 128) {
    includeLowercase = confirm("Include lowercase characters");
    includeUppercase = confirm("Include Uppercase characters");
    includeNumeric = confirm("Include Numbers");
    includeSpecial = confirm("Include special characters");

    var password = generatePassword(passwordLength);

    passwordText.value = password;
  } else {
    alert("Hey silly, the password length should be between 8 and 128.");
  }
}

generateBtn.addEventListener("click", handleGenerateClick);
