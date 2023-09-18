export function formatErrorMessage(error: any): string {
  return error?.message ?? error?.toString() ?? "Unknown error";
}
