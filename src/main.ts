import express from "express";
import { connectToDb, disconnectToDb } from "./utils/db";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import logger from "./utils/logger";
import { CORS_ORIGIN } from "./variables";
import userRoute from './modules/user/user.route'
import authRoute from './modules/auth/auth.route' 
import deserializeUser from "./middleware/deserializeUser";
import videoRoute from './modules/videos/videos.route'
import { PORT } from "./variables";
const app = express();



app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(express.json());
app.use(cors( {
  origin: CORS_ORIGIN,
  credentials: true,
  } ));

app.use(helmet());  

app.use(deserializeUser);

//RECORDAR HACER LAS RUTAS BIEN :D
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use('/api/video', videoRoute)


const server = app.listen(PORT, async () => {
  await connectToDb();
  logger.info(`Server running on ${PORT}`);
});


const signals = ["SIGTERM", "SIGINT"];

function gracefulShutdown(signal: string) {
  process.on(signal, async () => {
    server.close();

    await disconnectToDb();
    logger.info("bye bye");
    process.exit(0);
  });
}

for (let i = 0; i < signals.length; i++) {
  gracefulShutdown(signals[i]);
}
