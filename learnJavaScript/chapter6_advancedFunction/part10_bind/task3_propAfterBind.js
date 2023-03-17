function sayHi() {
    console.log( this.name );
}
sayHi.test = 5;
  
let bound = sayHi.bind( {name: "Вася"} );
  
console.log( bound.test ); // что выведет? почему?

// this для bound это объект {name: "Вася"} в котором нет test