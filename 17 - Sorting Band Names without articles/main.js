'use strict';

const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog',
];

const bandsList = document.querySelector('#bands');
let bandsWithoutArticles = [];

createNoArticleBandsList();
sortList();
paintList();

function createNoArticleBandsList() {
    bandsWithoutArticles = bands.map((band) => {
        return band.replace(/^(a |the |an )/i, '').trim();
    });
}

function sortList() {
    bandsWithoutArticles.sort((a, b) => (a > b ? 1 : -1));
}

function paintList() {
    bandsWithoutArticles.forEach((band, i) => {
        const newBand = document.createElement('li');
        bandsList.appendChild(newBand);
        newBand.innerHTML = bandsWithoutArticles[i];
    });
}
