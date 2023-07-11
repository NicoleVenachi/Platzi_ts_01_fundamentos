(() => {
  //___Declaracion implicita____
  let myDinamicVar: any;

  myDinamicVar = 100;
  myDinamicVar = null;
  myDinamicVar = {};

  //___Casteo para forzar tipo de dato___
  myDinamicVar = 'Hola';
  const rta = (myDinamicVar as string).toLocaleLowerCase();

  myDinamicVar = 1212;
  const rta2 = (<number>myDinamicVar).toFixed();
})();
