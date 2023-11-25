
let wins = 0;
let losses = 0;
let ties = 0;
let games = 0;
let userInput = 0;
let gameWins = 0;
let gameLosses = 0;

function victory() {
    let test = document.querySelector("#winTally");
    let read = test.textContent;
    let score = parseInt(read);
    score++;
    test.textContent = score;
    wins = score;
    if (wins == 5) {
        const response = confirm("Congratulation! You won the game! Play again?");
            if(response) {
                gameWonContinue(); 
        } else {
            alert("Yeah, yeah, quit while you're ahead...");
            close();   
        
}
}
}

function gameWonContinue() {
    document.querySelector("#winTally").textContent = 0
    document.querySelector("#tieTally").textContent = 0
    document.querySelector("#lossTally").textContent = 0
    document.querySelector("#result").textContent = "";
    let currentWins = document.querySelector("#cWTracker");
    let currentWinsText = currentWins.textContent;
    let currentWinsInt = parseInt(currentWinsText);
    let newWinsScore = currentWinsInt + 1;
    currentWins.textContent = newWinsScore;
}

function gameLostContinue() {
    document.querySelector("#winTally").textContent = 0
    document.querySelector("#tieTally").textContent = 0
    document.querySelector("#lossTally").textContent = 0
    document.querySelector("#result").textContent = "";
    let currentWins = document.querySelector("#cLTracker");
    let currentWinsText = currentWins.textContent;
    let currentWinsInt = parseInt(currentWinsText);
    let newWinsScore = currentWinsInt + 1;
    currentWins.textContent = newWinsScore;
}

function defeat() {
    let test = document.querySelector("#lossTally");
    let read = test.textContent;
    let score = parseInt(read);
    score++;
    test.textContent = score;
    losses = score;
    if (losses == 5) {
        const response = confirm("That's embarrasing! You lost to a computer! Play again?");
            if(response) {
                gameLostContinue();
        } else {
            alert("Loser");
            close();
        }
}
}

function stalemate() {
    let test = document.querySelector("#tieTally");
    let read = test.textContent;
    let score = parseInt(read);
    score++;
    test.textContent = score;
    ties = score;
}

function play(userInput) {

        let opponentInput = Math.floor(Math.random() * 3) + 1;
        let answer = "";

        switch(userInput) {
            case 1: 
                answer = "Rock";
                break;
            case 2:
                answer = "Paper";
                break;
            case 3: 
                answer = "Scissors";
                break;
        }      

        if ( userInput === opponentInput ) {
            let result = document.querySelector("#result");
            result.textContent = `You both chose ${answer}! It's a tie!`;
        stalemate();
    } else if (userInput === 1 && opponentInput === 2) {
       let result = document.querySelector("#result");
       result.textContent = "You chose Rock, and the computer chose Paper! You lose!";
        defeat();
    } else if (userInput === 1 && opponentInput === 3) {
       let result = document.querySelector("#result");
       result.textContent = "You chose Rock and the computer chose Scissors! You win!";
        victory();
    } else if (userInput === 2 && opponentInput === 1) {
        let result = document.querySelector("#result");
        result.textContent = "You chose Paper and the computer chose Rock! You win!";
        victory();
    } else if (userInput === 2 && opponentInput === 3) {
       let result = document.querySelector("#result");
       result.textContent = "You chose Paper and the computer chose Scissors! You lose!";
        defeat();
    } else if (userInput === 3 && opponentInput === 1) {
        let result = document.querySelector("#result");
        result.textContent = "You chose Scissors and the computer chose Rock! You lose!";
        defeat();
    } else if (userInput === 3 && opponentInput === 2) {
        let result = document.querySelector("#result");
        result.textContent = "You chose Scissors and the computer chose Paper! You win!";
        victory();
    }
    console.log(opponentInput);
    } 

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener('click', () => {
    play(1);
});
paper.addEventListener('click', () => {
    play(2);
});
scissors.addEventListener('click', () => {
    play(3);
})

