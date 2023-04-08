const importPhotoData = async () => {
  let { data } = await axios.get("../src/initialData/initialdatadjson.json");
  try {
    return data;
  } catch (err) {
    return;
  }
};

const setInitialPhotoData = async () => {
  if (localStorage.getItem("photos")) {
    return;
  }
  let PhotoData = await importPhotoData();
  localStorage.setItem("photos", JSON.stringify(PhotoData));
};

setInitialPHotoData();
