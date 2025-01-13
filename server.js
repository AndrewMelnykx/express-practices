import express from "express";
import path from "path";
import dotenv from "dotenv";
import posts from "./routes/posts.js";

// Configure environment variables
dotenv.config();
const port = process.env.PORT || 8000;

const app = express();

//Body parser middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/posts", posts);

//Setup static folder

// app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("Server is running on port 8000");
});
