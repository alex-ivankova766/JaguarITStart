function Animal(name) {
    this.name = name;
}

let obj = new Animal;

let obj2 = new obj.constructor();

// сработает если prototype норм.