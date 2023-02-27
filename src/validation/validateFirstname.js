import validate from "./validate.js";
const validateFirstname = (value) => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{1,}$", "g");

  return validate(reg, value, 5, 10).map((err) => `first name is ${err}`);
};
export default validateFirstname;
