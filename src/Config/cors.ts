import "./init";

const defaultOrigin: string[] = [];
const defaultMethods = ["GET", "POST", "PUT", "DELETE", "PATCH"];
const defaultCredentials = true;
const defaultHeaders = ["Content-Type", "Authorization"];

const origins =
  process.env.CORS_ORIGIN === undefined
    ? defaultOrigin
    : process.env.CORS_ORIGIN.split(",").map((origin) => origin.trim());
const method =
  process.env.CORS_METHODS === undefined
    ? defaultMethods
    : process.env.CORS_METHODS.split(",").map((method) => method.trim());
const credentials =
  process.env.CORS_CREDNTIALS === undefined
    ? defaultCredentials
    : process.env.CORS_CREDNTIALS.toLowerCase() === "true";
const headers =
  process.env.CORS_HEADERS === undefined
    ? defaultHeaders
    : process.env.CORS_HEADERS.split(",").map((header) => header.trim());

const corsOptions = {
  origin: origins,
  methods: method,
  credentials: credentials,
  allowedHeaders: headers,
};
console.log("CORS Options", corsOptions);

export default corsOptions;
