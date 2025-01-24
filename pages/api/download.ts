import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { fileName } = req.query;

  if (!fileName || typeof fileName !== "string") {
    return res.status(400).json({ error: "File name is required." });
  }

  const filePath = path.join(process.cwd(), "public", "assets", fileName);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "File not found." });
  }

  res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
  res.setHeader("Content-Type", "application/octet-stream");
  fs.createReadStream(filePath).pipe(res);
}
