function makeCounter() {
      
    let count = 0;

    function counter() {

      return count++;
    };

    counter.set = value => count = value;
    counter.decrease = () => count--;

    return counter;
}
  
let counter = makeCounter();

  
console.log( counter() ); // 10

counter.set(100);
  
console.log( counter() ); // 100

console.log( counter() );
console.log( counter() ); 

counter.decrease()

console.log( counter() );
console.log( counter() ); 