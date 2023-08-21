function createArray(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
let array = createArray(2, 9);
console.log(array);