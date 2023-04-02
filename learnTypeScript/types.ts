const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = "Hello Typescript";

const numders: number[] = [1, 1, 2, 3, 5, 8, 13]

const anotherNumbers: Array<number> = [2, 3, 5, 7];

const words: string[] = ['Hello', 'Typescript'];

//Tuple
const contact: [string, number] = ['Ivan', 123456];

//Any
let variable: any = 42;
//...
variable = 'String';

// ====
function sayMyName(name: string): void { // Unit
    console.log(name);
}

sayMyName('Rada');

//Never
// Тип для функции, которая вернёт ошибку, не закончив выполнеение, 
// или работает вечно

function throwError(message: string): never {
    throw new Error(message);
}

function infinite(): never {
    while (true) {}
}

//Type (alias)

type Login = string;

const login: Login = 'admin';

type ID = string | number;

const id1: ID = 1234;
const id2: ID = "1234";

type SomeType = string | null | undefined;


