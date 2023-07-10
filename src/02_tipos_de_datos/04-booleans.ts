(() => {

    //declaración implícita
    let isEnabled = true;
    isEnabled= false;

    //declaración explícita
    let isNew: boolean = true;
    console.log(`isNew: ${isNew}`);


    //delcaración 'indirecta'
    const random = Math.random();
    console.log(`Random: ${random}`);

    isNew = random >= 0.5 ? true: false;

    console.log(`isNew: ${isNew}`);

})();
