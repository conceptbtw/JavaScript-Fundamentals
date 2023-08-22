function separateArr(arr) {
    const numArr = [];
    const strArr = [];
    for (const val of arr) {
      if (typeof val === "number") {
        numArr.push(val);
      } else if (typeof val === "string") {
        strArr.push(val);
      } else if (Array.isArray(val)) {
        const arrInArr = separateArr(val);
        numArr.push(...arrInArr[0]);
        strArr.push(...arrInArr[1]);
      }
    }
    return [numArr, strArr];
  }
  const arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
  const [numArr, strArr] = separateArr(arr);
  console.log(numArr);
  console.log(strArr);