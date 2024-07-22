import { Router } from "express";
import {
  addProduct,
  checkProduct,
  getProducts,
} from "../controllers/product.controller";
import checkLogin from "../middlewares/checkLogin.middleware";
import checkAdminRole from "../middlewares/checkAdmidRole";

const router = Router();

router.post("/add", checkLogin, checkAdminRole, addProduct);
router.get("/", getProducts);
router.get("/:id", checkProduct);

export default router;
