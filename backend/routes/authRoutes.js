import express from "express"
import {registerUser,loginUser, getCurrentUser} from "../controller/auth.controller.js"
import { verifyJWT } from "../middleware/authmiddleware.js"

const router=express.Router()

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/me",verifyJWT,getCurrentUser)

export default router