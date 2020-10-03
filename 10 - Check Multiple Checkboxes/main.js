'use strict';

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastCheckedBox;

function handleCheckbox(ev) {
    let inBetween = false;
    if (ev.shiftKey && this.checked) {
        checkboxes.forEach((checkbox) => {
            if (checkbox === this || checkbox === lastCheckedBox) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastCheckedBox = this;
}

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', handleCheckbox);
});
