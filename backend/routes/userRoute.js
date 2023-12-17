import express from "express";
import { 
  getUsers,  
  postUser,
  deleteUser
} from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.get("/users", getUsers); 
userRoute.post("/users/tambah", postUser);
userRoute.delete("/users/delete/:id", deleteUser);

export default userRoute;
