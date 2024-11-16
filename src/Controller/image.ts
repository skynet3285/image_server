import { Request, Response } from "express";
import serverConfig from "../Config/server";
import fs from "fs";
import path from "path";
import { generateHash } from "../Lib/hash";

const HASH_REGEX = /^[a-f0-9]{96}$/;

export async function postImages(
  request: Request,
  response: Response
): Promise<void> {
  try {
    const image = request.file;

    if (!image) {
      response.status(400).send("No file uploaded");
      return;
    }

    const name = image.originalname;
    const hashName = generateHash(image.originalname);

    const filePath = path.resolve(serverConfig.filepath, hashName);
    fs.writeFileSync(filePath, image.buffer);
    response.status(201).send({
      name: name,
      hashName: hashName,
    });
    return;
  } catch (error) {
    console.error("Invalid", error);
    response.status(500).send(error);
    return;
  }
}

export async function getImagesJpg(
  request: Request,
  response: Response
): Promise<void> {
  try {
    const imageName = request.params.imageName as string;

    if (!HASH_REGEX.test(imageName)) {
      response.status(404).send("Not Found");
      return;
    }

    const imageFile = fs.readFileSync(
      path.resolve(serverConfig.filepath, imageName)
    );

    response.setHeader("Content-Type", "image/jpg");
    response.status(200).send(imageFile);
    return;
  } catch (error) {
    console.error("Error :", (error as Error).message);
    response.status(404).send("Not Found");
    return;
  }
}
