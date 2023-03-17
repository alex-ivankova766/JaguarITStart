function fibonacci(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i < n + 1; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
}

console.log(fibonacci(77));