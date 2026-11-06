import express from "express";
import jwt from "jsonwebtoken";
import usuarios from "./usuarios.js";

dotenv.config();
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;

const app = express();
app.use(express.json());
