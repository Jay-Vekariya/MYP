import mongoose from "mongoose";
import cors from "cors";

const connectDB = async (app) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // ✅ Apply CORS middleware early (BEFORE routes and express.json)
    app.use(
      cors({
        origin: "http://localhost:5173", // Your frontend origin
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        credentials: true, // Allow cookies, headers, etc.
      })
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
