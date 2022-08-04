export const isEmpty = (val: Record<string, unknown> | null | undefined) =>
  val == null || !(Object.keys(val) || val).length;
