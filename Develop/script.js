// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var length8Btn = document.createElement("#button");
var length16Btn = document.createElement("#button");
var length32Btn = document.createElement("#button");
var passwordText = document.querySelector("#password");

length8Btn.textContent = "8";
length16Btn.textContent = "16";
length32Btn.textContent = "32";



function generatePassword(length) {
  var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;

}
function handleGenerateClick() {
  generateBtn.remove();

  length8Btn.classList.add("btn");
  length16Btn.classList.add("btn");
  length32Btn.classList.add("btn");

  var cardFooter = document.querySelector(".card-footer");
    cardFooter.appendChild(length8Btn);
    cardFooter.appendChild(length16Btn);
    cardFooter.appendChild(length32Btn);
}
function handleLengthClick(event){
var passwordLength = parseInt(event.target.textContent);
var password = generatePassword(passwordLength)
passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", handleGenerateClick);
length8Btn.addEventListener("click", handleLengthClick);
length16Btn.addEventListener("click", handleLengthClick);
length32Btn.addEventListener("click", handleLengthClick);
 

