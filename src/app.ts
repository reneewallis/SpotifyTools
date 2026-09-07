import express, { type Express, type Response } from "express";
import "dotenv/config";

const app: Express = express();
const port = process.env["PORT"] ?? "3000";

app.get("/", (_, res: Response) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
