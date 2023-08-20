require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const server = express();

server.get("/", (req, res) => {
  res.send("Validation Form");
});

const userRouter = require("./routes/user");

const connectionToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to db!");
  } catch (error) {
    console.error("Error: ", error);
  }
};
connectionToDB();

server.use(express.json());
server.use(
  cors({
    origin: ["https://deploy-mern-frontend.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
server.use("/user", cors(), userRouter.router);

server.listen(process.env.PORT);
