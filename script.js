
const game = (function(){
    const circle = 'o';
    const x = 'x'
    let currentPlayer = x;
    let board = []
 
    const cells = document.querySelectorAll(".cell")
    cells.forEach(cell => cell.addEventListener('click', playerMove, {once :true}))
    function playerMove(){
        this.classList.add(currentPlayer)
        checkWin()
        switchTurns()
    }
    function switchTurns(){
        currentPlayer = currentPlayer == x ? circle : x;
        return currentPlayer
    }

    function checkWin(){
    }
})();

