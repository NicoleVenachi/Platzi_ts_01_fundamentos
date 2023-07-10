(() => {
  //todas las sentencias en '//' serían errores en TS

  //_____Delaaración inferida________

  let productPrice = 100;
  productPrice = 12;

  console.log(`Product Price: ${productPrice}`);

  //______Delaaración explícita_____

  let customerAge: number = 28;
  // customerAge += '1';
  customerAge += 1;
  console.log(`Customer Age: ${customerAge}`);

  //___inicializar sin declarar, especifico el tipo de dato____

  let productInStock: number;
  //console.log(productInStock); //no existe,, imprimir seri erro

  // if(productInStock > 10){

  // }
  // else{}

  // ________declaración/asignación desde un Casteo___________

  let discout = parseInt('123');
  //si falla, e.g., strins lo convierte como NAN
  console.log(`Discount: ${discout}`);

  discout ? console.log('Hi') : console.log('Bye');

  //Hexadecimay y binario (Tipos exactos de números)
  let hex = 0xfff;
  console.log(`Hex: ${hex}`);

  let bin = 0b101;
  console.log(`Bin: ${bin}`);
})();
