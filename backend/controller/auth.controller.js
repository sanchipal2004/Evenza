import { User } from "../models/user.models.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import { asynchandler } from "../utils/asynchandler.js"
import ApiResponse from "../utils/ApiResponse.js"
import ApiError from "../utils/ApiError.js"


// REGISTER USER
export const registerUser = asynchandler(async (req, res) => {

    const { fullName, email, password, role } = req.body

    if (!fullName || !email || !password) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({ email })

    if (existedUser) {
        throw new ApiError(409, "User already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        fullName,
        email,
        password: hashedPassword,
        role
    })

    const createdUser = await User.findById(user._id).select("-password")

    res.status(201).json(
        new ApiResponse(201, createdUser, "User registered successfully")
    )
})


// LOGIN USER
export const loginUser = asynchandler(async (req, res) => {

    const { email, password } = req.body

    if (!email || !password) {
        throw new ApiError(400, "Email and password are required")
    }

    const user = await User.findOne({ email })

    if (!user) {
        throw new ApiError(404, "User not found")
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if (!isPasswordCorrect) {
        throw new ApiError(401, "Invalid credentials")
    }

    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "7d" }
    )

    const loggedInUser = await User.findById(user._id).select("-password")

    res.status(200).json(
        new ApiResponse(
            200,
            {
                user: loggedInUser,
                token
            },
            "Login successful"
        )
    )
})

export const getCurrentUser = asynchandler(async(req, res) => {


    const user = await User.findById(req.user._id).select("-password");

    res.status(200).json(new ApiResponse(200,user,"successfuly fetch user"))
  })
