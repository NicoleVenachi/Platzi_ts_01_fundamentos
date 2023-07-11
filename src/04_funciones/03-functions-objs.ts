(() => {
  const login = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };

  login({
    email: 'default@gmail.com',
    password: 'asdfg',
  });

  // ______funcion mas grande
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const producs: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    producs.push(data);
  };

  addProduct({
    title: 'Pro 1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
  });

  console.log(producs);
})();
