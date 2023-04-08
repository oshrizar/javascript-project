import getnextId from "../utils/getNextPhotoId.js";
import getDate from "../utils/getDate.js";
import getnextPhotoId from "../utils/getNextPhotoId.js";
class Photos {
  constructor(url, title, price, credit, alt, location, description) {
    this.photoId = getnextPhotoId();
    this.createat = getDate();
    this.url = url;
    this.title = title;
    this.price = price;
    this.credit = credit;
    this.alt = alt;
    this.location = location;
    this.description = description;
  }
}
export default Photos;
