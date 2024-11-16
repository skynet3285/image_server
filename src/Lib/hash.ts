import crypto from "crypto";

export function generateHash(
  fileName: string,
  hashAlgorithm: string = "SHA3-384"
): string {
  return crypto.createHash(hashAlgorithm).update(fileName).digest("hex");
}
