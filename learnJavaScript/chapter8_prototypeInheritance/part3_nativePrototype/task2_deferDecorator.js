Function.prototype.defer = function(ms) {
    let thisFunc = this;
    return function(...args) {
        setTimeout( () => thisFunc.apply(this, args), ms);
    }
};

function f(a, b) {
    console.log( a + b );
}
  
f.defer(1000)(1, 2); // выведет 3 через 1 секунду.