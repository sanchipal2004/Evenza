import express from "express"
import {registerEvent} from "../controller/registrationcontroller.js"
import {verifyJWT} from "../middleware/authmiddleware.js"

const router=express.Router()

router.post("/:id",verifyJWT,registerEvent)

export default router