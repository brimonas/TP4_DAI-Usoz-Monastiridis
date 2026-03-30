import express from "express";
import cors from "cors";
import { horaActual, FehcaActual } from "./time.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenido");
});

app.get("/horaActual", (req, res) => {
  res.send(horaActual());
});

app.get("/FehcaActual", (req, res) => {
  res.send(FehcaActual());
});

export default app;