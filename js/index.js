let computerNumber;
let start_game_area = document.getElementById("start_game_area");
let game_start_now = document.getElementById("game_start_now");
let userPreVal = [];
let maxattempts;
let newgamebtn = document.getElementById("newgamebtn");
let userCurrentVal = document.getElementById("userGussNum");
function init() {
  computerNumber = Math.floor(Math.random() * 100);
  game_start_now.style.display = "none";
}

function onChangeHandler() {
  let userGussNum = Number(userCurrentVal.value);

  userPreVal = [...userPreVal, userGussNum];
  document.getElementById("uval").innerHTML = userPreVal;
  if (userPreVal.length < maxattempts) {
    if (computerNumber > userGussNum) {
      document.getElementById("hint").innerHTML = "Your guess is Low";
    } else if (computerNumber < userGussNum) {
      document.getElementById("hint").innerHTML = "Your guess is High";
    } else if (computerNumber === userGussNum) {
      document.getElementById("hint").innerHTML = "Your guess is correct";
      setTimeout(() => {
        newgamebtn.style.display = "block";
        userCurrentVal.setAttribute("disabled", "true");
        document.getElementById("hint").innerHTML = "Congratulation! You win";
      }, 0);
    }
  } else {
    if (computerNumber !== userGussNum) {
      setTimeout(() => {
        newgamebtn.style.display = "block";
        userCurrentVal.setAttribute("disabled", "true");
        document.getElementById("hint").innerHTML =
          "Game over, correct number was " + computerNumber;
      }, 0);
    } else {
      setTimeout(() => {
        newgamebtn.style.display = "block";
        userCurrentVal.setAttribute("disabled", "true");
        document.getElementById("hint").innerHTML = "Congratulation! You win";
      }, 0);
    }
  }
  userCurrentVal.value = "";
  let finalmaxattempts = maxattempts - userPreVal.length;

  document.getElementById("attempts").innerHTML = finalmaxattempts;
}

function newgame() {
  newgamebtn.style.display = "none";
  game_start_now.style.display = "none";
  start_game_area.style.display = "block";
  window.location.reload();
}

function startgame() {
  document.getElementById("attempts").innerHTML = maxattempts;
  game_start_now.style.display = "block";
  start_game_area.style.display = "none";
}
function easymode() {
  maxattempts = 10;
  startgame();
}
function hardmode() {
  maxattempts = 5;
  startgame();
}
