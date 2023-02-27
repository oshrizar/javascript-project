import validateEmail from "../validation/validateEmail.js";
import validatePassword from "../validation/validatePassword.js";
import PAGES from "../models/pageModel.js";
import { handlePageChange } from "../routes/router.js";
const loginEmailInput = document.getElementById("login-input-Email");
const loginPasswordInput = document.getElementById("login-input-Password");
const loginBtn = document.getElementById("login-btn");

loginEmailInput.addEventListener("input", () => {
  let errorArr = validateEmail(loginEmailInput.value);
  if (errorArr.length === 0) {
    loginEmailInput.classList.remove("is-invalid");
    document.getElementById("login-alert-Email").classList.add("d-none");
  } else {
    loginEmailInput.classList.add("is-invalid");
    document.getElementById("login-alert-Email").classList.remove("d-none");
    document.getElementById("login-alert-Email").innerHTML =
      errorArr.join("<br>");
  }
});
loginPasswordInput.addEventListener("input", () => {
  let errorArr = validatePassword(loginPasswordInput.value);
  if (errorArr.length === 0) {
    loginPasswordInput.classList.remove("is-invalid");
    document.getElementById("login-alert-Password").classList.add("d-none");
  } else {
    loginPasswordInput.classList.add("is-invalid");
    document.getElementById("login-alert-Password").classList.remove("d-none");
    document.getElementById("login-alert-Password").innerHTML =
      errorArr.join("<br>");
  }
});
loginBtn.addEventListener("click", () => {
  if (validateEmail(loginEmailInput.value).length) {
    return;
  }
  if (validatePassword(loginPasswordInput.value).length) {
    return;
  }
  let users = JSON.parse(localStorage.getItem("users"));
  if (!users) {
    //users === null
    return;
  }
  let user = users.find(
    (item) =>
      item.email === loginEmailInput.value &&
      item.password === loginPasswordInput.value
  );
  if (!user) {
    document
      .getElementById("login-alert-Password-email")
      .classList.remove("d-none");
    return;
  }
  handlePageChange(PAGES.HOME);
});
