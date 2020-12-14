'use strict';

const form = document.querySelector('.add-items');
const platesList = document.querySelector('.plates');
const inputField = document.querySelector('[name=item]');
const plates = [];

function addPlateToList(e) {
    e.preventDefault();
    const item = {
        text: inputField.value,
        done: false,
    };
    console.log(item);
    plates.push(item);
    paintList();
    this.reset();
}

function paintList() {
    console.log(plates);
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

form.addEventListener('submit', addPlateToList);
