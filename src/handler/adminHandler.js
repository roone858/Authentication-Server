import { adminMethods } from "../model/adminModel.js";

const store = new adminMethods();

export const getAdmins = async (req, res) => {
  const admins = await store.showAll();
  res.json(admins);
};
export const getAdmin = async (req, res) => {
    const admin = await store.show();
    res.json(admin);
  };
  

export const signUp = async (req, res) => {
  if (
    req.body.username == undefined ||
    req.body.email == undefined ||
    req.body.password == undefined
  )
    return res.json("invalid username or password");

  const user = await store.insert(req.body);
  res.json(user);
};
