import bcrypt from 'bcrypt';
import User from '../models/signup.model.js';

const userSignupService = async (userSignupData) => {
  try {
    if (!userSignupData) {
      throw new Error("User signup data is missing or invalid.");
    }

    const { email, firstName, lastName, password } = userSignupData;

    if (!email || !firstName || !lastName || !password) {
      throw new Error("Missing required fields for user signup.");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return {
        statusCode: 400,
        Success: false,
        message: "Email already exists. Try using a different one.",
        errorType: "emailInUse",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    if (!hashedPassword || hashedPassword === password) {
      throw new Error("Password hashing failed.");
    }

    const newUser = new User({
      email,
      firstName,
      lastName,
      password: hashedPassword,
    });

    await newUser.save();

    return {
      statusCode: 201,
      Success: true,
      message: "User registered successfully.",
      errorType: "registerSuccess",
    };

  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw new Error(`Error in userSignupService: ${error.message}`);
  }
};

export default userSignupService;
