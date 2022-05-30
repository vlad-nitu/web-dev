const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column') ;
const yourScore = document.querySelector('[data-your-score]');
const computerScore = document.querySelector('[data-computer-score]');
const SELECTIONS = [ // All possibilities of selecting

    {
        name: "rock",
        emoji: '👊',
        beats: 'scissors' 
    }, 
    {
        name: "paper",
        emoji: '🤚',
        beats: 'rock' 
    }, 
    {
        name: "scissors",
        emoji: '✌️',
        beats: 'paper' 
    }
]


selectionButtons.forEach(selectionButton => { 
    selectionButton.addEventListener('click', () => {
         const selectionName =  selectionButton.dataset.selection;
         const selectionObject = SELECTIONS.find(selection => selection.name ==  selectionName)
         makeSelection(selectionObject) ;
    });
});

function makeSelection(selection) { 
    const computerSelection = randomSelection() ; 
    const youWin  = isWinner(selection, computerSelection);
    const computerWin = isWinner(computerSelection, selection);
    
    // The order in which addSelectionResult function
    // is called IS IMPORTANT, as it works like a stack, mySelection
    // being shown to the left of computerSelection
    
    addSelectionResult(computerSelection, computerWin) ;
    addSelectionResult(selection, youWin) ;

    if (youWin)
    incrementScore(yourScore); 
    if (computerWin) 
    incrementScore(computerScore); 
} ;

function addSelectionResult(selection, winner) { 

        //Creates a new div element that will be placed after the final column
        const div = document.createElement('div') ;
        div.innerText = selection.emoji  ;
        div.classList.add('result-selection'); 
        if (winner)  div.classList.add('result-selection-winner') ;

        finalColumn.after(div) ; //adds the emojis in the correct order
}

function incrementScore(score){ 
    score.innerText = parseInt(score.innerText) + 1 ;
}


function isWinner(selection, opponentSelection) { 
    return selection.beats == opponentSelection.name ;
}


function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length) ; 
    //random integer number from 0 to 2 inclusive
    return SELECTIONS[randomIndex]; 
}