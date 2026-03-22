import { Router } from "express";
import token from "../controllers/token/token.js";
import validateToken from "../middlewares/validateToken.js";
import { createUser,getUser, deleteUser , updateUser } from "../controllers/users/index.js";
import { getProperty, deleteProperty, updateProperty, createProperty } from "../controllers/properties/index.js";
const router = Router();

router.get("/", (req, res) => {
  res.send();
});

// ---------------------------- TOKEN ----------------------------

router.post("/token", token)

// ---------------------------- USERS ----------------------------

router.get("/users/:guid", validateToken, getUser);

router.post("/users", validateToken, createUser);

router.patch("/users/:guid", validateToken, updateUser);

router.delete("/users/:guid", validateToken, deleteUser);

// -------------------------- PROPERTIES --------------------------

router.get("/properties/:guid", validateToken, getProperty);

router.post("/properties", validateToken, createProperty);

router.patch("/properties/:guid", validateToken, updateProperty);

router.delete("/properties/:guid", validateToken, deleteProperty);
 
export default router;   