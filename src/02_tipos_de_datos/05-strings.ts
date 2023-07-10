(() =>{

  //delacaración implicita
  let productTitle = 'My amazing product';

  productTitle = 'My amazing product chaged'

  console.log(`product title: ${productTitle}`);

  //declaración explícita

  const productDescription:string = 'whatever';
  console.log(`product description: ${productDescription}`);

  //template strings
  let productPrice = 100;
  let isNew: boolean = true;

  const summary = `
    Multiline description
    title: ${productPrice}
    description = ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log(`Summary: ${summary}`);



})();
