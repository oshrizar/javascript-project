let photosArr;
let galleryDiv;
let isAdmin;
let deletePhotos;
let showPopup;
const initialPhotosGallery = (
  photosArrFromHomepage,
  isAdminParm,
  deletePhotosfromHomepage,
  showPopupfromHomepage
) => {
  galleryDiv = document.getElementById("home-page-photos-gallery");
  isAdmin = isAdminParm;
  deletePhotos = deletePhotosfromHomepage;
  showPopup = showPopupfromHomepage;
  updateGallery(photosArrFromHomepage);
};
const updateGallery = (photosArrFromHomepage) => {
  photosArr = photosArrFromHomepage;
  createGallery(photosArrFromHomepage);
};
const createCard = (name, description, img, price, id) => {
  const adminBtns = `  <button type="button" class="btn btn-warning"id="photosGaleryEditBtn-${id}"><i class="bi bi-pencil-square"></i>
                      Edit
                    </button>
                    <button type="button" class="btn btn-danger" id="photosGaleryDeleteBtn-${id}"><i class="bi bi-trash"></i>Delete</button>`;
  return ` <div class="col">
                <div class="card" >
                  <img
                    src="${img}"
                    class="card-img-top"
                    alt="${name}"
                  />
                  <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">
                      ${description}
                    </p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">${price}</li>
                    <li class="list-group-item">A second item</li>
                   
                  </ul>
                  <div class="card-body">
                    <button type="button" class="btn btn-success"><i class="bi bi-currency-dollar"></i>
                      Buy
                    </button>
                     ${isAdmin ? adminBtns : ""}
                  
                  </div>
                </div>
              </div>`;
};

const createGallery = () => {
  let innerStr = "";
  for (let photo of photosArr) {
    innerStr += createCard(
      photo.name,
      photo.description,
      photo.imgUrl,
      photo.price
    );
  }
  galleryDiv.innerHTML = innerStr;
};

export default initialPhotosGallery;
