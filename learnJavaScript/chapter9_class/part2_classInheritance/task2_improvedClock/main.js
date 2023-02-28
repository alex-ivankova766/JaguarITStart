/*Не смогла удержаться, приделала кнопку,
теорию пока не читала по ним, просто нашла
пример на https://developer.mozilla.org */

import {ExtendedClock} from './ExtendedClock.js';

let delay = 2000;
let improvedClock = new ExtendedClock({template: 'h:m:s'}, delay);
improvedClock.start();

const button = document.querySelector('input');
button.addEventListener('click', updateButton);

function updateButton() {
  if (button.value === 'Stop timer') {
    button.value = 'Start timer';
    improvedClock.stop();
  } else {
    button.value = 'Stop timer';
    improvedClock.start();  
    }
}
