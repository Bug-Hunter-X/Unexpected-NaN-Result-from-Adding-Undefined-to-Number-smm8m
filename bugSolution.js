function foo(a, b) {  return a + (b ?? 0);}
console.log(foo(1, undefined)); // Output: 1