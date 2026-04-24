import { Event } from "../models/event.models.js"
import { asynchandler } from "../utils/asynchandler.js"
import ApiResponse from "../utils/ApiResponse.js"
import ApiError from "../utils/ApiError.js"


// CREATE EVENT (Club only)
export const createEvent = asynchandler(async (req, res) => {
console.log("BODY:", req.body);

    const { title, description, location, date, time, googleFormLink  } = req.body
    const bannerPath = req.file ? `uploads/${req.file.filename}` : null;

    if (!title || !location || !date || !time) {
        throw new ApiError(400, "Required fields missing")
    }
    

    // Only club can create event
    if (req.user.role !== "club") {
        throw new ApiError(403, "Only clubs can create events")
    }

    const event = await Event.create({
        title,
        description,
        location,
        date,
        time,
        googleFormLink ,
        image: bannerPath, 
        club: req.user.id
    })

    res.status(201).json(
        new ApiResponse(201, event, "Event created successfully")
    )
})


// GET ALL EVENTS
export const getEvents = asynchandler(async (req, res) => {

    const events = await Event.find()
        .populate("club", "fullName email role")
        .sort({ date: 1 })

    res.status(200).json(
        new ApiResponse(200, events, "Events fetched successfully")
    )
})


// GET UPCOMING EVENTS
// UPDATE EVENT
export const updateEvent = asynchandler(async (req, res) => {

    const event = await Event.findById(req.params.id)

    if (!event) {
        throw new ApiError(404, "Event not found")
    }

    // Only event creator club can edit
    if (event.club.toString() !== req.user.id) {
        throw new ApiError(403, "Not authorized")
    }

    const updatedEvent = await Event.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )

    res.status(200).json(
        new ApiResponse(200, updatedEvent, "Event updated successfully")
    )

})


// GET PAST EVENTS
export const pastEvents = asynchandler(async (req, res) => {

    const events = await Event.find({
        date: { $lt: new Date() }
    })
        .populate("club", "name")
        .sort({ date: -1 })

    res.status(200).json(
        new ApiResponse(200, events, "Past events fetched")
    )
})


// GET SINGLE EVENT
export const getSingleEvent = asynchandler(async (req, res) => {

    const event = await Event.findById(req.params.id)
        .populate("club", "name email")

    if (!event) {
        throw new ApiError(404, "Event not found")
    }

    res.status(200).json(
        new ApiResponse(200, event, "Event fetched successfully")
    )
})

// GET DASHBOARD STATS
export const getEventStats = asynchandler(async (req, res) => {

    const totalEvents = await Event.countDocuments()

    const upcomingEvents = await Event.countDocuments({
        date: { $gte: new Date() }
    })

    const pastEvents = await Event.countDocuments({
        date: { $lt: new Date() }
    })

    const registrations = await Event.aggregate([
        {
            $group: {
                _id: null,
                total: { $sum: "$registrations" }
            }
        }
    ])

    res.status(200).json(
        new ApiResponse(200, {
            totalEvents,
            upcomingEvents,
            pastEvents,
            registrations: registrations[0]?.total || 0
        }, "Dashboard stats fetched")
    )

})

// DELETE EVENT
export const deleteEvent = asynchandler(async (req, res) => {

    const event = await Event.findById(req.params.id)

    if (!event) {
        throw new ApiError(404, "Event not found")
    }

    if (event.club.toString() !== req.user.id) {
        throw new ApiError(403, "Not authorized")
    }

    await event.deleteOne()

    res.status(200).json(
        new ApiResponse(200, null, "Event deleted successfully")
    )

})


export const upcomingEvents = async (req,res)=>{
  try{

    const events = await Event.find({
      date: { $gt: new Date() }
    }).sort({ date: 1 })

    res.status(200).json({
      success:true,
      data:events
    })

  }catch(err){
    res.status(500).json({
      success:false,
      message:err.message
    })
  }
}