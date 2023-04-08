import validateEmail from "../validation/validateEmail.js";
import validatePassword from "../validation/validatePassword.js";
import validateRePassword from "../validation/validateRePassword.js";
import validateFirstname from "../validation/validateFirstname.js";
import validateFamlyname from "../validation/validateFamlyname.js";
import showToast from "../services/Toast.js";
const inputFirstname = document.getElementById("profile-input-Firstname");
const inputFamlyname = document.getElementById("profile-input-Famlyname");
const inputEmail = document.getElementById("profile-input-Email");
const inputPassword = document.getElementById("profile-input-Password");
const inputRePassword = document.getElementById("profile-input-RePassword");
const inputPhone = document.getElementById("profile-input-Phone");
const inputAddress = document.getElementById("profile-input-Address");
const inputContry = document.getElementById("profile-input-Contry");
const inputStreet = document.getElementById("profile-input-Street");
const inputhouseNumber = document.getElementById("profile-input-houseNumber");
const inputCity = document.getElementById("profile-input-City");
const inputState = document.getElementById("profile-input-State");
const inputZip = document.getElementById("profile-input-Zip");
const btnProfile = document.getElementById("profile-btn");
let firstNameOk;
let famlyNameOk;
let emailOk;
let passwordOk;
let repasswordOk;
const checkIfCanEnableBtn = () => {
  btnSignup.disabled = !(
    firstNameOk &&
    famlyNameOk &&
    emailOk &&
    passwordOk &&
    repasswordOk
  );
};

window.addEventListener("load", () => {
  if (inputFirstname.value == !"") {
    checkFirstname();
  }
  if (inputFamlyname.value == !"") {
    checkFamlynameInput();
  }
  if (inputEmail.value == !"") {
    checkEmailInput();
  }
  if (inputPassword.value == !"") {
    checkPasswordInput();
  }
  if (inputRePassword.value == !"") {
    checkRepasswordInput();
  }
  if (inputPhone.value == !"") {
    checkphoneInput();
  }
  if (inputAddress.value == !"") {
    checkAddressInput();
  }
  if (inputContry.value == !"") {
    checkContryInput();
  }
  if (inputStreet.value == !"") {
    checkStreetInput();
  }
  if (inputhouseNumber.value == !"") {
    checkhouseNumberInput();
  }
  if (inputCity.value == !"") {
    checkCityInput();
  }
  if (inputState.value == !"") {
    checkStateInput();
  }
  if (inputZip.value == !"") {
    checkZipInput();
  }
  let users = localStorage.getItem("users");
  let token = localStorage.getItem("token");
  if (users && token) {
    users = JSON.parse(users); // convert from string to array of objects
    // console.log("users from localStorage", users);
    token = JSON.parse(token);
    let user = users.find((item) => item.id === token.id);
    if (user) {
      inputFirstname.value = user.firsname;
      inputEmail.value = user.email;
      inputPassword.value = user.password;
      emailOk = passwordOk = repasswordOk = true;
    }
  }
});
const checkFirstname = () => {
  let errorArr = validateFirstname(inputFirstname.value);
  if (errorArr.length === 0) {
    /* inputFirstname.classList.remove("is-invalid");
    document.getElementById("singup-alert-Firstname").classList.add("d-none");
    firstnameOk = true;
  } else {
    if (inputFirstname.value.length == 0) {
      document.getElementById("singup-alert-Firstname").innerText =
        "Empty Firstname";
    } else {
      document.getElementById("singup-alert-Firstname").innerText =
        "Firstname rules";
    }
    inputFirstname.classList.add("is-invalid");
    document
      .getElementById("singup-alert-Firstname")
      .classList.remove("d-none");
    document.getElementById("singup-alert-Firstname").innerHTML =
      errorArr.join("<br>");
    firstnameOk = false; */
    inputFirstname.classList.remove("is-invalid");
    document.getElementById("profile-alert-Firstname").classList.add("d-none");
    firstNameOk = true;
  } else {
    if (inputFirstname.value.length == 0) {
      document.getElementById("profile-alert-Firstname").innerText =
        "Empty Firstname";
    } else {
      document.getElementById("profile-alert-Firstname").innerText =
        "  firstName  rules";
    }
    inputFirstname.classList.add("is-invalid");
    document
      .getElementById("profile-alert-Firstname")
      .classList.remove("d-none");
    document.getElementById("profile-alert-Firstname").innerHTML =
      errorArr.join("<br>");
    firstNameOk = false;
  }
  checkIfCanEnableBtn();
};

inputFirstname.addEventListener("input", () => {
  checkFirstname();
});

const checkFamlynameInput = () => {
  let errorArr = validateFamlyname(inputFamlyname.value);
  if (errorArr.length === 0) {
    inputFamlyname.classList.remove("is-invalid");
    document.getElementById("profile-alert-Famlyname").classList.add("d-none");
    famlyNameOk = true;
  } else {
    if (inputFamlyname.value.length == 0) {
      document.getElementById("profile-alert-Famlyname").innerText =
        "Empty Famlyname";
    } else {
      document.getElementById("profile-alert-Famlyname").innerText =
        "Famlyname rules";
    }
    inputFamlyname.classList.add("is-invalid");
    document
      .getElementById("profile-alert-Famlyname")
      .classList.remove("d-none");
    document.getElementById("profile-alert-Famlyname").innerHTML =
      errorArr.join("<br>");
    famlyNameOk = false;
  }
  checkIfCanEnableBtn();
};
inputFamlyname.addEventListener("input", () => {
  checkFamlynameInput();
});

const checkEmailInput = () => {
  let errorArr = validateEmail(inputEmail.value);
  if (errorArr.length === 0) {
    inputEmail.classList.remove("is-invalid");
    document.getElementById("profile-alert-Email").classList.add("d-none");
    emailOk = true;
  } else {
    if (inputEmail.value.length == 0) {
      document.getElementById("profile-alert-Email").innerText = "Empty mail";
    } else {
      document.getElementById("profile-alert-Email").innerText = "Email rules";
    }
    inputEmail.classList.add("is-invalid");
    document.getElementById("profile-alert-Email").classList.remove("d-none");
    document.getElementById("profile-alert-Email").innerHTML =
      errorArr.join("<br>");
    emailOk = false;
  }
  checkIfCanEnableBtn();
};

inputEmail.addEventListener("input", () => {
  checkEmailInput();
});
const checkPasswordInput = () => {
  let errorArr = validatePassword(inputPassword.value);
  if (errorArr.length === 0) {
    inputPassword.classList.remove("is-invalid");
    document.getElementById("profile-alert-Password").classList.add("d-none");
    passwordOk = true;
  } else {
    if (inputPassword.value.length == 0) {
      document.getElementById("profile-alert-Password").innerText =
        "Empty Password";
    } else {
      document.getElementById("profile-alert-Password").innerText =
        "Password rules";
    }
    inputPassword.classList.add("is-invalid");
    document
      .getElementById("profile-alert-Password")
      .classList.remove("d-none");
    document.getElementById("profile-alert-Password").innerHTML =
      errorArr.join("<br>");
    passwordOk = false;
  }
  checkIfCanEnableBtn();
};
inputPassword.addEventListener("input", () => {
  checkPasswordInput();
});
const checkRepasswordInput = () => {
  let errorArr = validateRePassword(inputRePassword.value);
  if (errorArr.length === 0) {
    inputRePassword.classList.remove("is-invalid");
    document.getElementById("profile-alert-RePassword").classList.add("d-none");
    repasswordOk = true;
  } else {
    inputRePassword.classList.add("is-invalid");
    document
      .getElementById("profile-alert-RePassword")
      .classList.remove("d-none");
  }
  if (errorArr.length === 0) {
    inputRePassword.classList.remove("is-invalid");
    document.getElementById("profile-alert-RePassword").classList.add("d-none");
    repasswordOk = true;
  } else {
    if (inputRePassword.value.length == 0) {
      document.getElementById("profile-alert-RePassword").innerText =
        "Empty RePassword";
    } else {
      document.getElementById("profile-alert-RePassword").innerText =
        "RePassword rules";
    }
    inputRePassword.classList.add("is-invalid");
    document
      .getElementById("profile-alert-RePassword")
      .classList.remove("d-none");
    document.getElementById("profile-alert-RePassword").innerHTML =
      errorArr.join("<br>");

    repasswordOk = false;
  }
  checkIfCanEnableBtn();
};
inputRePassword.addEventListener("input", () => {
  checkRepasswordInput();
});
const checkphoneInput = () => {
  const reg = new RegExp("^[0-9]{10,255}$", "g");
  if (reg.test(inputPhone.value)) {
    inputPhone.classList.remove("is-invalid");
    document.getElementById("profile-alert-Phone").classList.add("d-none");
  } else {
    if (inputPhone.value.length == 0) {
      document.getElementById("profile-alert-Phone").innerText = "Empty Phone";
    } else {
      document.getElementById("profile-alert-Phone").innerText = "Phone rules";
    }
    inputPhone.classList.add("is-invalid");
    document.getElementById("profile-alert-Phone").classList.remove("d-none");
  }
};
inputPhone.addEventListener("input", () => {
  checkphoneInput();
});

const checkAddressInput = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{2,255}$", "g");
  if (reg.test(inputAddress.value)) {
    inputAddress.classList.remove("is-invalid");
    document.getElementById("profile-alert-Address").classList.add("d-none");
  } else {
    if (inputAddress.value.length == 0) {
      document.getElementById("profile-alert-Address").innerText =
        "Empty Address";
    } else {
      document.getElementById("profile-alert-Address").innerText =
        "Address rules";
    }
    inputAddress.classList.add("is-invalid");
    document.getElementById("profile-alert-Address").classList.remove("d-none");
  }
};
inputAddress.addEventListener("input", () => {
  checkAddressInput();
});

const checkContryInput = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{2,255}$", "g");
  if (reg.test(inputContry.value)) {
    inputContry.classList.remove("is-invalid");
    document.getElementById("profile-alert-Contry").classList.add("d-none");
  } else {
    if (inputContry.value.length == 0) {
      document.getElementById("profile-alert-Contry").innerText =
        "Empty Contry";
    } else {
      document.getElementById("profile-alert-Contry").innerText =
        "Contry rules";
    }
  }
  inputContry.classList.add("is-invalid");
  document.getElementById("profile-alert-Contry").classList.remove("d-none");
};
inputContry.addEventListener("input", () => {
  checkContryInput();
});
const checkStreetInput = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{2,255}$", "g");
  if (reg.test(inputStreet.value)) {
    inputStreet.classList.remove("is-invalid");
    document.getElementById("profile-alert-Street").classList.add("d-none");
  } else {
    if (inputStreet.value.length == 0) {
      document.getElementById("profile-alert-Street").innerText =
        "Empty Street";
    } else {
      document.getElementById("profile-alert-Street").innerText =
        "Street rules";
    }
  }
  inputStreet.classList.add("is-invalid");
  document.getElementById("profile-alert-Street").classList.remove("d-none");
};
inputStreet.addEventListener("input", () => {
  checkStreetInput();
});
const checkhouseNumber = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{2,255}$", "g");
  if (reg.test(inputhouseNumber.value)) {
    inputhouseNumber.classList.remove("is-invalid");
    document
      .getElementById("profile-alert-houseNumber")
      .classList.add("d-none");
  } else {
    if (inputhouseNumber.value.length == 0) {
      document.getElementById("profile-alert-houseNumber").innerText =
        "Empty houseNumber";
    } else {
      document.getElementById("profile-alert-houseNumber").innerText =
        "houseNumber rules";
    }
  }
  inputhouseNumber.classList.add("is-invalid");
  document
    .getElementById("profile-alert-houseNumber")
    .classList.remove("d-none");
};
inputhouseNumber.addEventListener("input", () => {
  checkhouseNumber();
});

const checkCityInput = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{2,255}$", "g");
  if (reg.test(inputCity.value)) {
    inputCity.classList.remove("is-invalid");
    document.getElementById("profile-alert-City").classList.add("d-none");
  } else {
    if (inputCity.value.length == 0) {
      document.getElementById("profile-alert-City").innerText = "Empty City";
    } else {
      document.getElementById("profile-alert-City").innerText = "City rules";
    }
    inputCity.classList.add("is-invalid");
    document.getElementById("profile-alert-City").classList.remove("d-none");
  }
};
inputCity.addEventListener("input", () => {
  checkCityInput();
});

const checkStateInput = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{2,255}$", "g");
  if (reg.test(inputState.value)) {
    inputState.classList.remove("is-invalid");
    document.getElementById("profile-alert-State").classList.add("d-none");
  } else {
    if (inputState.value.length == 0) {
      document.getElementById("profile-alert-State").innerText = "Empty State";
    } else {
      document.getElementById("profile-alert-State").innerText = "State rules";
    }
    inputState.classList.add("is-invalid");
    document.getElementById("profile-alert-State").classList.remove("d-none");
  }
};
inputState.addEventListener("input", () => {
  checkStateInput();
});

const checkZipInput = () => {
  const reg = new RegExp("^[0-9]{2,255}$", "g");
  if (reg.test(inputZip.value)) {
    inputZip.classList.remove("is-invalid");
    document.getElementById("profile-alert-Zip").classList.add("d-none");
  } else {
    if (inputZip.value.length == 0) {
      document.getElementById("profile-alert-Zip").innerText = "Empty Zip code";
    } else {
      document.getElementById("profile-alert-Zip").innerText = "Zip code rules";
    }
    inputZip.classList.add("is-invalid");
    document.getElementById("profile-alert-Zip").classList.remove("d-none");
  }
};
inputZip.addEventListener("input", () => {
  checkZipInput();
});
const checkAdmin = () => {
  isAdmin = document.getElementById("profile-gridCheck");
  if (!isAdmin) {
    return false;
  }
  checkAdmin();
  return isAdmin;
};

let users = localStorage.getItem("users");
let token = localStorage.getItem("token");
if (users && token) {
  users = JSON.parse(users); // convert from string to array of objects
  // console.log("users from localStorage", users);
  token = JSON.parse(token);
  let userEmail = users.find((item) => item.email === inputEmail.value);
  let user = users.find((item) => item.id === token.id);
  if (userEmail && user.id !== userEmail.id) {
    showToast("The email already taken", false);
  }
  if (user) {
    user.firsname = token.firsname = inputFirstname.value;
    user.email = token.email = inputEmail.value;
    user.password = inputPassword.value;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("token", JSON.stringify(token));
    showToast("Saved");
  }
}
/* setTimeout(() => {
  location.reload();
}, 3000);

 */
