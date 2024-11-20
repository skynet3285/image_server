import rateLimit from "express-rate-limit";

export const uploadLimiter = rateLimit({
  windowMs: 30 * 1000,
  max: 50,
  message: "Too many requests...",
  keyGenerator: (req) => {
    const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0].trim();
    return ip;
  },
});

export const downloadLimiter = rateLimit({
  windowMs: 1 * 1000,
  max: 100,
  message: "Too many requests...",
  keyGenerator: (req) => {
    const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0].trim();
    return ip;
  },
});
