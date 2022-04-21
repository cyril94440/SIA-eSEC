import * as grpc from "@grpc/grpc-js";
import { DatabaseServiceClient } from "./gen/esec_engine";

export function createClient() {
  return new DatabaseServiceClient(process.env.API_ADDRESS as string, grpc.credentials.createInsecure());
}
