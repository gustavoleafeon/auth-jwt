import express from "express";
import jwt from "jsonwebtoken";
import usuarios from "./usuarios.js";

const app = express();
const PORT = 3000;
const SECRET_KEY = "25cddf3108e515e8000864d49f5d5fddc586bdec";
app.use(express.json());
