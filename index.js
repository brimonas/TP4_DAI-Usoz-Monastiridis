import app from "./src/app.js";
import cors from "cors";

app.use(cors());

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});