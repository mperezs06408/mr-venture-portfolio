export function multiplyArray<T>(array: T[], times: number): T[] {
  return Array.from({ length: times }).flatMap(() => array);
}
