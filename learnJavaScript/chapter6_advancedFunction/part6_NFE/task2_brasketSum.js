function sum(a) {
    let accumulator = a;
    
    function nextBrasket(b) {
        accumulator += b;
        return nextBrasket;
    }
    nextBrasket.valueOf = function() {
        return accumulator;
    };
    return nextBrasket;
}


console.log( sum(1)(2) == 3 ); 
console.log( sum(5)(-1)(2) == 6 );
console.log( sum(6)(-1)(-2)(-3) == 0 );
console.log( sum(0)(1)(2)(3)(4)(5) == 15);