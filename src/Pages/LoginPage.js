import validateEmail from "../validation/validateEmail.js";
import validatePassword from "../validation/validatePassword.js";
import PAGES from "../models/pageModel.js";
import checkInput from "../utils/checkInput.js";
import { handlePageChange } from "../routes/router.js";
const loginEmailInput = document.getElementById("login-input-Email");
const loginPasswordInput = document.getElementById("login-input-Password");
const loginBtn = document.getElementById("login-btn");
const loginCancel = document.getElementById("login-cancel");
const loginFrom = document.getElementById("login-from");
const loginPasswordMsg = document.getElementById("login-alert-Password");
const loginEmailMsg = document.getElementById("login-alert-Email");
const loginBtnMsg = document.getElementById("login-alert-Password-email");
const linkToSignupPage = document.getElementById("login-move-signup");
let emailOk, passwordOk;
linkToSignupPage.addEventListener("click", () => {
  handlePageChange(PAGES.SIGNUP);
});
const checkIfCanAbledBtn = () => {
  loginBtn.disabled = !(emailOk && passwordOk);
};
window.addEventListener("load", () => {
  if (loginPasswordInput.value) {
    passwordOk = checkInput(
      loginPasswordInput,
      loginPasswordMsg,
      validatePassword(loginPasswordInput.value),
      "password"
    );
  }
  if (loginEmailInput.value) {
    emailOk = checkInput(
      loginEmailInput,
      loginEmailMsg,
      validateEmail(loginEmailInput.value),
      "email"
    );
  }
  checkIfCanAbledBtn();
});
loginEmailInput.addEventListener("input", () => {
  emailOk = checkInput(
    loginEmailInput,
    loginEmailMsg,
    validateEmail(loginEmailInput.value),
    "Email"
  );
  checkIfCanAbledBtn();
});
loginPasswordInput.addEventListener("input", () => {
  passwordOk = checkInput(
    loginPasswordInput,
    loginPasswordMsg,
    validatePassword(loginPasswordInput.value),
    "Password"
  );
  checkIfCanAbledBtn();
});
loginCancel.addEventListener("click", () => {
  location.reload;
});
loginBtn.addEventListener("click", () => {
  if (!(emailOk && passwordOk)) {
    return;
  }

  let usersArr = JSON.parse(localStorage.getItem("users"));
  let token;
  usersArr.forEach((user) => {
    if (
      user.email === loginEmailInput.value &&
      user.password === loginPasswordInput.value
    ) {
      token = { ...user };
      handlePageChange(PAGES.HOME);
    }
  });
  if (!token) {
    loginBtnMsg.innerHTML = `Email or password not found`;
    loginFrom.classList.add("border");
    loginFrom.classList.add("border-danger");
    loginFrom.classList.add("bg-danger-subtle");
  } else {
    localStorage.setItem("token", JSON.stringify(token));
    location.reload;
  }
});
