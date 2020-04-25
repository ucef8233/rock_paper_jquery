const image = [
  "images/icon-scissors.svg",
  "images/icon-paper.svg",
  "images/icon-rock.svg",
  "images/icon-spock.svg",
  "images/icon-lizard.svg",
];
let scores = {
  scoreUser: 0,
  scoreOrd: 0,
  score: 0,
};
var ordChoise;

for (let i = 0; i < $(".main__img").length; i++) {
  $(".main__img")[i].addEventListener("click", () => {
    $(".header__img:first").attr("src", image[i]);
    ordChoise = Math.floor(Math.random() * 5);
    $(".header__img:last").attr("src", image[ordChoise]);
    $("#affiches").css("display", "flex");
    $("#scores").css("display", "flex");
    addScore(i, ordChoise);
  });
}
addScore = (a, b) => {
  if (
    (a == 0 && (b == 1 || b == 3)) ||
    (a == 1 && (b == 2 || b == 4)) ||
    (a == 2 && (b == 3 || b == 0)) ||
    (a == 3 && (b == 4 || b == 1)) ||
    (a == 4 && (b == 0 || b == 2))
  ) {
    scores.scoreUser++;
    if (scores.scoreUser == 3) {
      scores.score++;
    }
  } else if (a == b) {
  } else {
    scores.scoreOrd++;
    if (scores.scoreOrd == 3) {
      scores.score--;
    }
  }
  if (scores.scoreUser == 3 || scores.scoreOrd == 3) {
    $("#affiches").css("display", "none");
    $("#scores").css("display", "none");
    scores.scoreUser = 0;
    scores.scoreOrd = 0;
  }
  $(".score:last").text(scores.scoreOrd);
  $(".score:first").text(scores.scoreUser);
  $("#opp").text(scores.score);
};
