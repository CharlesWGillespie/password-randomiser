// Assignment Code
var generateBtn = document.querySelector("#generate");
//TODO: WHEN I click the button to generate a password Write password to the #password input
//TODO:WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// TODO:WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// TODO:WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// TODO:WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// TODO:WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// TODO:WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
