import validate from "./validate.js";
const validatePassword = (value) => {
  const reg = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{1,}$",
    "g"
  );
  return validate(reg, value, 8, 255).map((err) => `password is ${err}`);
};

export default validatePassword;
