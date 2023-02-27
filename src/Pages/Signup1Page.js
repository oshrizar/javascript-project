import PAGES from "../models/pageModel.js";
import { handlePageChange } from "../routes/router.js";
import validateEmail from "../validation/validateEmail.js";
import validatePassword from "../validation/validatePassword.js";
import validateRePassword from "../validation/validateRePassword.js";
import validateFirstname from "../validation/validateFirstname.js";
import validateFamlyname from "../validation/validateFamlyname.js";
const inputFirstname = document.getElementById("singup-input-Firstname");
const inputFamlyname = document.getElementById("singup-input-Famlyname");
const inputEmail = document.getElementById("singup-input-Email");
const inputPassword = document.getElementById("singup-input-Password");
const inputRePassword = document.getElementById("singup-input-RePassword");
const inputPhone = document.getElementById("singup-input-Phone");
const inputAddress = document.getElementById("singup-input-Address");
const inputAddress2 = document.getElementById("singup-input-Address2");
const inputCity = document.getElementById("singup-input-City");
const inputState = document.getElementById("singup-input-State");
const inputZip = document.getElementById("singup-input-Zip");
const btnSignup = document.getElementById("signup-btn");
let emailOk = false;
let passwordOk = false;
let repasswordOk = false;
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
  if (inputAddress2.value == !"") {
    checkAddress2Input();
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
  }
  inputFirstname.addEventListener("input", () => {
    checkFirstname();
  });
};
const checkFamlynameInput = () => {
  let errorArr = validateFamlyname(inputFamlyname.value);
  if (errorArr.length === 0) {
    inputFamlyname.classList.remove("is-invalid");
    document.getElementById("singup-alert-Famlyname").classList.add("d-none");
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
  }
  inputFamlyname.addEventListener("input", () => {
    checkFamlynameInput();
  });
};
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
  inputPhone.addEventListener("input", () => {
    checkphoneInput();
  });
};

const checkAddressInput = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{2,255}$", "g");
  if (reg.test(inputAddress.value)) {
    inputAddress.classList.remove("is-invalid");
    document.getElementById("singup-alert-Address").classList.add("d-none");
  } else {
    if (inputAddress.value.length == 0) {
      document.getElementById("singup-alert-Address").innerText =
        "Empty Address";
    } else {
      document.getElementById("singup-alert-Address").innerText =
        "Address rules";
    }
    inputAddress.classList.add("is-invalid");
    document.getElementById("singup-alert-Address").classList.remove("d-none");
  }
  inputAddress.addEventListener("input", () => {
    checkAddressInput();
  });
};

const checkAddress2Input = () => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{2,255}$", "g");
  if (reg.test(inputAddress2.value)) {
    inputAddress2.classList.remove("is-invalid");
    document.getElementById("singup-alert-Address2").classList.add("d-none");
  } else {
    if (inputAddress2.value.length == 0) {
      document.getElementById("singup-alert-Address2").innerText =
        "Empty Address2";
    } else {
      document.getElementById("singup-alert-Address2").innerText =
        "Address2 rules";
    }
    inputAddress2.classList.add("is-invalid");
    document.getElementById("singup-alert-Address2").classList.remove("d-none");
  }
  inputAddress2.addEventListener("input", () => {
    checkAddress2Input();
  });
};

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
  inputCity.addEventListener("input", () => {
    checkCityInput();
  });
};
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
  inputState.addEventListener("input", () => {
    checkStateInput();
  });
};
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
  inputZip.addEventListener("input", () => {
    checkZipInput();
  });
};

const checkIfCanEnableBtn = () =>
  (btnSignup.disabled = !(emailOk && passwordOk && repasswordOk));

btnSignup.addEventListener("click", () => {
  if (!(emailOk && passwordOk && repasswordOk)) {
    //if someone changed the html from dev tools
    return;
  }
  let users = localStorage.getItem("users");
  if (!users) {
    //the first user
    users = [
      {
        name: inputFirstname.value,
        email: inputEmail.value,
        password: inputPassword.value,
      },
    ];
    localStorage.setItem("users", JSON.stringify(users));
    /*
      JSON.stringify(users) - convert array of objects to string
      localStorage.setItem - store the json string to localStorage with 
        key users 
        and value users as json string
    */
  } else {
    //we have users
    users = JSON.parse(users); // convert from string to array of objects
    // console.log("users from localStorage", users);
    for (let user of users) {
      if (user.email === inputEmail.value) {
        //display msg - email already exists
        console.log("email already exists");
        return;
      }
    }
    //user provided new email
    users = [
      ...users,
      {
        name: inputFirstname.value,
        email: inputEmail.value,
        password: inputPassword.value,
      },
    ];
    localStorage.setItem("users", JSON.stringify(users));
  }
  handlePageChange(PAGES.LOGIN);
});
