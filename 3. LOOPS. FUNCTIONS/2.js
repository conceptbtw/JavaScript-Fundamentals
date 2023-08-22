function printWithRepeat(a, b) {
    for (let i = a; i <= b; i++) {
      for (let j = 0; j <= i - a; j++) {
        console.log(i);
      }
    }
  }
printWithRepeat(1, 5);