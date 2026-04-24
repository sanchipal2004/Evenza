import express from "express"
import {createEvent,getEvents,upcomingEvents, pastEvents,getSingleEvent,updateEvent,deleteEvent,getEventStats} from "../controller/eventcontroller.js"
import {verifyJWT} from "../middleware/authmiddleware.js"
import upload from "../middleware/upload.js"

const router=express.Router()

router.post("/create",verifyJWT,upload.single("banner"),createEvent)

router.get("/",getEvents)


router.get("/upcoming",upcomingEvents)

router.get("/past", pastEvents)

router.get("/stats", getEventStats)

router.get("/:id", getSingleEvent)

router.put("/:id", verifyJWT, updateEvent)

router.delete("/:id", verifyJWT, deleteEvent)

export default router