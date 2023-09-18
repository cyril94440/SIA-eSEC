import { Buffer } from "node:buffer";
import crypto from "node:crypto";
import { tryOn } from "@@core/base";
import { Root } from "../types";

export function encrypt(data: Root, password: string): string {
  const iv = crypto.randomBytes(16);
  const key = crypto.createHash("sha256").update(password).digest();
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);

  const json = JSON.stringify(data, null, 4);
  const encryptedData = Buffer.concat([cipher.update(json), cipher.final()]) as Buffer;
  const authTag = cipher.getAuthTag();

  return iv.toString("base64") + ":" + authTag.toString("base64") + ":" + encryptedData.toString("base64");
}

export function decrypt(content: string, password: string): Root | null {
  const [ivString, authTagString, encryptedDataString] = content.split(":");

  const iv = Buffer.from(ivString, "base64");
  const authTag = Buffer.from(authTagString, "base64");
  const encryptedData = Buffer.from(encryptedDataString, "base64");

  const key = crypto.createHash("sha256").update(password).digest();
  const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
  decipher.setAuthTag(authTag);

  const json = tryOn(() => Buffer.concat([decipher.update(encryptedData), decipher.final()]).toString());

  if (!json.ok) {
    console.log(json.error);
    return null;
  }

  return JSON.parse(json.value);
}
