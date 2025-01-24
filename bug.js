function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will not cause the error described below
  }
  return a + b; //This line will throw an error if a or b is not a number
}