function sumSliceArray(arr, first, second) {
    if (!Array.isArray(arr)) {
        throw new Error("Input is not an array");
    }
    if (isNaN(first) || isNaN(second)) {
        throw new Error("Input in not a number");
    }
    if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
        throw new Error("Invalid index");
    }
    return arr[first] + arr[second];
}
try {
    const arr = [2, 4, 6, 8, 10];
    const first = 2;
    const second = 4;
    const result = sumSliceArray(arr, first, second);
    console.log(`Sum of elements at indexes ${first} and ${second} equals ${result}`);
} catch (error) {
    console.error("An error occurred:", error.message);
}