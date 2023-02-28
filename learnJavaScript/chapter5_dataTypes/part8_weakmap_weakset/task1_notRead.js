"use strict";

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

let readMessages = new WeakSet();

function readMessage(message) {
    readMessages.add(message);
}

readMessage(messages[0]);
readMessage(messages[1]);

console.log(readMessages.has(messages[0]));
console.log(readMessages.has(messages[1]));

readMessage(messages[1]);

console.log(readMessages.has(messages[0]));
console.log(readMessages.has(messages[1]));

messages.splice(0, 1);

console.log(readMessages.has(messages[0]));
console.log(readMessages.has(messages[1]));
