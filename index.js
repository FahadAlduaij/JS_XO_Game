let gameStarted = false;
let gameStatus = false;
const firstPlayer = "X";
const secondPlayer = "O";
let player = 1;
let x = [];
let o = [];
let win = false;
const roles = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7],
];

// const roles = [
// 	[0, 1, 2],
// 	[3, 4, 5],
// 	[6, 7, 8],
// 	[0, 3, 6],
// 	[1, 4, 7],
// 	[2, 5, 8],
// 	[0, 4, 8],
// 	[2, 4, 6],
// ];

// This function Change the button text
function startGame() {
	if (!gameStarted) {
		document.getElementById("restartButton").innerHTML = "Restart";
		gameStarted = true;
	} else {
		document.getElementById("restartButton").innerHTML = "Restart";
		restartGame();
	}
}

// This function fills
function fillButton(index, text) {
	document.getElementById(index).innerHTML = text;
}

/*
 * This function gets executed every time the user clicks the button
 * That interacts with the UI
 */
function clickButton(index) {
	if (win || !gameStarted) {
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
		x.push(index);
	} else if (player === 2) {
		document.getElementById(index).innerHTML ===
			fillButton(index, secondPlayer);
		player = 1;
		o.push(index);
	}
}

/*
 * checkWinner a function that checks
 * who is winning and returns the winner
 */
function checkWinner(index) {
	if (x.join("") === roles[0].join("") || o.join("") === roles[0].join("")) {
		return winningAlert(index);
	} else if (
		x.join("") === roles[1].join("") ||
		o.join("") === roles[1].join("")
	) {
		return winningAlert(index);
	} else if (
		x.join("") === roles[2].join("") ||
		o.join("") === roles[2].join("")
	) {
		return winningAlert(index);
	} else if (
		x.join("") === roles[3].join("") ||
		o.join("") === roles[3].join("")
	) {
		return winningAlert(index);
	} else if (
		x.join("") === roles[4].join("") ||
		o.join("") === roles[4].join("")
	) {
		return winningAlert(index);
	} else if (
		x.join("") === roles[5].join("") ||
		o.join("") === roles[5].join("")
	) {
		return winningAlert(index);
	} else if (
		x.join("") === roles[6].join("") ||
		o.join("") === roles[6].join("")
	) {
		return winningAlert(index);
	} else if (
		x.join("") === roles[7].join("") ||
		o.join("") === roles[7].join("")
	) {
		return winningAlert(index);
	} else if (
		x.join("") === roles[8].join("") ||
		o.join("") === roles[8].join("")
	) {
		return winningAlert(index);
	}
}

// function restart game
function restartGame() {
	win = false;
	player = 1;
	document.getElementById("1").innerHTML = "";
	document.getElementById("2").innerHTML = "";
	document.getElementById("3").innerHTML = "";
	document.getElementById("4").innerHTML = "";
	document.getElementById("5").innerHTML = "";
	document.getElementById("6").innerHTML = "";
	document.getElementById("7").innerHTML = "";
	document.getElementById("8").innerHTML = "";
	document.getElementById("9").innerHTML = "";
	document.getElementById("winID").style.display = "none";
	x = [];
	o = [];

	// location.reload(); Old Approach XD
}

// Wins Function
function winningAlert(winner) {
	win = true;
	document.getElementById("winID").style.display = "flex";
	document.getElementById(
		"winningMsg"
	).innerHTML = `Horraaay, ${winner} Player wins! Play Again?`;
}

// Draw Function
function drawAlert() {
	document.getElementById("winID").style.display = "flex";
	document.getElementById("winningMsg").innerHTML = `It's a DRAW!!`;
	win = true;
}
