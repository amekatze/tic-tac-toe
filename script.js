
const tictactoe = (function(){
    const Player = (symbol) => {
        return {
            symbol,
            combination : [],
        }
    }    

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5],
        [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    // PLAYER
    const player1 = Player('x');
    const player2 = Player('o');
    let activePlayer;

    // DOM -- BOARD
    const winMessage = document.getElementById('win-message')
    const winner = document.getElementById('winner')
    const restartButton = document.getElementById('restart')
    const cells = document.querySelectorAll(".cell")
    let board = Array.from(cells)
    restartButton.addEventListener("click", restartGame)

    // GAME 
    function gameStart(){
        activePlayer = player2;
        cells.forEach(cell => cell.addEventListener('click', playerMove, {once :true}))
    }

    gameStart()

    function playerMove(){
        activePlayer = activePlayer == player1 ? player2 : player1;
        this.classList.add(activePlayer.symbol)
        checkWin(this)
        }  



    function checkWin(i){
        activePlayer.combination.push(board.indexOf(i))
        const win = winningCombinations.some(comb => comb.every(pcomb => activePlayer.combination.includes(pcomb)))
        if (win == true){ 
            winMessage.style.visibility = 'visible'
            winner.innerText = `${activePlayer.symbol} wins!`
        }
    }

    function restartGame(){
        winMessage.style.visibility = 'hidden'
        cells.forEach(cell => {
            cell.classList.remove('x')
            cell.classList.remove('o')
            player1.combination = []
            player2.combination = []
            gameStart()
        })
    }





    //function computer(){
        // Ai Plays after Player
        // Looks for Index that Player played first number,
        // removes all arrays that need that index
        // picks index that has most arrays  
                //console.log(player1.combination)
                //const minMax = winningCombinations.filter(comb => {
                    //return player1.combination.every(num => {
                        //return comb.includes(num)})
                //})
                //console.log(minMax)
            //}



})();

