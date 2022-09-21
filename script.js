
const tictactoe = (function(){
    const Player = (symbol, name) => {
        return {
            symbol,
            name,
            combination : [],
        }
    }    

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const player1 = Player('x');
    const player2 = Player('o');
    let activePlayer = player1;

    const cells = document.querySelectorAll(".cell")
    let board = Array.from(cells)
    cells.forEach(cell => cell.addEventListener('click', playerMove, {once :true}))
    function playerMove(){
        this.classList.add(activePlayer.symbol)
        checkWin(this)
    }
    function switchTurns(){ 
    return activePlayer = activePlayer == player1 ? player2 : player1;
    }

    function checkWin(i){
        activePlayer.combination.push(board.indexOf(i))
        const win = winningCombinations.some(comb => comb.every(pcomb => activePlayer.combination.includes(pcomb)))
        if (win == true){ console.log(`${activePlayer.symbol} wins!`)}
        else { switchTurns() };
}
})();

