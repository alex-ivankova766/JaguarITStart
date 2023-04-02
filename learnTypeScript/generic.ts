const arrayOfNumbers: Array<number> = [1, 2, 3]
const arrayOfWords: Array<string> = ['hello', 'dear', 'friend']

function reverse<T>(array: T[]): T[]{
    return array.reverse()
}

console.log( reverse(arrayOfNumbers) )
console.log( reverse(arrayOfWords) )
