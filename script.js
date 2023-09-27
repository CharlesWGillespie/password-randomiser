// Assignment Code
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
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//when the button is clicked this will make the code run
document.getElementById("generate").addEventListener("click", function () {
  
  //this checks whether or not the boxes were checked (checked=TRUE, unchecked=FALSE)
  const length = parseInt(document.getElementById("passwordLength").value);
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeLowercase = document.getElementById("includeLowercase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSpecialChars = document.getElementById("includeSpecialChars").checked;

  //this will send the user an alert message if they do not have any checkbox selected.
  if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialChars) {
        alert("Please select at least one character type.");
      return;
  }

  //this will send the user an alert if they do not have any character length selected 
  if (length < 8 || length > 128) {
      alert("Password length must be between 8 and 128 characters.");
      return;
  }

  //this defines the four types of character sets to choose from
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*-_?";

  //this is the new variable defined to combined different charcters the user has seleted.
  let comboChars = "";

  if (includeUppercase) {
      comboChars += uppercaseChars;
  }
  if (includeLowercase) {
      comboChars += lowercaseChars;
  }
  if (includeNumbers) {
      comboChars += numberChars;
  }
  if (includeSpecialChars) {
      comboChars += specialChars;
  }

  //this creates an empty string called password and runs a loop howver long the length is, and generates a random index in the comboChars variable
  let password = "";
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * comboChars.length);
      password += comboChars.charAt(randomIndex);
  }
// this is the output of the entire function and will spit out the password.
  document.getElementById("password").value = password;
});

// this clears the password that was generated.
document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("password").value = "";
});