import { db } from "../config/db.js";
import { getPropertyQuery } from "../models/Properties.js";
import { getUserByEmailQuery, getUserQuery } from "../models/Users.js";

export let getUserByEmail = async (email) => {
  const [returnData] = await db.query(getUserByEmailQuery, [email])
  return returnData || null;
}

export let getUserById = async (guid) => {
  const [returnData] = await db.query(getUserQuery, [guid])
  return returnData || null;
}

export let getPropertyById = async (email) => {
  const [returnData] = await db.query(getPropertyQuery, [email])
  return returnData || null;
}