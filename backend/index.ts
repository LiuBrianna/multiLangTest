import express, { Express } from "express";
import cors from "cors";
import path from "path";

const app: Express = express();

app.use(cors());
app.use("/languages", express.static(path.join(__dirname, "languages")));

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
