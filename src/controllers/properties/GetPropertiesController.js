import { db } from "../../config/db.js";
import { asyncHandler, successResponse } from "../../helpers/responses.js";
import { getPropertyQuery } from "../../models/Properties.js";
import {NotFoundError} from "../../helpers/errors.js"

export let getProperty = asyncHandler( async (req, res) => {
  const { guid } = req.params;

  let [result] = await db.query(getPropertyQuery, [guid]);

  if (result.length === 0) throw new NotFoundError("Property not found!")

  return successResponse(res, result[0]);
})