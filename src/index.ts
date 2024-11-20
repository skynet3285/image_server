import serverConfig from "./Config/server";
import express, { Express, Request, Response } from "express";
import cors from "./Middleware/cors";
import imageRouter from "./Route/image";

const app: Express = express();

app.use(express.json());
app.use(cors);
app.options("*", cors);

// Trust the first proxy
app.set("trust proxy", true);

app.use(`${serverConfig.entrypoint}/`, imageRouter);

app.all("*", (_req: Request, _res: Response) => {});

app.listen(serverConfig.port, serverConfig.host, () => {
  console.log(
    `[server]: Server is running at http://${serverConfig.host}:${serverConfig.port}`
  );
});
