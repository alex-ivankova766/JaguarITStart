let user = {
  name: "John"
};

function wrap(object) {
  return new Proxy(object, {
    get(object, prop, receiver) {
      if (prop in object) {
        return Reflect.get(object, prop, receiver);
      } else {
        throw new ReferenceError(`Property "${prop}" does not exists`)
      }
    }
  });
}

user = wrap(user);

console.log(user.name);
console.log(user.age);