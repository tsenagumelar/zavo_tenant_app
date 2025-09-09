export const formatToIndo = (raw: string) => {
  let v = raw.replace(/\D/g, "");
  if (v.startsWith("0")) v = "62" + v.slice(1);
  if (!v.startsWith("62")) v = "62" + v;
  return "+" + v;
};
