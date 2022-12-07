let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const DisplayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    DisplayMessage('No NUmber!');
  } else if (guess === secretNumber) {
    DisplayMessage("Correct Score");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#ff0f7b";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      DisplayMessage(
        document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High" : "Too Low");
        score--;
      document.querySelector(".score").textContent = score;
    }else {
      DisplayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  } 
 });
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  DisplayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#2a9d8f";
  document.querySelector(".number").style.width = "15rem";
});
