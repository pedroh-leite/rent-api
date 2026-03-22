import { response } from "express";
import { db } from "../../config/db.js";
import { createPropertyQuery } from "../../models/Properties.js";
import { successResponse } from "../../helpers/responses.js";

export let createProperty = async (req, res) => {
  const {
    email,
    address,
    number,
    complement,
    neighborhood,
    city,
    country,
    cep,
    number_of_rooms,
  } = req.body;

  let [result] = await db.query(createPropertyQuery, [
    email,
    address,
    number,
    complement,
    neighborhood,
    city,
    country,
    cep,
    number_of_rooms,
  ]);

  return successResponse(res, { affectedRows: result.affectedRows });
};
