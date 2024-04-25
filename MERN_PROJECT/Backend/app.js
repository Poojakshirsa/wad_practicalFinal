import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

// create an instance of express application
const app = express();

dotenv.config({path:"./config/config.env"});
//cors are use to connect front end and backend
app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["POST"],
      credentials: true,
    })
  );
  
app.use(express.json());
// use for check the datatype
app.use(express.urlencoded({ extended:true}));

app.use("/api/v1/message",messageRouter);

dbConnection();
export default app;
