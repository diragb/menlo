import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import mongoose from "mongoose";
import "./lib/env";

const app: Application = express();
const PORT: any = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const ATLAS_URI: string = process.env.ATLAS_URI!;
mongoose.connect(ATLAS_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("connection between server and mongodb established");
});

app.get("/api", (req: Request, res: Response, next: NextFunction) => {
  res.send("hello");
});

app.listen(PORT, () => console.log("running"));
