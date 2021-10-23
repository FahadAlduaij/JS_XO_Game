// Premade function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9

// This function fills
function fillButton(index, text) {
	document.getElementById(index).innerHTML = text;
}

const firstPlayer = "X";
const secondPlayer = "O";
let x = [];
let o = [];
let player = 1;
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

/*
 * This function gets executed every time the user clicks the button
 * That interacts with the UI
 */
<<<<<<< HEAD
function clickButton(index) {
	if (win === true) {
		return;
	}
	//-----------------------------------------------
	else if (win === false) {
		if (document.getElementById(index).innerHTML.length === 0) {
			checkWinner(checkPlayer(index));
		}
=======

function clickButton(index) {
	if (win) {
		return;
	}
	if (document.getElementById(index).innerHTML.length === 0) {
		return checkWinner(checkPlayer(index));
	} else {
>>>>>>> 4bc9a72221f69004ab0893b94108d22b240b1095
	}
}

// in this function you should check if the player is X or O
function checkPlayer(index) {
	if (player === 1) {
		document.getElementById(index).innerHTML === fillButton(index, firstPlayer);
		player = 2;
<<<<<<< HEAD
		x.push(index);
=======
>>>>>>> 4bc9a72221f69004ab0893b94108d22b240b1095
	} else if (player === 2) {
		document.getElementById(index).innerHTML ===
			fillButton(index, secondPlayer);
		player = 1;
<<<<<<< HEAD
		o.push(index);
	}
}
// testing stash
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
=======
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
>>>>>>> 4bc9a72221f69004ab0893b94108d22b240b1095
	}
}

// function restart game
function restartGame() {
	win = false;
<<<<<<< HEAD
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
=======
	location.reload();
}

// premade a function. You can use this function to present an alert to say somene wins
>>>>>>> 4bc9a72221f69004ab0893b94108d22b240b1095
function winningAlert(winner) {
	win = true;
	document.getElementById("winID").style.display = "flex";
	document.getElementById(
		"winningMsg"
	).innerHTML = `Horraaay, ${winner} Player wins! Play Again?`;
<<<<<<< HEAD
}

// Draw Function
function drawAlert() {
	document.getElementById("winID").style.display = "flex";
	document.getElementById("winningMsg").innerHTML = `It's a DRAW!!`;
	win = true;
=======
>>>>>>> 4bc9a72221f69004ab0893b94108d22b240b1095
}
