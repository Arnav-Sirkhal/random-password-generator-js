const passwordBox = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");

const length = 15;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "@!#$%^&*~";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

generateBtn.addEventListener("click", createPassword);

copyBtn.addEventListener("click", () => {
  if (passwordBox.value === "") {
    return;
  }
  navigator.clipboard.writeText(passwordBox.value);
  copyBtn.style.filter = "brightness(1.5)";

  setTimeout(() => {
    copyBtn.style.filter = "brightness(1)";
  }, 200);
});
