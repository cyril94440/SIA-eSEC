import { ServiceError } from "@grpc/grpc-js";

export function getPromise<Response>(
  handler: (callback: (error: ServiceError | null, response: Response) => void) => void
): Promise<Response> {
  return new Promise((resolve, reject) => {
    try {
      handler((error, response) => (error ? reject(error) : resolve(response)));
    } catch (error) {
      reject(error);
    }
  });
}
