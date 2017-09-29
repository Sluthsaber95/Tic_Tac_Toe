const messageToPlayer = document.getElementById("message");
const btn = document.getElementsByClassName("btn");
const restartBtn = document.getElementById("restart");
const scoreBoardX = document.getElementById("score-x-value");
const scoreBoardO = document.getElementById("score-o-value");
const player = {
    "X": [],
    "O": [],
    xScore: 0,
    yScore: 0
}
const winningStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];
let state = [];
let turn = "X";

const winner = () => {
    return winningStates.map(e => e.every(e => player[turn].indexOf(e) > -1))
}
const restartGame = () => {
    player["X"] = [];
    player["O"] = [];
    state = [];
    messageToPlayer.innerHTML = `'Start Game!' ${turn} Plays First`;
    for (let i = 0; i < 9; i++) {
        btn[i].disabled = false;
        btn[i].innerHTML = "";
    }
}
for (let i = 0; i < 9; i++) {
    btn[i].addEventListener("click",
        () => {
            btn[i].disabled = true;
            state.push(i);
            player[turn].push(i)
            btn[i].innerHTML = turn === "X" ? '<img src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/cross-24-128.png" alt="cross">' : '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Small-dark-grey-circle.svg/1000px-Small-dark-grey-circle.svg.png" style="width: 128pX" alt="nought">';
            if (winner().some(e => { return e === true })) {
                messageToPlayer.innerHTML = `Player ${turn}'s has won the game`
                turn === "O" ? scoreBoardO.innerHTML++ : scoreBoardX.innerHTML++;
                for (let i = 0; i < 9; i++) {
                    btn[i].disabled = true;
                }
            } else {
                messageToPlayer.innerHTML = game.length === 9 ? "Both Players Draw!" : `It's now ${turn}'s turn`;
            }
            turn === "X" ? turn = "O" : turn = "X";
        });
}
restartBtn.addEventListener("click", restartGame);