export {};
const User = require("../../models/user.ts");
const {
  validateEmail,
  encryptPassword,
  doesUserExist,
} = require("../utils/userUtils");

exports.createAccount = async (req, res) => {
  try {
    let { email, country, phone, password } = req.body;
    let validEmail = await validateEmail(email);
    let validPassword = await encryptPassword(password);
    let findUser = await doesUserExist(email);
    if (!findUser) {
      let newUser = await new User({
        email: validEmail,
        country: country,
        phone: phone,
        password: validPassword,
      }).save();
      return res.status(200).json({
        success: true,
        newUser,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "User already exist!",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};
