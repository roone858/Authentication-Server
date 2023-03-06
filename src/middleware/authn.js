import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const checkToken = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    next()
  } catch (err) {
    res.json({ err: err.message });
  }
};
