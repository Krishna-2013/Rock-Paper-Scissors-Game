let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score_para = document.querySelector("#user-score");
const comp_score_para = document.querySelector("#comp-score");


const computerChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const ranidx = Math.floor(Math.random() * 3);
    return option[ranidx];
};

const drawgame = () => {
    msg.innerText = "It's a draw!😀";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        user_score_para.innerText = userScore;
        msg.innerText = `You Win!🤩 Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        comp_score_para.innerText = compScore;
        msg.innerText = `You lose!😣 ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) => {
    const compChoice = computerChoice();
    
    if (userChoice === compChoice) {
        drawgame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        } else {
            console.log("Something went wrong!!");
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});