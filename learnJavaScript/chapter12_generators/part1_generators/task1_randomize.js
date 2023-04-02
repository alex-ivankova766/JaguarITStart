function* pseudoRandom(seed) {
    for (
        let i = seed * 16807 % 2147483647; 
        true; 
        i = i * 16807 % 2147483647
        ) 
        yield i;
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073