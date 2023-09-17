export function ret<Result>(fn: () => Result): Result {
  return fn();
}
