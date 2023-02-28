"use strict";

const styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");
console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles);

alert( `Удалён:  ${styles.shift()}` );
console.log(styles);

styles.unshift("Рэп", "Рэгги");
console.log(styles);
