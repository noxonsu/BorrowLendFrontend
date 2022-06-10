export function deepCompareObjects(objectOne: unknown, ObjectTwo: unknown): boolean {
  return JSON.stringify(objectOne) === JSON.stringify(ObjectTwo);
}
