const checkInput = (inputToCheck, alert, errorArr, inputTitle = "It") => {
  if (errorArr.length === 0) {
    //if there no any error
    inputToCheck.classList.remove("is-invalid");
    alert.innerHTML = ``;
    return true;
  } else {
    inputToCheck.classList.add("is-invalid");
    alert.innerHTML = `${inputTitle} is ${errorArr.join(" and ")}`;
    return false;
  }
};

export default checkInput;
