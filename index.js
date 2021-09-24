// Premade function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills
  document.getElementById(index).innerHTML = text;
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// Delete this code once you are done testing


/**
 *
 * THE MAIN FUNUCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */

 const firstplayer =  'X';
 const secondplayer = 'O';
 let player = 1;
 let win = false;
 let winGame = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

function clickButton(index) {
  if (document.getElementById(index).innerHTML.length === 0) { 
    return checkWinner(checkPlayer(index))
  }
  else {}
} 

// in this function you should check if the player is X or O
function checkPlayer(index) {
  // ....
  if (player === 1) {
    document.getElementById(index).innerHTML === fillButton(index,firstplayer)
    player = 2;
  }
  else if (player = 2) {
    document.getElementById(index).innerHTML === fillButton(index,secondplayer)
    player = 1;
  }
}
// let winGame = [
//   [0,1,2], Done 
//   [3,4,5], Done
//   [6,7,8], Done
//   [0,3,6], Done
//   [1,4,7], Done
//   [2,5,8], Done
//   [0,4,8],Done
//   [2,4,6]
// ];
/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */
function checkWinner(index) {
  if (document.getElementById(1).innerHTML === firstplayer
  &&  document.getElementById(2).innerHTML === firstplayer
  &&  document.getElementById(3).innerHTML === firstplayer 
  ) { winningAlert(firstplayer) 
      win = false } 

  else if (document.getElementById(1).innerHTML === secondplayer
  &&  document.getElementById(2).innerHTML === secondplayer
  &&  document.getElementById(3).innerHTML === secondplayer 
  ) {return winningAlert(secondplayer)}

  else if (document.getElementById(4).innerHTML === firstplayer
  &&  document.getElementById(5).innerHTML === firstplayer
  &&  document.getElementById(6).innerHTML === firstplayer 
  ) {return winningAlert(firstplayer)}

  else if (document.getElementById(4).innerHTML === secondplayer
  &&  document.getElementById(5).innerHTML === secondplayer
  &&  document.getElementById(6).innerHTML === secondplayer 
  ) {return winningAlert(secondplayer)}

  else if (document.getElementById(7).innerHTML === firstplayer
  &&  document.getElementById(8).innerHTML === firstplayer
  &&  document.getElementById(9).innerHTML === firstplayer 
  ) {return winningAlert(firstplayer)}

  else if (document.getElementById(7).innerHTML === secondplayer
  &&  document.getElementById(8).innerHTML === secondplayer
  &&  document.getElementById(9).innerHTML === secondplayer 
  ) {return winningAlert(secondplayer)}

  else if (document.getElementById(1).innerHTML === firstplayer
  &&  document.getElementById(4).innerHTML === firstplayer
  &&  document.getElementById(7).innerHTML === firstplayer 
  ) {return winningAlert(firstplayer)}

  else if (document.getElementById(1).innerHTML === secondplayer
  &&  document.getElementById(4).innerHTML === secondplayer
  &&  document.getElementById(7).innerHTML === secondplayer 
  ) {return winningAlert(secondplayer)}

  else if (document.getElementById(2).innerHTML === firstplayer
  &&  document.getElementById(5).innerHTML === firstplayer
  &&  document.getElementById(8).innerHTML === firstplayer 
  ) {return winningAlert(firstplayer)}

  else if (document.getElementById(2).innerHTML === secondplayer
  &&  document.getElementById(5).innerHTML === secondplayer
  &&  document.getElementById(8).innerHTML === secondplayer 
  ) {return winningAlert(secondplayer)}

  else if (document.getElementById(3).innerHTML === firstplayer
  &&  document.getElementById(6).innerHTML === firstplayer
  &&  document.getElementById(9).innerHTML === firstplayer 
  ) {return winningAlert(firstplayer)}

  else if (document.getElementById(3).innerHTML === secondplayer
  &&  document.getElementById(6).innerHTML === secondplayer
  &&  document.getElementById(9).innerHTML === secondplayer 
  ) {return winningAlert(secondplayer)}

  else if (document.getElementById(1).innerHTML === firstplayer
  &&  document.getElementById(5).innerHTML === firstplayer
  &&  document.getElementById(9).innerHTML === firstplayer 
  ) {return winningAlert(firstplayer)}

  else if (document.getElementById(1).innerHTML === secondplayer
  &&  document.getElementById(5).innerHTML === secondplayer
  &&  document.getElementById(9).innerHTML === secondplayer 
  ) {return winningAlert(secondplayer)}

  else if (document.getElementById(3).innerHTML === firstplayer
  &&  document.getElementById(5).innerHTML === firstplayer
  &&  document.getElementById(7).innerHTML === firstplayer 
  ) {return winningAlert(firstplayer)}

  else if (document.getElementById(3).innerHTML === secondplayer
  &&  document.getElementById(5).innerHTML === secondplayer
  &&  document.getElementById(7).innerHTML === secondplayer 
  ) {return winningAlert(secondplayer)}
}

// function restart game
  function restartGame() {
    location.reload()
  }
// premade a function. You can use this function to present an alert to say somene wins
function winningAlert(winner) {
  
  document.getElementById('winID').style.display = 'flex'
  document.getElementById('winningMsg').innerHTML = `Horraaay, ${winner} Player wins! Play Again?`
  document.getElementsByClassName('xobutton').disabled = false
}
