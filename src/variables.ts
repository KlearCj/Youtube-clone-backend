import * as dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3001;
const CORS_ORIGIN= process.env.CORS_ORIGIN ||"http://localhost:3000"
const JWT_SECRET = process.env.JWT_SECRET
const NAME = process.env.NAME;
const PASS = process.env.PASS;

export {PORT, CORS_ORIGIN, NAME, PASS, JWT_SECRET}
