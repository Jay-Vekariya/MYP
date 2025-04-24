import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/signup.model.js "; // Adjust path if needed

export const userLoginService = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    const error = new Error("User not found.");
    error.statusCode = 404;
    error.errorType = "userNotFound";
    throw error;
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    const error = new Error("Invalid email or password.");
    error.statusCode = 401;
    error.errorType = "invalidCredentials";
    throw error;
  }

  const payload = { userId: user._id };

  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });

  return {
    userData: user,
    accessToken,
  };
};
