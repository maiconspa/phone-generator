export const validateData = (text: string, length: number) => {
  if (text.length !== length || !text) return false;
  return true;
};
