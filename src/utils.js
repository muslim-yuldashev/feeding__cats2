import React from 'react';

const listOfCats = [
    {
        name: 'Poppy',
    },
    {
        name: 'Loppy',
    },
    {
        name: 'Yuppy',
    },
    {
        name: 'Aurora',
    },
    {
        name: 'Niki',
    },
    {
        name: 'Monday',
    },
    {
        name: 'Fighter',
    },
    {
        name: 'Dubby',
    },
    {
        name: 'Evos',
    },
    {
        name: 'One',
    },
    {
        name: 'Makro',
    },
    {
        name: 'NeverMore',
    },
    {
        name: 'Wednesday',
    },
    {
        name: 'Sam',
    },
    {
        name: 'Nanny',
    },
    {
        name: 'Hook',
    },
    {
        name: 'Dolly',
    },
    {
        name: 'Newky',
    },
    {
        name: 'Terry',
    },
    {
        name: 'Ron',
    },
    {
        name: 'Mufassa',
    },
    {
        name: 'Simba',
    },
    {
        name: 'Alpha',
    },
    {
        name: 'Aramis',
    },
    {
        name: 'Partos',
    },
    {
        name: 'Atos',
    },
    {
        name: 'Darti',
    },
    {
        name: 'New',
    },
    {
        name: 'Fee',
    },
    {
        name: 'Feeby',
    },
    {
        name: 'Voyager',
    },
    {
        name: 'Ruppy',
    },
    {
        name: 'Nasa',
    },
    {
        name: 'Hunter',
    },

];

function getRandomColor(){
    function randomInteger(max) {
        return Math.floor(Math.random()*(max + 1));
    }
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return `rgb(${r},${g},${b})`;
}

function getRandomName() {
    return listOfCats[Math.floor(Math.random() * listOfCats.length)].name;
}
function getRandomAge(){
    return (Math.random()*15).toFixed(0);
}


export {getRandomName, getRandomColor, getRandomAge};