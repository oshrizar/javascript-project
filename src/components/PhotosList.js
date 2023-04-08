let photosArr;
let listDiv;
let isAdmin;
let deletePhotos;
let showPopup;
const initialPhotosList = (
  photosArrfromHomepage,
  isAdminParm,
  deletePhotosfromHomepage,
  showPopupfromHomepage
) => {
  listDiv = document.getElementById("home-page-photos-list");
  isAdmin = isAdminParm;

  deletePhotos = deletePhotosfromHomepage;
  showPopup = showPopupfromHomepage;
  updateList(photosArrfromHomepage);
};
const updateList = (photosArrfromHomepage) => {
  photosArr = photosArrfromHomepage;
  createList();
};

const createRow = (name, description, img, price, id) => {
  const adminBtns = `    <button type="button" class="btn btn-warning w-100" id="photosListEditBtn-${id}">
                    <i class="bi bi-pencil-square"></i>Edit
                    </button>
                    <button type="button" class="btn btn-danger w-100" id="photosListDeleteBtn-${id}"><i class="bi bi-trash"></i>Delete</button>`;
  return ` <li class="list-group-item">
    <div class="row">
        <div class="col-md-2">
        <img src="${img}" class="img-fluid" alt="${name}" />
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
            ${price}
            </h6>
            <p class="card-text">
            ${description}
            </p>
        </div>
        </div>
        <div class="col-md-2">
        <button type="button" class="btn btn-success w-100" id="buy-list>
          <i class="bi bi-currency-dollar"></i> Buy now
        </button>
        ${isAdmin ? adminBtns : ""}
        </div>
    </div>
    </li> `;
};
const getIdFromClick = (ev) => {
  let idFromId = ev.target.id.split("-"); // split the id to array
  if (!ev.target.id) {
    idFromId = ev.target.parentElement.id.split("-");
  }
  return idFromId[1];
};

const handleDeleteBtnClick = (ev) => {
  deletePhotos(getIdFromClick(ev));
};

const handleEditBtnClick = (ev) => {
  showPopup(getIdFromClick(ev));
};
const clearEventListeners = (idKeyword, handleFunction) => {
  let btnsBefore = document.querySelectorAll(`[id^='${idKeyword}-']`);
  for (let btn of btnsBefore) {
    btn.removeEventListener("click", handleFunction);
  }
};
const createList = () => {
  let innerStr = "";
  clearEventListeners("photosListDeleteBtn", handleDeleteBtnClick);
  clearEventListeners("photosListEditBtn", handleEditBtnClick);

  for (let photo of photosArr) {
    innerStr += createRow(
      photo.name,
      photo.description,

      photo.imgUrl,
      photo.price,
      photo.id
    );
  }
  listDiv.innerHTML = innerStr;
  createBtnEventListener("photosListDeleteBtn", handleDeleteBtnClick);
  createBtnEventListener("photosListEditBtn", handleEditBtnClick);
};
const createBtnEventListener = (idKeyword, handleFunction) => {
  let btns = document.querySelectorAll(`[id^='${idKeyword}-']`);
  for (let btn of btns) {
    btn.addEventListener("click", handleFunction);
  }
};
export { initialPhotosList, updateList };
