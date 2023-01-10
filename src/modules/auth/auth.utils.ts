import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "GATO";

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
