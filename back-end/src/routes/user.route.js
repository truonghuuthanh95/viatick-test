import { Router } from "express";
const router = Router();
import {
  getAll,
  signUp,
  getById,
  SignIn,
  search,
  del,
  update,
  get,
} from "../controllers/user.controller";
import { signUpSchema, loginSchema } from "../utils/schemas/index";
import validateDto from "../middlewares/validateDto";

//this is authencation middelware
import auth, {
  authAdmin,
  authCustomer,
  authEmployee,
} from "../middlewares/auth";

router.get("/getAll", getAll);

router.get("/get", get);

router.post("/signUp", validateDto(signUpSchema), signUp);

router.get("/getById", getById);

router.post("/signIn", validateDto(loginSchema), SignIn);

router.get("/search", search);

router.delete("/delete", del);

router.put("/update", update);

export default router;
