function randArray(k) {
    const res = [];
    for (let i = 0; i < k; i++) {
      const randNum = Math.floor(Math.random() * 500) + 1;
      res.push(randNum);
    }
    return res;
  }
console.log(randArray(5));