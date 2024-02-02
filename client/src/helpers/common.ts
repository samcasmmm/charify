export function arrayIsEmpty(array: []) {
  if (!Array.isArray(array)) {
    return false;
  }
  if (array.length === 0) {
    return true;
  }
  return false;
}
