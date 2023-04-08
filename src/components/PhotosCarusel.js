import { createCard } from "./PhotosGallery";
let photosArr;
let caruselDiv;
const POPUPFORUS = document.getElementById("tryPopup");
const initialPhotosCarusel = (photosArrFromHomepage) => {
  caruselDiv = document.getElementById("home-page-photos-carusel");

  photosArr = photosArrFromHomepage;
  createCarusel();
};

const createItem = (active, url, title, credit, alt, photoid) => {
  return ` <div class="carousel-item ${
    active ? "active" : ""
  }" data-bs-interval="5000" id="carouselItem-${photoid}">
                            <img src="${url}"
                                class="d-block w-100" alt="${alt}">
                            <div class="carousel-caption" id="carouselItemContent-${photoid}">
                                <h5>${title}</h5>
                                <p>Picture by ${credit}</p>
                            </div>
                        </div>
    `;
};

const createCarusel = () => {
  let innerStr = "";
  let active = true;
  for (let photo of photosArr) {
    innerStr += createItem(
      active,
      photo.Url,
      photo.title,
      photo.credit,
      photo.alt,
      photo.photoid
    );
    active = false;
  }
  caruselDiv.innerHTML = innerStr;
  caruselDiv.querySelectorAll("[id^='carouselItem']").forEach((item) => {
    item.addEventListener("click", (ev) => {
      let photoToPopup = photosArr.find(
        (photo) => photo.photoid == getIdFromClick(ev)
      );
      POPUPFORUS.classList.remove("d-none");
      POPUPFORUS.innerHTML = `<div class="card p-2">
            <button type="button" class="btn-close ms-" aria-label="Close" id="closeAddPopup"></button>
                <img src="${photoToPopup.url}" class="card-img-top"
                    alt="${photoToPopup.alt}" height="300">
                    <div class="card-body">
                        <h5 class="card-title">${photoToPopup.title}</h5>
                        <p class="card-text">Picture by ${photoToPopup.credit}.</p>
                        <ul class="list-group list-group-flush border rounded">
                            <li class="list-group-item border">Price: ${photoToPopup.price}$</li>
                            <li class="list-group-item border">Taken in: ${photoToPopup.location}</li>
                            <li class="list-group-item border">Created at: ${photoToPopup.createdAt}</li>
                            <li class="list-group-item border">Description: ${photoToPopup.description}</li>
                        </ul>
                    </div>
            </div>`;
    });
  });
};

export default initialPhotosCarusel;
