const isEmpty = value => {
  if (value === undefined) return true;

  if (typeof (value) == 'function' || typeof (value) == 'number'
    || typeof (value) == 'boolean' || Object.prototype.toString.call(value) === '[object Date]')
    return false;

  if (value == null || value.length === 0)        // null or 0 length array
    return true;

  if (typeof (value) == "object") { // empty object
    let r = true;

    for (var _f in value)
      r = false;

    return r;
  }

  return false;
}

export default isEmpty
