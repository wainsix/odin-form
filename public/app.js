var myInput = document.getElementById("pwd");
var myInput2 = document.getElementById("pwd2");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};
function comparePasswords() {
  if (myInput.value !== myInput2.value) {
    document.getElementById("message2").style.display = "block";
    pwdchck.classList.remove("valid");
    pwdchck.classList.add("invalid");
  } else {
    document.getElementById("message2").style.display = "none";
    pwdchck.classList.add("valid");
    pwdchck.classList.remove("invalid");
  }
}

myInput2.onkeyup = comparePasswords;

// Kun käyttäjä keskittyy kenttään 2, tarkistetaan ovatko salasanat samat
myInput2.onfocus = comparePasswords;

// Kun käyttäjä poistuu kentästä 2, tarkistetaan ovatko salasanat samat
myInput2.onblur = comparePasswords;
