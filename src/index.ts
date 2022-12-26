//!'Esto se va quedar pendiente, porque fue un pedote poder hacer el tts, con el micro y hacer posible los comandos en node,
//!mejor opte por python mas rapido y me complico menos la existencia
import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";
import { router } from "./routes/player.js";
const app = express();

const PORT = process.env.PORT || 3004;

app.use(morgan("dev"));
app.use(cors());

app.use(router);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
