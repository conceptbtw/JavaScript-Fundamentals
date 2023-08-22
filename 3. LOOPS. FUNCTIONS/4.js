function compact(arr) {
    const uniqVal = [];
    for (const val of arr) {
      if (!uniqVal.includes(val)) {
        uniqVal.push(val);
      }
    }
    return uniqVal;
  }
const arr = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr);
console.log(arr2);