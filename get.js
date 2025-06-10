/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */
export default function get(objectParam, pathParam, defaultValue) {
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split(".");
  let index = 0;
  let length = path.length;
  let myObject = objectParam;

  while (myObject != null && index < length) {
    myObject = myObject[String(path[index])];
    index++;
  }

  const value = index && index === length ? myObject : undefined;

  return value !== undefined ? value : defaultValue;
}
