export type ApiResult<Data> = { success: true; data: Data } | { success: false; message: string };
