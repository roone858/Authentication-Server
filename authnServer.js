import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"

import { login, refresh } from "./src/utils/authentication.js";

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(cookieParser());


app.post("/login", login);
app.post('/refresh', refresh);

// app.post("/signup", signup);

app.listen(4000, () => {
  console.log("AuthnServer running on port : 4000");
});
