
import jwt from "jsonwebtoken";

export const verifyJWT = (req, res, next) => {

  const authHeader = req.headers.authorization;

  console.log("Authorization Header:", authHeader);

  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  console.log("TOKEN:", token);

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = decoded;
    next();

  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Invalid token" });
  }
};