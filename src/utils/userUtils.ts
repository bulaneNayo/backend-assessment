import bcrypt from "bcryptjs";
const User = require("../../models/user.ts");

/**
 * encrypts user password
 *
 * @param {String} password
 *
 * @returns Resolved promise with user object
 */

exports.encryptPassword = async (password) => {
  try {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (password.match(passwordPattern)) {
      const hash = await bcrypt.hash(password, 10);
      return Promise.resolve(hash);
    } else {
      return Promise.reject(
        "Password should atleast have 8 characters," +
          "One special character" +
          "One uppercase letter" +
          "One lowercase letter" +
          "and a number"
      );
    }
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

/**
 * checks if the user exists using email
 *
 * @param {String} email
 * @returns {Boolean}
 */
exports.doesUserExist = async (email) => {
  const user = await User.findOne({
    email,
  });
  return Promise.resolve(user != null);
};

/**
 * @param {String} email
 */
exports.validateEmail = (email) => {
  try {
    let emailRegex =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (emailRegex.test(email)) {
      return Promise.resolve(email);
    } else {
      return Promise.reject("Invalid email!");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
