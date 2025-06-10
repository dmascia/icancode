/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  const noIntValue = initialValue === undefined;
  const len = this.length;

  if (noIntValue && len === 0) {
    throw new TypeError("redece of empty array with no initial value");
  }

  let acc = noIntValue ? this[0] : initialValue;
  let startingIndex = noIntValue ? 1 : 0;

  for (let i = startingIndex; i < len; i++) {
    if (Object.hasOwn(this, i)) {
      acc = callbackFn(acc, this[i], i, this);
    }
  }

  return acc;
};
