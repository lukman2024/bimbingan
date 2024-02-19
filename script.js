function faktoriala(n) {
  if (n == 0) return 1;
  return n * faktoriala(n - 1);
}

faktoriala(5);
