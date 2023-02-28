"use strict";

function unique(arr) {
    let uniqueSet = [];

    for (let string of arr) {
        if (!uniqueSet.includes(string)) {
            uniqueSet.push(string);
        }
    }

    return uniqueSet;
  }
  
  const strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  console.log( unique(strings) ); // кришна, харе, :-O