import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from "./Routes/AuthRoute.js";

// PORT=5000
// MONGO_DB=mongodb+srv://admin:admin@social.okuhgw8.mongodb.net/SocialMedia_Youtube?retryWrites=true&w=majority

//Routes
const app = express();

//Middlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at http://localhost:${5000}`)
    )
  )
  .catch((error) => console.log(error));

//all routes
app.use("/auth", AuthRoute);
