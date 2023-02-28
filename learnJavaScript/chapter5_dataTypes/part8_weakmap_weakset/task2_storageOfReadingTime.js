"use strict";

let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ];

let storageOfReadingTime = new WeakMap();

function recordReadingTime(message, time) {
    storageOfReadingTime.set(message, time);
}

recordReadingTime(messages[0], "02:50:16");
recordReadingTime(messages[1], "15:37:25");
recordReadingTime(messages[2], "10:30:01");