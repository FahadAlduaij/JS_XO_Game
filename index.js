// Premade function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
	// This function fills
	document.getElementById(index).innerHTML = text;
}


const firstplayer = "X";
const secondplayer = "O";
let player = 1;
let win = false;
const roles = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
let role = roles.forEach(function(element) {
  element
  })

/*
 * This function gets executed every time the user clicks the button
 * That interacts with the UI
 */
function clickButton(index) {
	if (win === true) {
		return;
	}
	if (win === false) {
		if (document.getElementById(index).innerHTML.length === 0) {
			return checkWinner(checkPlayer(index));
		}
	}
	if (
		(index) =>
			element.forEach((element) => {
				element.length > 0;
			})
	) {
		return drawAlert();
	} else {
	}
}

// in this function you should check if the player is X or O
function checkPlayer(index) {
	if (player === 1) {
		document.getElementById(index).innerHTML === fillButton(index, firstplayer);
		player = 2;
	} else if (player === 2) {
		document.getElementById(index).innerHTML ===
			fillButton(index, secondplayer);
		player = 1;
	}
}

/*
 * checkWinner a function that checks
 * who is winning and returns the winner
 */
function checkWinner(index) {
  if (index === role) {
    winningAlert(firstplayer);
  }

	// if (
	// 	document.getElementById(1).innerHTML === firstplayer &&
	// 	document.getElementById(2).innerHTML === firstplayer &&
	// 	document.getElementById(3).innerHTML === firstplayer
	// ) {
	// 	winningAlert(firstplayer);
	// } else if (
	// 	document.getElementById(1).innerHTML === secondplayer &&
	// 	document.getElementById(2).innerHTML === secondplayer &&
	// 	document.getElementById(3).innerHTML === secondplayer
	// ) {
	// 	return winningAlert(secondplayer);
	// } else if (
	// 	document.getElementById(4).innerHTML === firstplayer &&
	// 	document.getElementById(5).innerHTML === firstplayer &&
	// 	document.getElementById(6).innerHTML === firstplayer
	// ) {
	// 	return winningAlert(firstplayer);
	// } else if (
	// 	document.getElementById(4).innerHTML === secondplayer &&
	// 	document.getElementById(5).innerHTML === secondplayer &&
	// 	document.getElementById(6).innerHTML === secondplayer
	// ) {
	// 	return winningAlert(secondplayer);
	// } else if (
	// 	document.getElementById(7).innerHTML === firstplayer &&
	// 	document.getElementById(8).innerHTML === firstplayer &&
	// 	document.getElementById(9).innerHTML === firstplayer
	// ) {
	// 	return winningAlert(firstplayer);
	// } else if (
	// 	document.getElementById(7).innerHTML === secondplayer &&
	// 	document.getElementById(8).innerHTML === secondplayer &&
	// 	document.getElementById(9).innerHTML === secondplayer
	// ) {
	// 	return winningAlert(secondplayer);
	// } else if (
	// 	document.getElementById(1).innerHTML === firstplayer &&
	// 	document.getElementById(4).innerHTML === firstplayer &&
	// 	document.getElementById(7).innerHTML === firstplayer
	// ) {
	// 	return winningAlert(firstplayer);
	// } else if (
	// 	document.getElementById(1).innerHTML === secondplayer &&
	// 	document.getElementById(4).innerHTML === secondplayer &&
	// 	document.getElementById(7).innerHTML === secondplayer
	// ) {
	// 	return winningAlert(secondplayer);
	// } else if (
	// 	document.getElementById(2).innerHTML === firstplayer &&
	// 	document.getElementById(5).innerHTML === firstplayer &&
	// 	document.getElementById(8).innerHTML === firstplayer
	// ) {
	// 	return winningAlert(firstplayer);
	// } else if (
	// 	document.getElementById(2).innerHTML === secondplayer &&
	// 	document.getElementById(5).innerHTML === secondplayer &&
	// 	document.getElementById(8).innerHTML === secondplayer
	// ) {
	// 	return winningAlert(secondplayer);
	// } else if (
	// 	document.getElementById(3).innerHTML === firstplayer &&
	// 	document.getElementById(6).innerHTML === firstplayer &&
	// 	document.getElementById(9).innerHTML === firstplayer
	// ) {
	// 	return winningAlert(firstplayer);
	// } else if (
	// 	document.getElementById(3).innerHTML === secondplayer &&
	// 	document.getElementById(6).innerHTML === secondplayer &&
	// 	document.getElementById(9).innerHTML === secondplayer
	// ) {
	// 	return winningAlert(secondplayer);
	// } else if (
	// 	document.getElementById(1).innerHTML === firstplayer &&
	// 	document.getElementById(5).innerHTML === firstplayer &&
	// 	document.getElementById(9).innerHTML === firstplayer
	// ) {
	// 	return winningAlert(firstplayer);
	// } else if (
	// 	document.getElementById(1).innerHTML === secondplayer &&
	// 	document.getElementById(5).innerHTML === secondplayer &&
	// 	document.getElementById(9).innerHTML === secondplayer
	// ) {
	// 	return winningAlert(secondplayer);
	// } else if (
	// 	document.getElementById(3).innerHTML === firstplayer &&
	// 	document.getElementById(5).innerHTML === firstplayer &&
	// 	document.getElementById(7).innerHTML === firstplayer
	// ) {
	// 	return winningAlert(firstplayer);
	// } else if (
	// 	document.getElementById(3).innerHTML === secondplayer &&
	// 	document.getElementById(5).innerHTML === secondplayer &&
	// 	document.getElementById(7).innerHTML === secondplayer
	// ) {
	// 	return winningAlert(secondplayer);
	// }
}

// function restart game
function restartGame() {
	win = false;
	location.reload();
}

// Wins Function
function winningAlert(winner) {
	win = true;
	document.getElementById("winID").style.display = "flex";
	document.getElementById(
		"winningMsg"
	).innerHTML = `Horraaay, ${winner} Player wins! Play Again?`;
	document.getElementsByClassName("xobutton").disabled = false;
}

// Draw Function
function drawAlert() {
	document.getElementById("winID").style.display = "flex";
	document.getElementById("winningMsg").innerHTML = `It's a DRAW!!`;
	document.getElementsByClassName("xobutton").disabled = false;
}
