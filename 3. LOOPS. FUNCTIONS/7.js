function findUnique(arr) {
    const uniqArr = [];
    for (const num of arr) {
      if (uniqArr.includes(num)) {
        return false;
      }
      uniqArr.push(num);
    }
    return true;
}
console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));