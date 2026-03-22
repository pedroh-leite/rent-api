import {db} from "../../config/db.js";
import { getPropertyById } from "../../helpers/getToResponse.js";
import { successResponse } from "../../helpers/responses.js";
import { updatePropertyQuery } from "../../models/Properties.js";

export let updateProperty = async (req, res) => {
  const { guid } = req.params;
  const returnData = req.body;

  await db.query(updatePropertyQuery, [returnData, guid])

  let returnProperty = await getPropertyById(guid);

  return successResponse(res, returnProperty);

};
 