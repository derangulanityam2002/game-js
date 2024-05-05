"use strict";
/*console.log(document.querySelector(".message"));
document.querySelector(".message").textContent = "currect number";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);*/
let secretenumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// efunction is calling the method but i am not using aleready writetit so in dont use the calling function
let displaymessage = function (message) {
  document.querySelector(".message").textContent = message;

  // when find out the number user
  document.querySelector(".number").textContent = secretenumber;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when thire is no input

  if (!guess) {
    displaymessage("no number");

    //when player win
  } else if (guess === secretenumber) {
    displaymessage("currect number you played well");
    document.querySelector(".number").textContent = secretenumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      console.log(
        (document.querySelector(".highscore").textContent = highscore)
      );
    }
  } else if (guess !== secretenumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretenumber ? "too high" : "too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game ";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//when guess is too high

let again = document
  .querySelector(".again")
  .addEventListener("click", function () {
    score = 20;
    let secretenumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
  });
