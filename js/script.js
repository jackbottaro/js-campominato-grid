console.log('JS OK!');
/* 
TRACCIA:

L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

*/

// # Recupero gli elementi in pagina
const difficulty = document.getElementById('level-select').addEventListener("change", changeMode);
const game = document.getElementById('game');


// Genero numeri casuali con getRandomNumber
function getRandomNumber (min, max, list) {
    let randNumber;
    do {
        randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (list.includes(randNumber));
    return randNumber;
}

// Prendo la value releativa alla difficoltà selezionata
function changeMode() {
    const level = document.getElementById("level-select").value;
    displayMode(level);
}

// Creo celle in base alla difficoltà selezionata

function displayMode(difficulty) {

    if (difficulty === 'hard') {
        createCell(10);
    } else if (difficulty === 'normal') {
        createCell(9);
    } else if (difficulty === 'easy') {
        createCell(7);
    } 
}

function createCell(cells) {
    const totalCells = cells * cells;
    const extractedNumbers = [];
    game.innerHTML = '';

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell justify-content-center';
        cell.style.width = `calc(100% / ${cells})`;
        cell.style.height = `calc(100% / ${cells})`;
        const cellNumber = getRandomNumber(1,100, extractedNumbers)
        extractedNumbers.push(cellNumber);
        cell.innerHTML = `<span>${cellNumber}</span>`;

        cell.addEventListener('click', function () {
            cell.classList.toggle('clicked')
        });
        game.appendChild(cell);
    }
}

