const playRoundFactory = () => {
    let currentPlayer = 'playerOne';
    let slotArray = [];
    let winner = '';

    const switchPlayers = () => {
        if (currentPlayer === 'playerOne') {
            currentPlayer = 'playerTwo';
        } else if (currentPlayer === 'playerTwo') {
            currentPlayer = 'playerOne';
        };
    };

    const makeSlotArray = (slot) => {
        slotArray.push(slot);
    };

    const playerStep = (grid) => {
        if (currentPlayer === 'playerOne') {
            if (slotArray[grid.slot] === '') {
                grid.textContent = 'X';
                slotArray[grid.slot] = 'X';
                switchPlayers();
            };
        } else if (currentPlayer === 'playerTwo') {
            if (slotArray[grid.slot] === '') {
                grid.textContent = 'O';
                slotArray[grid.slot] = 'O';
                switchPlayers();
            };
        };
        checkForWinners();
    };

    const checkForWinners = () => {
        console.log(slotArray);
        if (
            slotArray[0] === 'X' && slotArray[1] === 'X' && slotArray[2] === 'X' ||
            slotArray[3] === 'X' && slotArray[4] === 'X' && slotArray[5] === 'X' ||
            slotArray[6] === 'X' && slotArray[7] === 'X' && slotArray[8] === 'X' ||
            slotArray[0] === 'X' && slotArray[3] === 'X' && slotArray[6] === 'X' ||
            slotArray[1] === 'X' && slotArray[4] === 'X' && slotArray[7] === 'X' ||
            slotArray[2] === 'X' && slotArray[5] === 'X' && slotArray[8] === 'X' ||
            slotArray[0] === 'X' && slotArray[4] === 'X' && slotArray[8] === 'X' ||
            slotArray[2] === 'X' && slotArray[4] === 'X' && slotArray[6] === 'X'
        ) {
            alert('Winner is playerOne!');
            winner = 'playerOne';
            startNewGame();
        } else if (
            slotArray[0] === 'O' && slotArray[1] === 'O' && slotArray[2] === 'O' ||
            slotArray[3] === 'O' && slotArray[4] === 'O' && slotArray[5] === 'O' ||
            slotArray[6] === 'O' && slotArray[7] === 'O' && slotArray[8] === 'O' ||
            slotArray[0] === 'O' && slotArray[3] === 'O' && slotArray[6] === 'O' ||
            slotArray[1] === 'O' && slotArray[4] === 'O' && slotArray[7] === 'O' ||
            slotArray[2] === 'O' && slotArray[5] === 'O' && slotArray[8] === 'O' ||
            slotArray[0] === 'O' && slotArray[4] === 'O' && slotArray[8] === 'O' ||
            slotArray[2] === 'O' && slotArray[4] === 'O' && slotArray[6] === 'O'
        ) {
            alert('Winner is playerTwo!');
            winner = 'playerTwo';
            startNewGame();
        };
    };

    const newGame = () => {
        slotArray = [];
        console.log(winner);
        if (winner === 'playerOne') {
            currentPlayer = 'playerTwo';
        } else if (winner === 'playerTwo') {
            currentPlayer = 'playerOne';
        };
        winner = '';
    };

    const slotArrayCheck = () => {
        console.log(slotArray);
    };

    return {
        playerStep,
        makeSlotArray,
        slotArrayCheck,
        newGame,
    };
};

const playRound = playRoundFactory();

const startNewGame = (() => {
    return () => {
        playRound.newGame();
        const playField = document.getElementById('playfield');
        playField.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const grid = document.createElement('div');
            grid.setAttribute('slot', i);
            playField.appendChild(grid);
            playRound.makeSlotArray('');
            grid.addEventListener('click', (e) => {
                let grid = e.target;
                playRound.playerStep(grid);
            });
        };
    };
})();

startNewGame();