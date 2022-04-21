import * as grpc from "@grpc/grpc-js";
import { DatabaseServiceClient } from "./gen/esec_engine";
import { ComputeScoreServiceClient } from "./gen/esec_score";

export function createDatabaseClient() {
  return new DatabaseServiceClient(process.env.RPC_ADDRESS as string, grpc.credentials.createInsecure());
}

export function createComputeScoreClient() {
  return new ComputeScoreServiceClient(process.env.RPC_ADDRESS as string, grpc.credentials.createInsecure());
}
