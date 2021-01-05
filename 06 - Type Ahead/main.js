'use strict';

const endpoint =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let results = [];
let searchResults = [];

fetch(endpoint)
    .then((response) => response.json())
    .then((data) => (results = data));

const inputField = document.querySelector('.search');
inputField.addEventListener('keyup', findResults);

function findResults() {
    const search = inputField.value;
    searchResults = results.filter((place) => {
        return (
            place.city.toUpperCase().includes(search.toUpperCase()) ||
            place.state.toUpperCase().includes(search.toUpperCase())
        );
    });
    showResults(search);
}

function showResults(search) {
    const resultsList = document.querySelector('.suggestions');
    resultsList.innerHTML = '';
    for (const place of searchResults) {
        const newLi = document.createElement('li');
        resultsList.appendChild(newLi);
        //place
        const placeSpan = document.createElement('span');
        placeSpan.setAttribute('class', 'name');
        newLi.appendChild(placeSpan);
        const regex = new RegExp(search, 'gi');
        let cityAndState = `${place.city}, ${place.state}`;
        placeSpan.innerHTML = cityAndState.replace(
            regex,
            `<span class="hl">${search}</span>`
        );
        //population
        const populationSpan = document.createElement('span');
        populationSpan.setAttribute('class', 'population');
        newLi.appendChild(populationSpan);
        populationSpan.innerHTML = `${place.population}`;
    }
}
