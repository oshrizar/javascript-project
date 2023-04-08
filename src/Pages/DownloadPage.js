import { getIdFromClick } from "../utils/initialAdminBtns.js";
/* Set varible tht will contain the picture array and boolean varible that will contain if the connected user is admin */
let token = JSON.parse(localStorage.getItem("token"));

/* set the cards gallery elemnt */
const dowloanddiv = document.getElementById("downloaddiv");
const POPUPFORUS = document.getElementById("tryPopup");

window.addEventListener("load", () => {
  if (Token.cart.length > 0) {
    createCart();
  }
});

/* update the cart by information from home page (the func is exported to home page and run from there) */
const updateCart = (newToken) => {
  Token = newToken;
  createCart();
};

//the function return HTML code for one card by the parameters
const createCardItem = (isAdmin, url, alt, title, credit, price, photoId) => {
  return `
    <div class="card p-2">
                        <img src="${url}" class="card-img-top"
                            alt="${alt}" height="300">
                        <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5 class="card-title">${title}</h5>
                             <a class="border px-2 pt-1" id="cartBtnCart-${photoId}"><i class="bi bi-cart-dash-fill"></i></a>
                            </div>
                            <p class="card-text">Picture by ${credit}.</p>
                            <ul class="list-group list-group-flush border rounded">
                                <li class="list-group-item border">Price: ${price}$</li>
                            </ul>
                            <div class="d-flex justify-content-around mt-3">
                                <a href="#" class="btn btn-success text-center" id="buyBtn-${photoId}">Buy now!</a>
                            </div>
                        </div>
                    </div>
    `;
};

//the function passes through the array and for every picture build html elemnt into the cart
const createCart = () => {
  if (Token.cart.length === 0) {
    dowloanddiv.innerHTML = `
         <div class="alert alert-info" role="alert">
                         Your shopping cart is empty... it's time to start filling!
                     </div>
             `;
  } else {
    let innerStr = "";
    for (let photo of Token.cart) {
      innerStr += createCardItem(
        userToken.isAdmin,
        photo.url,
        photo.alt,
        photo.title,
        photo.credit,
        photo.price,
        photo.picId
      );
    }
    dowloanddiv.innerHTML = innerStr;
    intialdowloadBtn();
    initBuyBtn();
  }
};

const intialdownloadtBtn = () => {
  document.querySelectorAll("[id^=cartBtnCart]").forEach((btn) => {
    btn.addEventListener("click", (ev) => {
      let choosephoto = Token.cart.find(
        (photo) => photo.photoId == getIdFromClick(ev)
      );
      removephoto(choosephoto);
    });
  });
};

const removephoto = (choosephoto) => {
  Token.cart = Token.cart.filter(
    (photo) => photo.photoId != choosephoto.photoId
  );
  localStorage.setItem("Token", JSON.stringify(Token));
  updateUsersArr(Token);
  updateCart(Token);
};

const updateUsersArr = (userToUpdate) => {
  let usersArr = JSON.parse(localStorage.getItem("users"));
  const index = usersArr.findIndex(
    (user) => user.userId === userToUpdate.userId
  );
  if (index !== -1) {
    usersArr[index] = JSON.parse(JSON.stringify(userToUpdate));
    localStorage.setItem("users", JSON.stringify(usersArr));
  }
};

const initBuyBtn = () => {
  dowloanddiv.querySelectorAll("[id^=buyBtn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      POPUPFORUS.classList.remove("d-none");

      POPUPFORUS.innerHTML = `
                <div class="text-center p-3 rounded-3">
                    <button type="button" class="btn-close mb-3" aria-label="Close" id="closeAddPopup"></button>
                    <h3>Hi!</h3>
                    <h4>It's not a real website...</h4>
                    <h5>See you in the next projects <i class="bi bi-emoji-smile-fill text-warning"></i></h5>
                </div>
            `;
    });
  });
};

export default updateCart;
