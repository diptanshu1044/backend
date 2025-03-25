import express, { type Request, type Response, urlencoded } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World from TypeScript Express!");
});

app.get("/isWorking", (req: Request, res: Response) => {
  res.json({ isWorking: true });
});

app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
