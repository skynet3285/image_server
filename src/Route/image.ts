import { Router } from "express";
import { upload } from "../Middleware/multer";
import { downloadLimiter, uploadLimiter } from "../Middleware/rate-limit";
import { postImages, getImagesJpg } from "../Controller/image";

const imageRouter = Router();

// 이미지 업로드
imageRouter.post("/images/catchmeifyoucan", uploadLimiter, upload, postImages);

// 이미지 다운로드
imageRouter.get("/images/:imageName/hd.jpg", downloadLimiter, getImagesJpg);

export default imageRouter;
