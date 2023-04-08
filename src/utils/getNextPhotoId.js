const getnextPhotoId = () => {
  let nextPhotoId = localStorage.getItem("nextPhotoId");
  if (!nextPhotoId) {
    nextPhotoId = 3;
  }
  nextPhotoId = +nextPhotoId;
  localStorage.setItem("nextPhotoId", nextPhotoId + 1 + "");
};

export default getnextPhotoId;
