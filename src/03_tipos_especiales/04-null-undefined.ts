(() => {
  // let myNumber: number;
  // let myString: string;

  // //___declaracion implicita___
  // let myNull = null;
  // let myUndefined = undefined;

  //___declaracion explicita___
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  //____con union types___
  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'abc';

  //__ Tipado condicional, operando algo que pueda ser nulo____
  function hi(name: string | null) {
    let hello = 'Hola';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }

    console.log(hello);
  }

  hi('Nicole');
  hi(null);

  //____Tipado condcional, con TS syntaxis

  function hiV2(name: string | null) {
    let hello = 'Hola';
    hello += name?.toLocaleLowerCase() || 'nobody';

    console.log(hello);
  }

  hiV2('Nicole');
  hiV2(null);
})();
