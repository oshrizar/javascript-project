import initialDeletePopup from "../components/DeletePhotoPopup";
import initialEditPopup from "../components/EditPhotoPopup";
const getIdFromClick = (ev) => {
  let idFromId = ev.target.id.split("-"); // split the id to array
  if (!ev.target.id) {
    /*
            if press on icon then there is no id
            then we need to take the id of the parent which is btn
          */
    idFromId = ev.target.parentElement.id.split("-");
  }
  return idFromId[1];
};

//this func creates event listener for the delete buttons
let photosArr;
let deletePhotoApproval;
let editPhoto;
const createBtnEventListener = (
  photosArrFromHomePage,
  deletePhotoApprovalFromHomePage,
  editPhotoFromHomePage
) => {
  editPhoto = editPhotoFromHomePage;
  photosArr = photosArrFromHomePage;
  deletePhotoApproval = deletePhotoApprovalFromHomePage;
  let deleteBtns = document.querySelectorAll(`[id^='deleteBtn']`);
  let editBtns = document.querySelectorAll(`[id^='editBtn']`);
  //add events to new btns
  for (let btn of deleteBtns) {
    btn.addEventListener("click", deletePhoto);
  }
  for (let btn of editBtns) {
    btn.addEventListener("click", editphoto);
  }
};

//init the popup to delete popup by the clicked element id
const deletePhoto = (ev) => {
  initialDeletePopup(getIdFromClick(ev), deletePhotoApproval);
};

//init the popup to edit popup by the clicked element id
const editphoto = (ev) => {
  initialEditPopup(getIdFromClick(ev), photosArr, editPhoto);
};

export { createBtnEventListener, getIdFromClick };
