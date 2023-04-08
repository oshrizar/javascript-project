import validate from "./validate.js";
const validateFamlyname = (value) => {
  const reg = new RegExp("^[A-Z][a-z0-9-s]{1,}$", "g");

  return validate(reg, value, 5, 255).map((err) => `famly name is ${err}`);
};
export default validateFamlyname;
