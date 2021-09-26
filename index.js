const firstPlayer = "X";
const secondPlayer = "O";
let player = 1;
let win = false;
let game = [
	[1, 2, 3],
	[4, 5, 6],
];

/**
 * THE MAIN FUNUCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */

function clickButton(index) {
	if (win) {
		return;
	}
	if (document.getElementById(index).innerHTML.length === 0) {
		return checkWinner(checkPlayer(index));
	} else {
	}
}

// in this function you should check if the player is X or O
function checkPlayer(index) {
	if (player === 1) {
		document.getElementById(index).innerHTML === fillButton(index, firstPlayer);
		player = 2;
	} else if (player === 2) {
		document.getElementById(index).innerHTML ===
			fillButton(index, secondPlayer);
		player = 1;
	}
}

// This function fills
function fillButton(index, text) {
	document.getElementById(index).innerHTML = text;
}

// checkWinner should be a function that checks
// who is winning and returns the winner
function checkWinner(index) {
	if (
		document.getElementById(1).innerHTML === firstPlayer &&
		document.getElementById(2).innerHTML === firstPlayer &&
		document.getElementById(3).innerHTML === firstPlayer
	) {
		winningAlert(firstPlayer);
	} else if (
		document.getElementById(1).innerHTML === secondPlayer &&
		document.getElementById(2).innerHTML === secondPlayer &&
		document.getElementById(3).innerHTML === secondPlayer
	) {
		return winningAlert(secondPlayer);
	} else if (
		document.getElementById(4).innerHTML === firstPlayer &&
		document.getElementById(5).innerHTML === firstPlayer &&
		document.getElementById(6).innerHTML === firstPlayer
	) {
		return winningAlert(firstPlayer);
	} else if (
		document.getElementById(4).innerHTML === secondPlayer &&
		document.getElementById(5).innerHTML === secondPlayer &&
		document.getElementById(6).innerHTML === secondPlayer
	) {
		return winningAlert(secondPlayer);
	} else if (
		document.getElementById(7).innerHTML === firstPlayer &&
		document.getElementById(8).innerHTML === firstPlayer &&
		document.getElementById(9).innerHTML === firstPlayer
	) {
		return winningAlert(firstPlayer);
	} else if (
		document.getElementById(7).innerHTML === secondPlayer &&
		document.getElementById(8).innerHTML === secondPlayer &&
		document.getElementById(9).innerHTML === secondPlayer
	) {
		return winningAlert(secondPlayer);
	} else if (
		document.getElementById(1).innerHTML === firstPlayer &&
		document.getElementById(4).innerHTML === firstPlayer &&
		document.getElementById(7).innerHTML === firstPlayer
	) {
		return winningAlert(firstPlayer);
	} else if (
		document.getElementById(1).innerHTML === secondPlayer &&
		document.getElementById(4).innerHTML === secondPlayer &&
		document.getElementById(7).innerHTML === secondPlayer
	) {
		return winningAlert(secondPlayer);
	} else if (
		document.getElementById(2).innerHTML === firstPlayer &&
		document.getElementById(5).innerHTML === firstPlayer &&
		document.getElementById(8).innerHTML === firstPlayer
	) {
		return winningAlert(firstPlayer);
	} else if (
		document.getElementById(2).innerHTML === secondPlayer &&
		document.getElementById(5).innerHTML === secondPlayer &&
		document.getElementById(8).innerHTML === secondPlayer
	) {
		return winningAlert(secondPlayer);
	} else if (
		document.getElementById(3).innerHTML === firstPlayer &&
		document.getElementById(6).innerHTML === firstPlayer &&
		document.getElementById(9).innerHTML === firstPlayer
	) {
		return winningAlert(firstPlayer);
	} else if (
		document.getElementById(3).innerHTML === secondPlayer &&
		document.getElementById(6).innerHTML === secondPlayer &&
		document.getElementById(9).innerHTML === secondPlayer
	) {
		return winningAlert(secondPlayer);
	} else if (
		document.getElementById(1).innerHTML === firstPlayer &&
		document.getElementById(5).innerHTML === firstPlayer &&
		document.getElementById(9).innerHTML === firstPlayer
	) {
		return winningAlert(firstPlayer);
	} else if (
		document.getElementById(1).innerHTML === secondPlayer &&
		document.getElementById(5).innerHTML === secondPlayer &&
		document.getElementById(9).innerHTML === secondPlayer
	) {
		return winningAlert(secondPlayer);
	} else if (
		document.getElementById(3).innerHTML === firstPlayer &&
		document.getElementById(5).innerHTML === firstPlayer &&
		document.getElementById(7).innerHTML === firstPlayer
	) {
		return winningAlert(firstPlayer);
	} else if (
		document.getElementById(3).innerHTML === secondPlayer &&
		document.getElementById(5).innerHTML === secondPlayer &&
		document.getElementById(7).innerHTML === secondPlayer
	) {
		return winningAlert(secondPlayer);
	}
}

// function restart game
function restartGame() {
	win = false;
	location.reload();
}

// premade a function. You can use this function to present an alert to say somene wins
function winningAlert(winner) {
	win = true;
	document.getElementById("winID").style.display = "flex";
	document.getElementById(
		"winningMsg"
	).innerHTML = `Horraaay, ${winner} Player wins! Play Again?`;
}
