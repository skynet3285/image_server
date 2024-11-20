import serverConfig from "../Config/server";
import multer from "multer";

export const upload = multer({
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
