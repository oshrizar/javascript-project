import PAGES from "../models/pageModel.js";
const HOMEPAGELINK = document.getElementById(PAGES.HOME);
const ABOUTPAGELINK = document.getElementById(PAGES.ABOUT);
const DOWNLOADPAGELINK = document.getElementById(PAGES.DOWNLOAD);
const SIGNUPPAGELINK = document.getElementById(PAGES.SIGNUP);
const LOGINPAGELINK = document.getElementById(PAGES.LOGIN);

function handlePageChange(toPageDisplay) {
  /* HIDE ALL PAGES */
  HOMEPAGELINK.classList.remove("d-block");
  ABOUTPAGELINK.classList.remove("d-block");
  DOWNLOADPAGELINK.classList.remove("d-block");
  SIGNUPPAGELINK.classList.remove("d-block");
  LOGINPAGELINK.classList.remove("d-block");
  HOMEPAGELINK.classList.add("d-none");
  ABOUTPAGELINK.classList.add("d-none");
  DOWNLOADPAGELINK.classList.add("d-none");
  SIGNUPPAGELINK.classList.add("d-none");
  LOGINPAGELINK.classList.add("d-none");

  switch (toPageDisplay) {
    case PAGES.HOME:
      HOMEPAGELINK.classList.remove("d-none");
      HOMEPAGELINK.classList.add("d-block");
      break;
    case PAGES.ABOUT:
      ABOUTPAGELINK.classList.remove("d-none");
      ABOUTPAGELINK.classList.add("d-block");
      break;
    case PAGES.DOWNLOAD:
      DOWNLOADPAGELINK.classList.remove("d-none");
      DOWNLOADPAGELINK.classList.add("d-block");
      break;
    case PAGES.SIGNUP:
      SIGNUPPAGELINK.classList.remove("d-none");
      SIGNUPPAGELINK.classList.add("d-block");
      break;
    case PAGES.LOGIN:
      LOGINPAGELINK.classList.remove("d-none");
      LOGINPAGELINK.classList.add("d-block");
      break;
  }
}
export { handlePageChange };
