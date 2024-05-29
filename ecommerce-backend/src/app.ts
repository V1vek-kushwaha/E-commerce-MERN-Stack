import express from "express";

// importing routes
import userRoutes from "./routes/user.js";
const app = express();
const port = 3000;

// using routes
app.get("/", (req, res) => {
  res.send("API Working /api/v1");
});
app.use("/api/v1/user", userRoutes);
app.listen(port, () => {
  console.log(`server is working on http://localhost:${port}`);
});
