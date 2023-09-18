import { Result } from "../types";

export function tryOn<T, E = any>(fn: () => T): Result<T, E> {
  try {
    const value = fn();
    return { ok: true, value };
  } catch (error) {
    return { ok: false, error: error as E };
  }
}

export async function tryOnAsync<T, E = any>(fn: () => Promise<T>): Promise<Result<T, E>> {
  try {
    const value = await fn();
    return { ok: true, value };
  } catch (error) {
    return { ok: false, error: error as E };
  }
}
