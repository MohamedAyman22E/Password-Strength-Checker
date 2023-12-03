let icon = document.querySelector(".input_group i");
let input = document.querySelector(".input_group input");
icon.addEventListener("click", function () {
  this.classList.toggle("active");
  if (icon.classList.contains("fa-eye")) {
    icon.classList.replace("fa-eye", "fa-eye-slash");
    input.type = "text";
  } else {
    icon.classList.replace("fa-eye-slash", "fa-eye");
    input.type = "password";
  }
});

//
let strength = document.querySelector(".strength");
let numStrength = 0;
const listColor = ["#FF002E", "#FCDE05", "#249FD5", "#67CA5B"];

let isContainsNum = false;
let isContainsAlp = false;
let isContainsSymbol = false;
let isGreater8 = false;

input.addEventListener("input", function () {
  checkPassword(this.value);
  if (this.value === "") {
    numStrength = 0;
  }
  strength.style.setProperty("--width", `${numStrength * 25}%`);
  strength.style.setProperty("--bg-color", listColor[numStrength - 1]);
});
function checkPassword(string) {
  const number = new RegExp(".*[0-9]");
  const alphabet = new RegExp(".*[a-zA-Z]");
  const symbol = new RegExp(".*\\W");
  const greater8 = new RegExp(".{8,}");
  if (number.test(string)) {
    if (!isContainsNum) {
      numStrength++;
      isContainsNum = true;
    }
  } else {
    if (isContainsNum) {
      numStrength--;
      isContainsNum = false;
    }
  }

  if (alphabet.test(string)) {
    if (!isContainsAlp) {
      numStrength++;
      isContainsAlp = true;
    }
  } else {
    if (isContainsAlp) {
      numStrength--;
      isContainsAlp = false;
    }
  }

  if (symbol.test(string)) {
    if (!isContainsSymbol) {
      numStrength++;
      isContainsSymbol = true;
    }
  } else {
    if (isContainsSymbol) {
      numStrength--;
      isContainsSymbol = false;
    }
  }

  if (greater8.test(string)) {
    if (!isGreater8) {
      numStrength++;
      isGreater8 = true;
    }
  } else {
    if (isGreater8) {
      numStrength--;
      isGreater8 = false;
    }
  }
}
