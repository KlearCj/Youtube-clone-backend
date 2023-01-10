import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { RegisterUserBody } from "./user.schema";
import { createUser } from "./user.service";

export const UserCtrl = async (req: Request<{},{},RegisterUserBody>, res: Response) => {
  const { username, email, password } = req.body;

  try {
    await createUser({ username, email, password });
    return res.status(StatusCodes.CREATED).send("Usuario creado :D");
  } catch (e) {
    if (e.code === 11000) return res.status(StatusCodes.CONFLICT).send("El usuario ya existe");
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
};
