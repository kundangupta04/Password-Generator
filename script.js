const passwordOutput = document.getElementById("passwordOutput");
const passwordLength = document.getElementById("passwordLength");
const lengthValue = document.getElementById("lengthValue");

const upperCheck = document.getElementById("upperCheck");
const lowerCheck = document.getElementById("lowerCheck");
const numberCheck = document.getElementById("numberCheck");
const symbolCheck = document.getElementById("symbolCheck");

const generateBtn = document.getElementById("generateBtn");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-={}[]|:;<>,.?/";

passwordLength.addEventListener("input", () => {
  lengthValue.textContent = passwordLength.value;
});

function generatePassword() {
  let characters = "";

  if (upperCheck.checked) characters += upperChars;
  if (lowerCheck.checked) characters += lowerChars;
  if (numberCheck.checked) characters += numberChars;
  if (symbolCheck.checked) characters += symbolChars;

  if (characters.length === 0) {
    passwordOutput.value = "Select at least one option";
    return;
  }

  let password = "";
  const len = parseInt(passwordLength.value);

  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordOutput.value = password;
}

generateBtn.addEventListener("click", generatePassword);
