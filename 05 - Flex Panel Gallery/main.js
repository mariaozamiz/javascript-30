'use strict';

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
