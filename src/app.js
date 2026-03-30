import express from "express";
import cors from "cors";
import { horaActual, fechaActual } from "./time.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenido");
});

app.get("/hora", (req, res) => {
  res.send(horaActual());
});

app.get("/fechacompleta", (req, res) => {
  res.send(fechaActual());
});

export default app;