function createArray(start, end) {
    const array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}
let arr = createArray(2, 9);
console.log(arr);