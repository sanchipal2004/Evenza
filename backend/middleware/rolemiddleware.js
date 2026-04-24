import ApiError from "../utils/ApiError.js"

export const isClub = (req, res, next) => {

    if (req.user.role !== "club") {
        throw new ApiError(403, "Only clubs can create events")
    }

    next()
}