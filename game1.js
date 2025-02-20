let userscore =0;
let compscore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

const drawGame = () =>{
    console.log("Draw Game!");
    msg.innerText = "Game was Draw ,Let's Play Again !";
    msg.style.backgroundColor = "rgb(0, 0, 0)";

};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = "You Win!"; //to show on the msg-box
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = "You loose!";//to show on the msg-box
        msg.style.backgroundColor = "red";
    }
};

const playGame =(userChoice) => {
    console.log("user choice", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice", compChoice);

    if(userChoice === compChoice){
        //draw
        drawGame();
    }else {
        let userWin = true; //user choice to choose the game
        if(userChoice === "rock"){
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, compChoice, userChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});