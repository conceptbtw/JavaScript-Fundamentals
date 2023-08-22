function calc(a, b, op) {
    switch (op) {
      case 1:
        return a - b;
        break;
      case 2:
        return a * b;
        break;
      case 3:
        return a / b;
        break;
      default:
        return a + b;
    }
}
console.log(calc(10, 3, 1)); //7
console.log(calc(2, 3, 2)); //6
console.log(calc(6, 3, 3)); //2
console.log(calc(5, 5, 5)); //10
  
  