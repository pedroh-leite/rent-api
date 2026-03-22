import { getUserQuery } from "../../models/Users.js";
import { db } from "../../config/db.js";
import {
  asyncHandler,
  errorResponse,
  successResponse,
} from "../../helpers/responses.js";
import { NotFoundError } from "../../helpers/errors.js";

export let getUser = asyncHandler(async (req, res) => {
  const { guid } = req.params;

  const [result] = await db.query(getUserQuery, [guid]);

  if (result.length === 0) throw new NotFoundError("User not found!");

  return successResponse(res, result[0]);
});
