const choices = ["rock", "paper", "scissors"]

function game() {
   playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner)
}


function playerChoice () {
    let input = prompt("Type Rock, paper, or scissors")
    while(input == null) {
        input = prompt("Type Rock, paper, or scissors")
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    if(check == true) {
        console.log(input)
    }
    if(check == false) {
        prompt ('You must type rock paper or scissors dummy')
    }
    //console.log(input)
}

function computerChoice () {
    return choices[Math.floor(Math.random()*3)]
}

function validateInput(choice){
    if(choices.includes(choice)) {
        return true;
    } else {
        return false;
    }
 }

function checkWinner(choiceP, choiceC) {
    
}


game();