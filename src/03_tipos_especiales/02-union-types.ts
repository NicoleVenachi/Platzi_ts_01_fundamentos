(() => {
  //___Declaración explicita___
  let userId: string | number;

  userId = 1212;
  userId = 'asasa';

  // ___Coherencia en el manejo del tipado condicional___
  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLocaleLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }

  greeting('asas');
  greeting(12.12);
})();
