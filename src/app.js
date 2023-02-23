import PAGES from "./models/pageModel.js";
import { handlePageChange } from "./routes/router.js";

const navHomeLink = document.getElementById("nav-home-link");
const navAboutLink = document.getElementById("nav-about-link");
const navDownloadLink = document.getElementById("nav-download-link");
const navSignupLink = document.getElementById("nav-signup-link");
const navLoginLink = document.getElementById("nav-login-link");

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
