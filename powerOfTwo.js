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
