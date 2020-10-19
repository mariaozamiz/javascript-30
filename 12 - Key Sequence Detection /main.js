'use strict';

const pressedKeys = [];
const secretCode = 'raptor';

function keyupHandler(ev) {
    pressedKeys.push(ev.key);
    pressedKeys.splice(
        -secretCode.length - 1,
        pressedKeys.length - secretCode.length
    );
    if (pressedKeys.join('').includes(secretCode)) {
        console.log('YEAH GRRRRRRRR! 🦖 🦖 🦖 🦖 🦖');
    }
}

window.addEventListener('keyup', keyupHandler);
