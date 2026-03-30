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
/*app.use((req, res) => {
  res.status(404).send(`
    <h1>Error 404 - Ruta no encontrada</h1>
    <img src="https://http.cat/404" alt="404 cat">
  `);
});*/
export default app;
