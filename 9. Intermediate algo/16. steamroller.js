function steamrollArray(arr) {
  return flatDeep(arr, Infinity);
}

function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

steamrollArray([1, [2], [3, [[4]]]]);