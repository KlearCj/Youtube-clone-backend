import mongoose from "mongoose";
import logger from "./logger";

//ARREGLAR VARIABLE DE ENTORNO;
const NAME = process.env.NAME || "klear"
const PASS = process.env.PASS || "dEwxEnUpYGREPl8j";


const DB_CONNECTION_STRING = `mongodb+srv://${NAME}:${PASS}@cluster0.ka3gq8j.mongodb.net/?retryWrites=true&w=majority`;

export const connectToDb = async () => {
  try {
    await mongoose.connect(DB_CONNECTION_STRING);
    logger.info("Connect to db uwu");
  } catch (e) {
    logger.error(e, "Failed to connect to db");
    process.exit(1);
  }
};

export const disconnectToDb = async () => {
  await mongoose.connection.close();
  logger.info("Disconnect from db uwu");
  return;
};
