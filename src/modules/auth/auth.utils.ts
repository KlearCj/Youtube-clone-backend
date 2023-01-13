import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../variables";

export const signJwt = (payload: string | Buffer | object) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
};

export const verifyJwt = (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (e) {
    return null;
  }
};
