(() =>{

  //declaración implícita
  let prices = [1,2,2,1,1,212, 'Hi', true];

  prices.push('aaaa');
  prices.push(true);
  prices.push(123);
  //prices.push({});

  let products = ['hola', true];
  products.push(false);

  //let numbers = ['as', 1,2,3,4,5,6,7];
  //numbers.map(item => item *2);

  //declaración explícita
  let mixed: (number | string | boolean | Object)[] = ['hola', true];

  mixed.push(123);
  mixed.push({}); //deja meter tanto jsons
  mixed.push([]); //como arrays













})();
