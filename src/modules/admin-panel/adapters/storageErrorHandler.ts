export function storageErrorHandler(error: Error): string {
  throw error.message;
}
