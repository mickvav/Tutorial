function getmax3(arrey) {
  let newArray = [];

  for (let i = 0; i < 3; i += 1) {
    let biggestNumber = Math.max(...arrey);
    arrey.pop(biggestNumber);
  }
  return arrey;
}

console.log(getmax3([1, 2, 3, 90, 91, 92]));
