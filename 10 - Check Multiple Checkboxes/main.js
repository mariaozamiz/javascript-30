'use strict';

// shift key value = 16;

const checkboxes = document.querySelectorAll(`input[type="checkbox"]`);
console.log(checkboxes);

const checkboxHandler = (ev) => {
    console.log('hay un cambio en un checkbox ' + ev);
};

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', checkboxHandler);
});
