function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
        throw new TypeError('Width and height must be numbers');
    }
    return width * height;
}
try {
    const width = parseFloat(prompt('Enter the width of the rectangle:'));
    const height = parseFloat(prompt('Enter the height of the rectangle:'));
    const area = calcRectangleArea(width, height);
    if (isNaN(area)) {
        throw new Error('Invalid values');
    }
    alert(`The area of the rectangle is: ${area}`);
} catch (error) {
    if (error instanceof TypeError) {
        alert(`Error: ${error.message}`);
    } else if (error instanceof Error) {
        alert(`Error: ${error.message}`);
    } else {
        alert('An error occurred');
    }
}
