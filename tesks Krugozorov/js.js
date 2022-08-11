function f5() {
  let randomNumberFive = Math.round(Math.random() * (5 - 1) + 1);
  return randomNumberFive;
}

function f7() {
  let getRandomFive = f5();
  let randomNumberSeven = Math.round((getRandomFive * 7) / 5);
  return console.log(randomNumberSeven);
}

f7();
