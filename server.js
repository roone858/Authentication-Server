import express from "express";
import { getAdmins, signUp } from "./src/handler/adminHandler.js";

import { checkToken } from "./src/middleware/authn.js";
const app = express();

app.use(express.json());



app.get("/all",checkToken,getAdmins)
app.post("/signup",checkToken,signUp);

app.listen(3000, () => {
  console.log("server running on port : 3000");
});
