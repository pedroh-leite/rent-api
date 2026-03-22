import { createUserQuery } from "../../models/Users.js";
import { db} from "../../config/db.js";
import { successResponse } from "../../helpers/responses.js";
import { getUserByEmail } from "../../helpers/getToResponse.js";

export let createUser = async (req, res) => {
  const { name, lastname, birthDate, email, cellphone } = req.body;

  await db.query( createUserQuery, [name, lastname, birthDate, email, cellphone]);

  let returnUser = await getUserByEmail(email)

  return successResponse(res, returnUser, 201)
}
