//Given an integer 'n' find factorial of that integer

function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial(5));

//factorial using recursion
const factorialUsingRecursion = (n) => {
  if (n == 0) return 1;

  return factorialUsingRecursion(n - 1) * n;
};

console.log(factorialUsingRecursion(4));
