import "./init";

if (!process.env.HOST) {
  throw new Error("HOST is not provided in .env file, example HOST=localhost");
}
if (!process.env.PORT) {
  throw new Error("PORT is not provided in .env file, example PORT=3000");
}
if (!process.env.ENTRYPOINT) {
  throw new Error(
    "ENTRYPOINT is not provided in .env file, example ENTRYPOINT=v1"
  );
}
if (!process.env.FILEPATH) {
  throw new Error(
    "FILEPATH is not provided in .env file, example FILEPATH=./uploads"
  );
}
if (!process.env.MIMETYPE) {
  throw new Error(
    "MIMETYPE is not provided in .env file, example MIMETYPE=image/png, image/jpeg"
  );
}

const serverConfig = {
  host: process.env.HOST,
  port: Number(process.env.PORT),
  entrypoint: `/${process.env.ENTRYPOINT}`,
  filepath: process.env.FILEPATH,
  mimetype: process.env.MIMETYPE.split(",").map((type) => type.trim()),
};
console.log("Server Config", serverConfig);

export default serverConfig;
