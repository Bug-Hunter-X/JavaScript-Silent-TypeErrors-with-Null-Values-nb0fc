function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null; //Handle non-numeric inputs gracefully
    //Alternatively, throw an error: throw new Error('Inputs must be numbers');
  }
  return a + b;
}
//Example usage
console.log(foo(5, 10)); // Output: 15
console.log(foo(5, '10')); //Output: null
console.log(foo(null,10)); // Output: null
console.log(foo(5, null)); // Output: null