let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let password3 = document.getElementById("password3");
let password4 = document.getElementById("password4");

function generate() {
  var length = document.getElementById("pass-leg").value;

  if (length > 0) {
    passwordNumberOne();
    passwordNumberTwo();
    passwordNumberThree();
    passwordNumberFour();
  } else {
  }
}

function passwordNumberOne(length) {
  var length = document.getElementById("pass-leg").value,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return (password1.textContent = retVal);
}

function passwordNumberTwo(length) {
  var length = document.getElementById("pass-leg").value,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return (password2.textContent = retVal);
}
function passwordNumberThree(length) {
  var length = document.getElementById("pass-leg").value,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return (password3.textContent = retVal);
}
function passwordNumberFour(length) {
  var length = document.getElementById("pass-leg").value,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return (password4.textContent = retVal);
}
