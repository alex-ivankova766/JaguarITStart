let array = [1, 2, 3];

array = new Proxy(array, {
  get(array, index, receiver) {
    if (index < 0) {
      index = +index + array.length;
    }
    return Reflect.get(array, index, receiver);
  }
});


console.log(array[-1]);
console.log(array[-2]);