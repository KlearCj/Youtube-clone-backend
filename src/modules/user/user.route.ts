import express from "express";
import { processRequestBody } from "zod-express-middleware";
import { UserCtrl } from "./user.controller";
import { registerUserSchema } from "./user.schema";

const router = express.Router();

router.post("/", processRequestBody(registerUserSchema.body), UserCtrl);

export default router;
