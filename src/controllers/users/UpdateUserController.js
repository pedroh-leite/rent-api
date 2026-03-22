import { updateUserQuery } from "../../models/Users.js";
import { db } from "../../config/db.js";
import { getUserById } from "../../helpers/getToResponse.js";
import { successResponse } from "../../helpers/responses.js";

export let updateUser = async (req, res) => {
  const { guid } = req.params;
  const returnData = req.body;

  await db.query(updateUserQuery, [returnData, guid]);

  let returnUser = await getUserById(guid);

  return successResponse(res, returnUser);
}; 
