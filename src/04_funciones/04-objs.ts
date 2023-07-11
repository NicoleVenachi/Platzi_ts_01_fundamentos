(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  const producs: Product[] = [];

  const addProduct = (data: Product) => {
    producs.push(data);
  };

  addProduct({
    title: 'Pro 1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
  });

  console.log(producs);
})();
