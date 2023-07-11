(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  //___Funcion declarativa
  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const producto1 = createProductToJson('P1', new Date(), 12, 'XL');
  //console.log(producto1.);

  //___Arrow function

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  const producto2 = createProductToJsonV2('P1', new Date(), 12);
})();
