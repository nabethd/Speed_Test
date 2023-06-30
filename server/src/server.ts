import express, { Request, Response } from "express";
import { scoreRouter } from "./routes/score";
import cors from "cors";
import { userRouter } from "./routes/user";
import { initMySQL } from "./mySql/init";

const app = express();
app.use(express.json());
const port = 3001;
app.use(cors());

app.use(scoreRouter);
app.use(userRouter);

app.all("*", async (req: Request, res: Response) => {
  console.log("Route Not found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const init = async () => {
  await initMySQL();
};

init();
