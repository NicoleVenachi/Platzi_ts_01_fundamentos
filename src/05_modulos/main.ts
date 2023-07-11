import { addProduct, calcStock, products } from './product.services';

addProduct({
  title: 'Pro 1',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
});

addProduct({
  title: 'Pro 1',
  createdAt: new Date(1993, 1, 1),
  stock: 6,
  size: 'XL',
});

console.log(products);

const total = calcStock();

console.log(total);
