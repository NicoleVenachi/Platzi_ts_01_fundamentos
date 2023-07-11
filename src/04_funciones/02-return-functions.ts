(() => {
  //___return explicito
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });

    return total;
  };

  // const rta = calcTotal([1, 2, 3, 4, 5]);
  // console.log(rta);

  //___no retorna nada (void)
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal([1, 2, 3, 4, 5]);
    console.log(`El total, es ${rta}`);
  };

  printTotal([1, 2, 3, 4, 5]);
})();
