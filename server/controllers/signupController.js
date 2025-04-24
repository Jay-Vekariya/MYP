import userSignupService from "../services/signupService.js";

const signupController = async (req, res) => {
  try {
    const { email, firstName, lastName, password } = req.body;

    const { statusCode, message, errorType, Success } = await userSignupService(
      {
        email,
        firstName,
        lastName,
        password,
      }
    );

    if (!Success) {
      return res
        .status(statusCode || 400)
        .json({ statusCode, Success, message, errorType });
    }

    res.status(201).json({ statusCode, Success, message, errorType });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export default signupController;
