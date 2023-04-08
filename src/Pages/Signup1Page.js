import PAGES from "../models/pageModel.js";
import { handlePageChange } from "../routes/router.js";
import validateEmail from "../validation/validateEmail.js";
import validatePassword from "../validation/validatePassword.js";
import validateRePassword from "../validation/validateRePassword.js";
import validateFirstname from "../validation/validateFirstname.js";
import validateFamlyname from "../validation/validateFamlyname.js";
import User from "../models/User.js";
import showToast from "../services/Toast.js";
const inputFirstname = document.getElementById("singup-input-Firstname");
const inputFamlyname = document.getElementById("singup-input-Famlyname");
const inputEmail = document.getElementById("singup-input-Email");
const inputPassword = document.getElementById("singup-input-Password");
const inputRePassword = document.getElementById("singup-input-RePassword");
const inputPhone = document.getElementById("singup-input-Phone");
const inputContry = document.getElementById("singup-input-Contry");
const inputStreet = document.getElementById("singup-input-Street");
const inputhouseNumber = document.getElementById("singup-input-houseNumber");
const inputCity = document.getElementById("singup-input-City");
const inputState = document.getElementById("singup-input-State");
const inputZip = document.getElementById("singup-input-Zip");
const btnSignup = document.getElementById("signup-btn");
const btnCancel = document.getElementById("signup-cancel");
const isAdmin = document.getElementById("singup-input-isAdmin");
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
});
const checkFirstname = () => {
  let errorArr = validateFirstname(inputFirstname.value);
  if (errorArr.length === 0) {
    inputFirstname.classList.remove("is-invalid");
    document.getElementById("singup-alert-Firstname").classList.add("d-none");
    firstNameOk = true;
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
    document.getElementById("singup-alert-Famlyname").classList.add("d-none");
    famlyNameOk = true;
  } else {
    if (inputFamlyname.value.length == 0) {
      document.getElementById("singup-alert-Famlyname").innerText =
        "Empty Famlyname";
    } else {
      document.getElementById("singup-alert-Famlyname").innerText =
        "Famlyname rules";
    }
    inputFamlyname.classList.add("is-invalid");
    document
      .getElementById("singup-alert-Famlyname")
      .classList.remove("d-none");
    document.getElementById("singup-alert-Famlyname").innerHTML =
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
    document.getElementById("singup-alert-Email").classList.add("d-none");
    emailOk = true;
  } else {
    if (inputEmail.value.length == 0) {
      document.getElementById("singup-alert-Email").innerText = "Empty mail";
    } else {
      document.getElementById("singup-alert-Email").innerText = "Email rules";
    }
    inputEmail.classList.add("is-invalid");
    document.getElementById("singup-alert-Email").classList.remove("d-none");
    document.getElementById("singup-alert-Email").innerHTML =
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
    document.getElementById("singup-alert-Password").classList.add("d-none");
    passwordOk = true;
  } else {
    if (inputPassword.value.length == 0) {
      document.getElementById("singup-alert-Password").innerText =
        "Empty Password";
    } else {
      document.getElementById("singup-alert-Password").innerText =
        "Password rules";
    }
    inputPassword.classList.add("is-invalid");
    document.getElementById("singup-alert-Password").classList.remove("d-none");
    document.getElementById("singup-alert-Password").innerHTML =
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
    document.getElementById("singup-alert-RePassword").classList.add("d-none");
    repasswordOk = true;
  } else {
    inputRePassword.classList.add("is-invalid");
    document
      .getElementById("singup-alert-RePassword")
      .classList.remove("d-none");
  }
  if (errorArr.length === 0) {
    inputRePassword.classList.remove("is-invalid");
    document.getElementById("singup-alert-RePassword").classList.add("d-none");
    repasswordOk = true;
  } else {
    if (inputRePassword.value.length == 0) {
      document.getElementById("singup-alert-RePassword").innerText =
        "Empty RePassword";
    } else {
      document.getElementById("singup-alert-RePassword").innerText =
        "RePassword rules";
    }
    inputRePassword.classList.add("is-invalid");
    document
      .getElementById("singup-alert-RePassword")
      .classList.remove("d-none");
    document.getElementById("singup-alert-RePassword").innerHTML =
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
    document.getElementById("singup-alert-Phone").classList.add("d-none");
  } else {
    if (inputPhone.value.length == 0) {
      document.getElementById("singup-alert-Phone").innerText = "Empty Phone";
    } else {
      document.getElementById("singup-alert-Phone").innerText = "Phone rules";
    }
    inputPhone.classList.add("is-invalid");
    document.getElementById("singup-alert-Phone").classList.remove("d-none");
  }
};
inputPhone.addEventListener("input", () => {
  checkphoneInput();
});

const checkContryInput = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{2,255}$", "g");
  if (reg.test(inputContry.value)) {
    inputContry.classList.remove("is-invalid");
    document.getElementById("singup-alert-Contry").classList.add("d-none");
  } else {
    if (inputContry.value.length == 0) {
      document.getElementById("singup-alert-Contry").innerText = "Empty contry";
    } else {
      document.getElementById("singup-alert-Contry").innerText = "contry rules";
    }
    inputContry.classList.add("is-invalid");
    document.getElementById("singup-alert-Contry").classList.remove("d-none");
  }
};
inputContry.addEventListener("input", () => {
  checkContryInput();
});

const checkStreetInput = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{2,255}$", "g");
  if (reg.test(inputStreet.value)) {
    inputStreet.classList.remove("is-invalid");
    document.getElementById("singup-alert-Street").classList.add("d-none");
  } else {
    if (inputStreet.value.length == 0) {
      document.getElementById("singup-alert-Street").innerText = "Empty Street";
    } else {
      document.getElementById("singup-alert-Street").innerText = "Street rules";
    }
    inputStreet.classList.add("is-invalid");
    document.getElementById("singup-alert-Street").classList.remove("d-none");
  }
};
inputStreet.addEventListener("input", () => {
  checkStreetInput();
});
const checkhouseNumberInput = () => {
  const reg = new RegExp("^[0-9]{1,255}$", "g");
  if (reg.test(inputhouseNumber.value)) {
    inputhouseNumber.classList.remove("is-invalid");
    document.getElementById("singup-alert-houseNumber").classList.add("d-none");
  } else {
    if (inputhouseNumber.value.length == 0) {
      document.getElementById("singup-alert-houseNumber").innerText =
        "Empty houseNumber";
    } else {
      document.getElementById("singup-alert-houseNumber").innerText =
        "houseNumber rules";
    }
    inputhouseNumber.classList.add("is-invalid");
    document
      .getElementById("singup-alert-houseNumber")
      .classList.remove("d-none");
  }
};
inputhouseNumber.addEventListener("input", () => {
  checkhouseNumberInput();
});

const checkCityInput = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{2,255}$", "g");
  if (reg.test(inputCity.value)) {
    inputCity.classList.remove("is-invalid");
    document.getElementById("singup-alert-City").classList.add("d-none");
  } else {
    if (inputCity.value.length == 0) {
      document.getElementById("singup-alert-City").innerText = "Empty City";
    } else {
      document.getElementById("singup-alert-City").innerText = "City rules";
    }
    inputCity.classList.add("is-invalid");
    document.getElementById("singup-alert-City").classList.remove("d-none");
  }
};
inputCity.addEventListener("input", () => {
  checkCityInput();
});

const checkStateInput = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{2,255}$", "g");
  if (reg.test(inputState.value)) {
    inputState.classList.remove("is-invalid");
    document.getElementById("singup-alert-State").classList.add("d-none");
  } else {
    if (inputState.value.length == 0) {
      document.getElementById("singup-alert-State").innerText = "Empty State";
    } else {
      document.getElementById("singup-alert-State").innerText = "State rules";
    }
    inputState.classList.add("is-invalid");
    document.getElementById("singup-alert-State").classList.remove("d-none");
  }
};
inputState.addEventListener("input", () => {
  checkStateInput();
});

const checkZipInput = () => {
  const reg = new RegExp("^[0-9]{2,255}$", "g");
  if (reg.test(inputZip.value)) {
    inputZip.classList.remove("is-invalid");
    document.getElementById("singup-alert-Zip").classList.add("d-none");
  } else {
    if (inputZip.value.length == 0) {
      document.getElementById("singup-alert-Zip").innerText = "Empty Zip code";
    } else {
      document.getElementById("singup-alert-Zip").innerText = "Zip code rules";
    }
    inputZip.classList.add("is-invalid");
    document.getElementById("singup-alert-Zip").classList.remove("d-none");
  }
};
inputZip.addEventListener("input", () => {
  checkZipInput();
});
const checkAdmin = () => {
  isAdmin = document.getElementById("singup-input-isAdmin");
  if (!isAdmin) {
    return false;
  }
  checkAdmin();
  return isAdmin;
};

btnSignup.addEventListener("click", () => {
  if (!firstNameOk && famlyNameOk && emailOk && passwordOk && repasswordOk) {
    //if someone changed the html from dev tools
    return;
  }

  let users = localStorage.getItem("users");
  let nextUserId = localStorage.getItem("nextUserId");
  nextUserId = +nextUserId;
  let newUser = new User(
    nextUserId++,
    inputFirstname.value,
    inputFamlyname.value,
    inputEmail.value,
    inputPassword.value,
    inputRePassword.value,

    isAdmin.checked
  );
  localStorage.setItem("nextUserId", nextUserId + "");

  if (!users) {
    users = [newUser];
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    //we have users
    users = JSON.parse(users); // convert from string to array of objects
    // console.log("users from localStorage", users);
    for (let user of users) {
      if (user.email === inputEmail.value) {
        //display msg - email already exists
        showToast("Email already exists", false);
        return;
      }
    }

    //user provided new email
    users = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(users));
    document
      .getElementById("signup-form")
      .querySelectorAll("input")
      .forEach((item) => {
        item.value = "";
        handlePageChange(PAGES.LOGIN);
      });
  }
});
btnCancel.addEventListener("click", () => {
  location.reload;
});
document.getElementById("signup-cancel").addEventListener("click", () => {
  document
    .getElementById("signup-form")
    .querySelectorAll("input")
    .forEach((item) => {
      item.value = "";
    });
});
