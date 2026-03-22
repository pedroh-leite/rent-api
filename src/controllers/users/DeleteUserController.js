import { deleteUserQuery } from "../../models/Users.js";
import { db } from "../../config/db.js";
import { successResponse } from "../../helpers/responses.js";
import { ServerError } from "../../helpers/errors.js";

export let deleteUser = async (req, res) => {
  const { guid } = req.params;

  let [result] = await db.query(deleteUserQuery, [guid]);

  if (result.affectedRows === 0) throw new ServerError("User not exists!");

  return successResponse(res, { affectedRows: result.affectedRows });
};
