export default function isObjEmpty(obj) {
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop))
      return false;
  }
  return true;
}