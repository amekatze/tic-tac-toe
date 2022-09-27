
const tictactoe = (function(){

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5],
        [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    
    // PLAYER  
    const Player = (symbol, type) => {
        return {
            symbol,
            type,
            combination : [],
            makeMove(cell){
                if (type == 'Human') {
                cell.classList.add(symbol);
                checkWin(cell)
                }
            }
        }
    }  
    

    
    const player1 = Player('x', 'Human');
    const player2 = Player('o', 'Human');
    let activePlayer;

    function setPlayer(){
        let setting;
        if (player2.type == 'Computer') setting = 'Human';
        else setting = 'Computer';
        player2.type = setting;
        playerSelect.innerText = setting;
    }


    // DOM -- BOARD
    const winMessage = document.getElementById('win-message')
    const winner = document.getElementById('winner')
    const restartButton = document.getElementById('restart')
    const cells = document.querySelectorAll(".cell")
    let board = Array.from(cells)
    let playAble = [0,1,2,3,4,5,6,7,8]
    restartButton.addEventListener('click', restartGame)
    const playerSelect = document.getElementById('player2');
    playerSelect.addEventListener('click', setPlayer)

    // GAME 
    function gameStart(){
        activePlayer = player2;
        cells.forEach(cell => cell.addEventListener('click', takeTurns, {once :true}))
    }
    
    gameStart()

    function takeTurns(){
        activePlayer = activePlayer == player1? player2 : player1;
        activePlayer.makeMove(this)
        if (player2.type == 'Computer') computer();
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
            playAble = [0,1,2,3,4,5,6,7,8]
            gameStart()
        })
    }



    function computer(){
        activePlayer = player2;
        playAble = playAble.filter(cell => !player1.combination.includes(cell) && !player2.combination.includes(cell))
        let num = Math.floor(Math.random() * playAble.length);
        let cell = cells[playAble[num]];
        cell.classList.add(activePlayer.symbol);
        console.log(cell, playAble, num)
        checkWin(cell)
    }

})();

