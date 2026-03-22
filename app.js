import express from "express";
import router from "./src/routes/routes.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/", router);

app.use((err, req, res, next) => {
  let status = err.statusCode || 500;

  return res.status(status).json({
    success: false,
    error: {
      message: err.message || "Internal Server error",
      code: status,
    },
  });
});

app.listen(port, () => {
  console.log("App running at the port 3000");
});