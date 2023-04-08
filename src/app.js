import PAGES from "./models/pageModel.js";
import { handlePageChange } from "./routes/router.js";
import "./initialData/initialData.js";
import "./Pages/Signup1Page.js";
import "./Pages/LoginPage.js";
import "./Pages/HomePage.js";
import "./Pages/ProfilePage.js";
import "./Pages/DownloadPage.js";
import getNextUserId from "./utils/getNextUserId.js";
import { showNewPopup } from "./Pages/HomePage.js";
import initializeNavbar from "./components/NavBar.js";
import checkIfConnected from "./utils/checkifConnected.js";
const navHomeLink = document.getElementById("nav-home-link");
const navAboutLink = document.getElementById("nav-about-link");
const navDownloadLink = document.getElementById("nav-download-link");
const navSignupLink = document.getElementById("nav-signup-link");
const navLoginLink = document.getElementById("nav-login-link");
const navEditProfilePage = document.getElementById("nav-edit-profile-page");
const navLogout = document.getElementById("nav-logout");

window.addEventListener("load", () => {
  initializeNavbar(showNewPopup);
  if (checkIfConnected()) {
    let user = localStorage.getItem("token");
    user = JSON.parse(user);
    navEditProfilePage.innerText = user.name;
  }
});

navHomeLink.addEventListener("click", function () {
  handlePageChange(PAGES.HOME);
});
navAboutLink.addEventListener("click", function () {
  handlePageChange(PAGES.ABOUT);
});

navDownloadLink.addEventListener("click", function () {
  handlePageChange(PAGES.DOWNLOAD);
});
navSignupLink.addEventListener("click", function () {
  handlePageChange(PAGES.SIGNUP);
});
navLoginLink.addEventListener("click", function () {
  handlePageChange(PAGES.LOGIN);
});
navEditProfilePage.addEventListener("click", function () {
  handlePageChange(PAGES.PROFILE);
});
navLogout.addEventListener("click", () => {
  localStorage.removeItem("token");
  location.reload();
});
