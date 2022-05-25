//Give a positive integer 'n', determine if the number is a power of 2 or not

function powerOfTwo(n) {
  while (n > 1) {
    if (n % 2 != 0) {
      return false;
    }
    n = n / 2;
    return true;
  }
}

console.log(powerOfTwo(7));
