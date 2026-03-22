import jwt from "jsonwebtoken";
import { ForbiddenError, UnauthorizedError } from "../helpers/errors.js";

function validateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) throw new UnauthorizedError("Unauthorized: Authorization required");

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.PASSWORD_JWT, (err, decoded) => {
    if (err) throw new ForbiddenError("Forbidden: Denied access.");

    req.userId = decoded.id;
    next();
  });
}

export default validateToken;