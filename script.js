const char = [
  "QWERTYUIOPASDFGHJKLZXCVBNM",
  "qwertyuiopasdfghjklzxcvbnm",
  "0123456789",
  "!@#$%^&*>.",
];

let generateBtn = document.getElementById("Generate");
let allCheckBox = document.querySelectorAll(
  ".option-row input[type='checkbox']"
);
let passLength = document.querySelector("#passLength");
let result = document.querySelector("#result");
generateBtn.addEventListener("click", () => {
  let finalChar = "";
  allCheckBox.forEach((checkBox, index) => {
    if (checkBox.checked) {
      finalChar = finalChar + char[index];
    }
  });
  let finalPass = "";
  for (i = 0; i < passLength.value; i++) {
    finalPass += finalChar.charAt(Math.random() * finalChar.length);
  }
  result.innerText = finalPass;
});

let clipboard = document.querySelector("#clipboard");
clipboard.addEventListener("click", () => {
  navigator.clipboard.writeText(result.innerText);
});