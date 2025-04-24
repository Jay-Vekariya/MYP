// import jwt from "jsonwebtoken";

// const verifyToken = (req, res, next) => {
//   const token = req.cookies.accessToken;

//   if (!token) {
//     return res.status(401).json({
//       statusCode: 401,
//       success: false,
//       message: "Access token missing.",
//       errorType: "unauthorized",
//     });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//     req.user = decoded; // decoded = { userId }
//     next();
//   } catch (error) {
//     return res.status(403).json({
//       statusCode: 403,
//       success: false,
//       message: "Invalid or expired token.",
//       errorType: "tokenInvalid",
//     });
//   }
// };

// export default verifyToken;
