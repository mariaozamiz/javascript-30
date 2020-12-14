'use strict';

const form = document.querySelector('.add-items');
const platesList = document.querySelector('.plates');
const inputField = document.querySelector('[name=item]');
let plates = JSON.parse(localStorage.getItem('storedPlates')) || [];

paintList();

function addPlateToList(e) {
    e.preventDefault();
    const item = {
        text: inputField.value,
        done: false,
    };
    plates.push(item);
    updateLocalStorage();
    paintList();
    this.reset();
}

function paintList() {
    platesList.innerHTML = plates
        .map((plate, i) => {
            return `
        <li>
            <input type="checkbox" data-index=${i} id="item-${i}" ${
                plate.done ? 'checked' : ''
            } />
            <label for="item-${i}">${plate.text}</label>
        </li>
        `;
        })
        .join('');
}

function toggleStateOfPlates(e) {
    if (!e.target.matches('input')) return;
    const index = e.target.dataset.index;
    plates[index].done = !plates[index].done;
    updateLocalStorage();
    paintList();
}

function updateLocalStorage() {
    localStorage.setItem('storedPlates', JSON.stringify(plates));
}

form.addEventListener('submit', addPlateToList);
platesList.addEventListener('click', toggleStateOfPlates);
