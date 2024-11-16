import serverConfig from "../Config/server";
import multer from "multer";
import rateLimit from "express-rate-limit";

const uploadLimiter = rateLimit({
  windowMs: 30 * 1000,
  max: 50,
  message: "Too many requests...",
});

const downloadLimiter = rateLimit({
  windowMs: 30 * 1000,
  max: 20,
  message: "Too many requests...",
});

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (_req, file, cb) => {
    if (serverConfig.mimetype.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Not supported file type. Support Type: " + serverConfig.mimetype
        )
      );
    }
  },
}).single("image");

export { uploadLimiter, downloadLimiter, upload };
