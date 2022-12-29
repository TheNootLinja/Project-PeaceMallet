const p1Inpt = document.querySelector('.p-1-name-inpt');
const p2Inpt = document.querySelector('.p-2-name-inpt');
const battleRound = document.querySelector('.battle-round-value');
const p1VP = document.querySelector('.p1-vp-value');
const p1CP = document.querySelector('.p1-cp-value');
const p2VP = document.querySelector('.p2-vp-value');
const p2CP = document.querySelector('.p2-cp-value');
const battleTurn = document.querySelector('.turn-value');


const sbmtNameBtn = document.querySelector('.set-p-btn');
const battleRoundButtons = document.querySelectorAll('.battle-round-container button');
const p1VPBtns = document.querySelectorAll('.p1-vp-container button');
const p1CPBtns = document.querySelectorAll('.p1-cp-container button');
const p2VPBtns = document.querySelectorAll('.p2-vp-container button');
const p2CPBtns = document.querySelectorAll('.p2-cp-container button')
const battleTurnBtns = document.querySelectorAll('.turn-container button');
const p1TurnBtn = document.querySelector('.p1-btn');
const p2TurnBtn = document.querySelector('.p2-btn');

const handleBattleRoundButtons = (e) => {
    const buttonChoice = e.currentTarget.innerText
    switch(buttonChoice) {
        case "+":
            if(parseInt(battleRound.innerText) < 5) {
            battleRound.innerText = parseInt(battleRound.innerText) + 1;
            }
            break;
        case "-":
            if(parseInt(battleRound.innerText) > 1) {
            battleRound.innerText = parseInt(battleRound.innerText) - 1;
            }
            break;
    }
};

const handleP1VPButtons = (e) => {
    // Need to check if subtracting the button value will make it a negative number
    const buttonValue = parseInt(e.target.getAttribute('data-value'));
    if(parseInt(p1VP.innerText) > 0 & buttonValue < 0) {
        if((parseInt(p1VP.innerText) + buttonValue) < 0){
            p1VP.innerText = 0
        }
        else {
            p1VP.innerText = parseInt(p1VP.innerText) + buttonValue
        }
    }
    else if(buttonValue > 0) {
        p1VP.innerText = parseInt(p1VP.innerText) + buttonValue
    }
};

const handleP2VPButtons = (e) => {
    // Need to check if subtracting the button value will make it a negative number
    const buttonValue = parseInt(e.target.getAttribute('data-value'));
    if(parseInt(p2VP.innerText) > 0 & buttonValue < 0) {
        if((parseInt(p2VP.innerText) + buttonValue) < 0){
            p2VP.innerText = 0
        }
        else {
            p2VP.innerText = parseInt(p2VP.innerText) + buttonValue
        }
    }
    else if(buttonValue > 0) {
        p2VP.innerText = parseInt(p2VP.innerText) + buttonValue
    }
};

const handleTurnButtons = (e) => {
    battleTurn.innerText = e.currentTarget.innerText;
}

const handleP1CPBtns = (e) => {
    const buttonChoice = e.currentTarget.innerText
    switch(buttonChoice) {
        case "+":
            p1CP.innerText = parseInt(p1CP.innerText) + 1;
            break;
        case "-":
            if(parseInt(p1CP.innerText) > 0) {
                p1CP.innerText = parseInt(p1CP.innerText) - 1;
            }
            break;
    }
}

const handleP2CPBtns = (e) => {
    const buttonChoice = e.currentTarget.innerText
    switch(buttonChoice) {
        case "+":
            p2CP.innerText = parseInt(p2CP.innerText) + 1;
            break;
        case "-":
            if(parseInt(p2CP.innerText) > 0) {
                p2CP.innerText = parseInt(p2CP.innerText) - 1;
            }
            break;
    }
}

const handleNameSubmit = () => {
    p1TurnBtn.innerText = p1Inpt.value;
    p2TurnBtn.innerText = p2Inpt.value;
}

sbmtNameBtn.addEventListener('click', handleNameSubmit);
battleRoundButtons.forEach(button => button.addEventListener('click', handleBattleRoundButtons));
p1VPBtns.forEach(button => button.addEventListener('click', handleP1VPButtons));
p1CPBtns.forEach(button => button.addEventListener('click', handleP1CPBtns));
p2VPBtns.forEach(button => button.addEventListener('click', handleP2VPButtons));
p2CPBtns.forEach(button => button.addEventListener('click', handleP2CPBtns));
battleTurnBtns.forEach(button => button.addEventListener('click', handleTurnButtons));