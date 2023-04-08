import Photos from "../models/Photos.js";
import {
  initialPhotosGallery,
  updateGallery,
} from "../components/PhotosGallery.js";
import { initialPhotosList } from "../components/PhotosList.js";
import { initialPhotosCarusel } from "../components/PhotosCarusel.js";
import { initPopup } from "../components/Popup.js";
import checkIfAdmin from "../utils/checkIfAdmin.js";
const photosCarusel = document.getElementById("photoCarusel");
const photosGallery = document.getElementById("photoGallery");
const photosList = document.getElementById("photoList");
const POPUPFORUS = document.getElementById("tryPopup");
let photosArr = JSON.parse(localStorage.getItem("photos"));
let newPhotosArr;
let isAdmin;
window.addEventListener("load", () => {
  isAdmin = checkIfAdmin();

  isAdmin = checkIfAdmin();

  initialPhotosGallery(photosArr, isAdmin);
  initialPhotosList(photosArr, isAdmin);
  initialPhotosCarusel(photosArr);
  createBtnEventListener(photosArr, deletePhotoApproval, editPhoto);
  initialBuyBtn();
});

const displayToDispaly = (displayNow) => {
  if (displayNow === photosGallery || displayNow === photosList) {
    document.getElementById("UpandDownBtns").style.height = "1.87rem";
  } else {
    document.getElementById("UpandDownBtns").style.height = "0";
  }
  let seeArr = document.querySelectorAll(".have");
  for (let display of seeArr) {
    if (display === displayNow) {
      display.classList.add("d-block");
      display.classList.remove("d-none");
    } else {
      display.classList.remove("d-block");
      display.classList.add("d-none");
    }
  }
  document
    .getElementById("homeDisplayCarusel")
    .addEventListener("click", () => {
      displayToDispaly(photosCarusel);
    });
  document
    .getElementById("homeDisplayGallery")
    .addEventListener("click", () => {
      displayToDispaly(photosGallery);
    });
  document.getElementById("homeDisplayList").addEventListener("click", () => {
    displayToDispaly(photosList);
  });
  const updateDisplay = (newPhotosArrParm) => {
    initialPhotosCarusel(newPhotosArrParm);
    initialPhotosGallery(newPhotosArrParm, isAdmin);
    initialPhotosList(newPhotosArrParm, isAdmin);
    createBtnEventListener(photosArr, deletePhotoApproval, editPhoto);
    initialBuyBtn();
  };
  const sortPhotos = (asc = true) => {
    newPhotosArr = [...photosArr];
    if (asc) {
      newPhotosArr.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      newPhotosArr.sort((a, b) => b.title.localeCompare(a.title));
    }
    updateDisplay(newPhotosArr);
  };
  document.getElementById("homeDisplayDown").addEventListener("click", () => {
    sortPhotos();
  });
  document.getElementById("homeDisplayUp").addEventListener("click", () => {
    sortPhotos(false);
  });
  document
    .getElementById("homeDisplaySearch")
    .addEventListener("input", (ev) => {
      const newPhotosArr = photosArr.filter((photo) =>
        photo.title.toLowerCase().includes(ev.target.value.toLowerCase())
      );
      updateDisplays(newPhotosArr);
    });
  const deletePhotoApproval = (idToRemove) =>
    (photosArr = photosArr.filter((item) => item.photoId != idToRemove));
  localStorage.setItem("photos", JSON.stringify(photosArr));
  updateDisplay(photosArr);
};
const editPhoto = (photoToEdit) => {
  for (let i = 0; i < photosArr.length; i++) {
    if (photosArr[i].photoId === photoToEdit.photoId) {
      photosArr[i] = JSON.parse(JSON.stringify(photoToEdit));
      break;
    }
  }
  localStorage.setItem("photos", JSON.stringify(photosArr));
  updateDisplays(photosArr);
};
const initialBuyBtn = () => {
  document.querySelectorAll("id^buyBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      POPUPFORUS.classList.remove("d-none");
      POPUPFORUS.innerHTML = `
                <div class="text-center p-3 rounded-3">
                    <button type="button" class="btn-close mb-3" aria-label="Close" id="closeAddPopup"></button>
                    <h3>Hello!</h3>
                    <h4>this website is project you cant buy</h4>
                    <h5>i hope you enjoy the project <i class="bi bi-emoji-smile-fill text-warning"></i></h5>
                </div>
            `;
    });
  });
};
