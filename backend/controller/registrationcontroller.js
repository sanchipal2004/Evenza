import { Registration } from "../models/eventRegistration.model.js"
import { Event } from "../models/event.models.js"
import ApiResponse from "../utils/ApiResponse.js"
import ApiError from "../utils/ApiError.js"
import { asynchandler } from "../utils/asynchandler.js"

export const registerEvent = asynchandler(async (req, res) => {

    const { eventId } = req.body

    const event = await Event.findById(eventId)

    if (!event) {
        throw new ApiError(404, "Event not found")
    }

    const alreadyRegistered = await Registration.findOne({
        event: eventId,
        student: req.user._id
    })

    if (alreadyRegistered) {
        throw new ApiError(400, "Already registered")
    }

    const registration = await Registration.create({
        event: eventId,
        student: req.user._id
    })

    res.status(201).json(
        new ApiResponse(201, registration, "Registered successfully")
    )

})