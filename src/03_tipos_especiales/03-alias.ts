(() => {
  //________Cracion de tipos/alias types_______
  type UserID = string | number;

  //Declaración de variablescon el tipo personalizado
  let userId: UserID;

  function greeting(myText: UserID) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLocaleLowerCase()}`);
    }
  }

  // ________Creacion de Literal Types________

  //tipo
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  //literal types
  let shirtSize: Sizes;

  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  //shirtSize = 's';

  // function test(mySize:Sizes) {
  // }
  // test("")
})();
