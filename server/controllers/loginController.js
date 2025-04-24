import { userLoginService } from "../services/loginService.js";

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
        errorType: "validationError",
      });
    }

    const { patientData, accessToken } = await userLoginService(
      email,
      password
    );

    res
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "development",
        sameSite: "Strict",
        maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
      })
      .status(200)
      .json({
        statusCode: 200,
        success: true,
        message: "Login successful",
        errorType: "loginSuccess",
        user: patientData,
      });
  } catch (error) {
    console.error("Login error:", error);
    res.status(error.statusCode || 500).json({
      statusCode: error.statusCode || 500,
      success: false,
      message: error.message,
      errorType: error.errorType || "serverError",
    });
  }
};

export default loginController;
