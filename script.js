//second--------------------------------------------------------------------------
const names = [
    ['giorgi', 'levani', 'mariami', 'natia', 'eka', 'daviti', 'tamari'],
    ['lion', 'tiger', 'elephant', 'leopard', 'cheetah', 'monkey', 'crocodile'],
    ['tbilisi', 'rustavi', 'batumi', 'paris', 'london', 'berlin', 'munchen']
];

function getRandomElementFrom2DArray(array2D) {
    
    const randomRowIndex = Math.floor(Math.random() * array2D.length);
    // Select the random row
    const randomRow = array2D[randomRowIndex];
    // Select a random element from the random row
    const randomElementIndex = Math.floor(Math.random() * randomRow.length);
    return {
        element: randomRow[randomElementIndex],
        rowIndex: randomRowIndex
    };
}

const randomSelection = getRandomElementFrom2DArray(names);
const randomElement = randomSelection.element;
const rowIndex = randomSelection.rowIndex;


const categoryNames = ['names', 'animals', 'cities'];

// console.log(randomElement);

console.log(`You have 10 attempts to guess the word.`);
let lineBefore = '';
for (let i = 0; i < randomElement.length; i++) {
    lineBefore += ' _';
}
console.log(lineBefore);

let array = [];
let attempts = 10;

while (attempts > 0) {
    let userInput = prompt('Type any letter:');
    if (userInput == null) {
        break;
    }
    if (userInput == '' || Number(userInput) || userInput == 0) {
        alert('You must enter a letter.');
        continue;
    }
    if (userInput.length >= 2) {
        alert(`You must enter only 1 letter.`);
        continue;
    }

    if (!randomElement.includes(userInput)) {
        attempts--;
        console.log('-1 attempt think twice');
    }

    if (array.includes(userInput)) {
        console.log(`You already guessed the letter "${userInput}".`);
    }

    if (randomSelection.rowIndex === 0 && attempts === 5) {
        console.log('Hint >>>>>>>>>>It is a NAME');
    } else if (randomSelection.rowIndex === 1 && attempts === 5) {
        console.log('Hint >>>>>>>>>>It is an ANIMAL');
    } else if (randomSelection.rowIndex === 2 && attempts === 5) {
        console.log('Hint >>>>>>>>>>It is a CITY');
    }

    if (randomElement.includes(userInput)) {
        array.push(userInput);
    }

    let display = '';

    for (const letter of randomElement) {
        if (array.includes(letter)) {
            display += letter + ' ';
        } else {
            display += '_ ';
        }
    }

    console.log(display);

    if (!display.includes('_')) {
        console.log('Congrats You Won');
        break;
    }
}

attempts === 0 ? console.log(`You Lost. The name was "${randomElement}".`) : null;
