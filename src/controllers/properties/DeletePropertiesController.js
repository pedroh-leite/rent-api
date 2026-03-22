import { db } from "../../config/db.js";
import { ServerError } from "../../helpers/errors.js";
import { successResponse } from "../../helpers/responses.js";
import { deletePropertyQuery } from "../../models/Properties.js";

export let  deleteProperty = async(req, res) => {
  const { guid } = req.params;

  let [result] = await db.query(deletePropertyQuery, [guid]);
  
  if(result.affectedRows === 0) throw new ServerError("Property not exists!")

  return successResponse(res, {affectedRows: result.affectedRows});
}
