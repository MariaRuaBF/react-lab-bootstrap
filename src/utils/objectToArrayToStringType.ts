export const objectToArrayToStringType = <D extends object>(
  obj: D,
  type: string 
): string[] => {
  return Object.values(obj)
    .filter((item) => item !== undefined)
    .map((item) => `${type}-` + item);
};