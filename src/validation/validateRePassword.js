import validate from "./validate.js";
const validateRePassword = (value) => {
  const reg = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{1,}$",
    "g"
  );
  return validate(reg, value, 8, 255).map((err) => `Repassword is ${err}`);
};

export default validateRePassword;
