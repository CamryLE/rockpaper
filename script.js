let computerChoice;
let playerChoice;



function getComputerChoice ()
{
  switch(Math.floor(Math.random() *3)) {
    case 0:
        computerChoice = "Rock";
    case 1 :
        computerChoice = "Paper"
    case 2 :
        computerChoice = "Scissors"
  }

  
}

getComputerChoice();
