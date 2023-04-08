import getNextUserId from "../utils/getNextUserId.js";
class User {
  constructor(
    firstname,
    famlyname,
    address,
    email,
    password,
    repassword,
    phone,
    isAdmin
  ) {
    this.id = getNextUserId;
    this.firstname = firstname;
    this.famlyname = famlyname;
    this.address = address;
    this.email = email;
    this.password = password;
    this.repassword = repassword;
    this.phone = phone;
    this.isAdmin = isAdmin;
    this.cart = [];
  }
  get FullName() {
    return `${this.firstname}${this.famlyname}`;
  }
}
export default User;
