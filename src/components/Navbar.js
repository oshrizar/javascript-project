import checkIfAdmin from "../utils/checkIfAdmin.js";
import getnextId from "../utils/getNextId.js";
import checkIfConnected from "../utils/checkifConnected.js";
import User from "../models/User.js";
let nextId;
let isAdmin;
let showPopup;
let isConnected;
let navAddNewPhotoLink;
const navBeforeLogin = document.getElementById("navBeforeLogin");
const navAfterLogin = document.getElementById("navAfterLogin");

const initializeNavbar = (showPopupFromHomepage) => {
  nextId = getnextId();
  isAdmin = checkIfAdmin();
  isConnected = checkIfConnected();
  if (isConnected) {
    navBeforeLogin.classList.add("d-none");
    navAfterLogin.classList.remove("d-none");
  }
  showPopup = showPopupFromHomepage;
  navAddNewPhotoLink = document.getElementById("nav-add-new-photo-link");
  if (!isAdmin) {
    navAddNewPhotoLink.classList.add("d-none");
  }
  navAddNewPhotoLink.addEventListener("click", () => {
    showPopup();
  });
};
export default initializeNavbar;
