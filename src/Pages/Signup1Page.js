const inputFirstname = document.getElementById("singup-input-Firstname");
const inputFamlyname = document.getElementById("singup-input-Famlyname");
const inputEmail = document.getElementById("singup-input-Email");
const inputPassword = document.getElementById("singup-input-Password");
const inputRePassword = document.getElementById("singup-input-RePassword");
const inputPhone = document.getElementById("singup-input-Phone");
const inputAddress = document.getElementById("singup-input-Address");
const inputAddress2 = document.getElementById("singup-input-Address2");
const inputCity = document.getElementById("singup-input-City");
const inputState = document.getElementById("singup-input-State");
const inputZip = document.getElementById("singup-input-Zip");

inputFirstname.addEventListener("change", () => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{2,255}$", "g");
  if (reg.test(inputFirstname.value)) {
    inputFirstname.classList.remove("is-invalid");
    document.getElementById("singup-alert-Firstname").classList.add("d-none");
  } else {
    inputFirstname.classList.add("is-invalid");
    document
      .getElementById("singup-alert-Firstname")
      .classList.remove("d-none");
  }
});
inputFamlyname.addEventListener("change", () => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{2,255}$", "g");
  if (reg.test(inputFamlyname.value)) {
    inputFamlyname.classList.remove("is-invalid");
    document.getElementById("singup-alert-Famlyname").classList.add("d-none");
  } else {
    inputFamlyname.classList.add("is-invalid");
    document
      .getElementById("singup-alert-Famlyname")
      .classList.remove("d-none");
  }
});
inputEmail.addEventListener("change", () => {
  const reg = new RegExp(
    "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
    "ig"
  );
  if (reg.test(inputEmail.value)) {
    inputEmail.classList.remove("is-invalid");
    document.getElementById("singup-alert-Email").classList.add("d-none");
  } else {
    inputEmail.classList.add("is-invalid");
    document.getElementById("singup-alert-Email").classList.remove("d-none");
  }
});
inputPassword.addEventListener("change", () => {
  const reg = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,255}$",
    "g"
  );
  if (reg.test(inputPassword.value)) {
    inputPassword.classList.remove("is-invalid");
    document.getElementById("singup-alert-Password").classList.add("d-none");
  } else {
    inputPassword.classList.add("is-invalid");
    document.getElementById("singup-alert-Password").classList.remove("d-none");
  }
});
inputRePassword.addEventListener("change", () => {
  const reg = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,255}$",
    "g"
  );
  if (reg.test(inputRePassword.value)) {
    inputRePassword.classList.remove("is-invalid");
    document.getElementById("singup-alert-RePassword").classList.add("d-none");
  } else {
    inputRePassword.classList.add("is-invalid");
    document
      .getElementById("singup-alert-RePassword")
      .classList.remove("d-none");
  }
});
inputPhone.addEventListener("change", () => {
  const reg = new RegExp("^[0-9]{10,255}$", "g");
  if (reg.test(inputPhone.value)) {
    inputPhone.classList.remove("is-invalid");
    document.getElementById("singup-alert-Phone").classList.add("d-none");
  } else {
    inputPhone.classList.add("is-invalid");
    document.getElementById("singup-alert-Phone").classList.remove("d-none");
  }
});
inputAddress.addEventListener("change", () => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{2,255}$", "g");
  if (reg.test(inputAddress.value)) {
    inputAddress.classList.remove("is-invalid");
    document.getElementById("singup-alert-Address").classList.add("d-none");
  } else {
    inputAddress.classList.add("is-invalid");
    document.getElementById("singup-alert-Address").classList.remove("d-none");
  }
});
inputAddress2.addEventListener("change", () => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{2,255}$", "g");
  if (reg.test(inputAddress2.value)) {
    inputAddress2.classList.remove("is-invalid");
    document.getElementById("singup-alert-Address2").classList.add("d-none");
  } else {
    inputAddress2.classList.add("is-invalid");
    document.getElementById("singup-alert-Address2").classList.remove("d-none");
  }
});
inputCity.addEventListener("change", () => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{2,255}$", "g");
  if (reg.test(inputCity.value)) {
    inputCity.classList.remove("is-invalid");
    document.getElementById("singup-alert-City").classList.add("d-none");
  } else {
    inputCity.classList.add("is-invalid");
    document.getElementById("singup-alert-City").classList.remove("d-none");
  }
});
inputState.addEventListener("change", () => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{2,255}$", "g");
  if (reg.test(inputState.value)) {
    inputState.classList.remove("is-invalid");
    document.getElementById("singup-alert-State").classList.add("d-none");
  } else {
    inputState.classList.add("is-invalid");
    document.getElementById("singup-alert-State").classList.remove("d-none");
  }
});
inputZip.addEventListener("change", () => {
  const reg = new RegExp("^[0-9]{2,255}$", "g");
  if (reg.test(inputZip.value)) {
    inputZip.classList.remove("is-invalid");
    document.getElementById("singup-alert-Zip").classList.add("d-none");
  } else {
    inputZip.classList.add("is-invalid");
    document.getElementById("singup-alert-Zip").classList.remove("d-none");
  }
});
