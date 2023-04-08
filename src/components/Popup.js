import Photos from "../models/Photos.js";
import getnextId from "../utils/getNextPhotoId.js";
let selectedPhoto, editPhoto;
const editPhotosPopupDisplayImg = document.getElementById(
  "editPhotosPopupDisplayImg"
);
const editPhotosPopupName = document.getElementById("editPhotosPopupName");
const editPhotosPopupDescription = document.getElementById(
  "editPhotosPopupDescription"
);
const editPhotosPopupPrice = document.getElementById("editPhotosPopupPrice");
const editPhotosPopupImg = document.getElementById("editPhotosPopupImg");
const editPhotosPopup = document.getElementById("editPhotosPopup");

const initPopup = (selectedPhotoFromHomepage, editPhotoFromHomepage) => {
  if (selectedPhotoFromHomepage) {
    selectedPhoto = selectedPhotoFromHomepage;
  } else {
    selectedPhoto = new Photos(getnextId(), "", 0, "", "");
  }
  editPhoto = editPhotoFromHomepage;
  editPhotosPopupDisplayImg.src = selectedPhoto.imgUrl;
  editPhotosPopupName.value = selectedPhoto.name;
  editPhotosPopupDescription.value = selectedPhoto.description;
  editPhotosPopupPrice.value = selectedPhoto.price;
  editPhotosPopupImg.value = selectedPhoto.imgUrl;
  showPopup();
};
const showPopup = () => {
  editPhotosPopup.classList.remove("d-none");
};
const hidePopup = () => {
  editPhotosPopup.classList.add("d-none");
};
window.addEventListener("load", () => {
  editPhotosPopup.addEventListener("click", (ev) => {
    if (
      ev.target.id !== " editPhotosPopup" &&
      ev.target.id !== "editPhotosPopupCancelBtn"
    ) {
      return;
    }
    hidePopup();
  });
  document
    .getElementById("editPhotosPopupSaveBtn")
    .addEventListener("click", () => {
      selectedPhoto.name = editPhotosPopupName.value;
      selectedPhoto.description = editPhotosPopupDescription.value;
      selectedPhoto.price = editPhotosPopupPrice.value;
      selectedPhoto.imgUrl = editPhotosPopupImg.value;
      selectedPhoto.name = editPhotosPopupName.value;
      editPhoto(selectedPhoto);
      hidePopup();
    });
  editPhotosPopupImg.addEventListener("input", () => {
    editPhotosPopupDisplayImg.src = editPhotosPopupImg.value;
  });
});
export { initPopup, showPopup, hidePopup };
