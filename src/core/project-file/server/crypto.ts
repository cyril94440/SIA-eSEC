import { Buffer } from "node:buffer";
import crypto from "node:crypto";
import { Root } from "../types";

export function encrypt(data: Root, password: string): string {
  const key = crypto.createHash("sha256").update(password).digest();
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);

  const jsonData = JSON.stringify(data, null, 4);
  const encryptedData = Buffer.concat([cipher.update(jsonData), cipher.final()]) as Buffer;
  const authTag = cipher.getAuthTag();
  const content = iv.toString("base64") + ":" + encryptedData.toString("base64") + ":" + authTag.toString("base64");

  return content;
}

export function decrypt(content: string, password: string): Root {
  const [ivString, encryptedDataString, authTagString] = content.split(":");
  const key = crypto.createHash("sha256").update(password).digest();
  const iv = Buffer.from(ivString, "base64");
  const encryptedData = Buffer.from(encryptedDataString, "base64");
  const authTag = Buffer.from(authTagString, "base64");
  const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);

  decipher.setAuthTag(authTag);
  const jsonData = Buffer.concat([decipher.update(encryptedData), decipher.final()]).toString();
  const data = JSON.parse(jsonData);

  return data;
}
