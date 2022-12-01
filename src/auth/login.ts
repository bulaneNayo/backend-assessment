export {};
require("dotenv").config();
import bcrypt from "bcryptjs";
const User = require("../../models/user.ts");
import jwt, { JwtPayload } from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({
      email,
    });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      const accessSecretKey = process.env.ACCESS_TOKEN_SECRET;
      const refreshSecretKey = process.env.REFRESH_TOKEN_SECRET;
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          error: StatusCodes.UNAUTHORIZED,
          message: "Email or password incorrect!",
        });
      } else {
        const accessToken = jwt.sign(user.toJSON(), accessSecretKey as string, {
          expiresIn: process.env.TOKEN_VALIDITY_DURATION,
        }) as JwtPayload;
        const refreshToken = jwt.sign(
          user.toJSON(),
          refreshSecretKey as string
        ) as JwtPayload;
        res.cookie("token", accessToken, {
          httpOnly: true,
        });
        return res.json({
          accessToken: accessToken,
          refreshToken: refreshToken,
        });
      }
    } else {
      return res.status(404).json({
        success: false,
        error: StatusCodes.NOT_FOUND,
        message: "Account does not exist!",
      });
    }
  } catch (error) {
    console.log(error);
    console.log("Something went wrong");
  }
};
