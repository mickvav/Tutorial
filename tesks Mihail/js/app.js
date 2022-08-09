

function getmax4(arrey) {
  const bigNumArrey = [];
  let count = 3;
  for (let i = 0; i < count; i += 1) {
    let biggestNumber = Math.max(...arrey);
    let position = arrey.indexOf(biggestNumber);

    if(bigNumArrey.includes(biggestNumber)) {
      count+=1
    }

    bigNumArrey.push(biggestNumber);
    arrey.splice(position, 1);
  }
  console.log(bigNumArrey);
  return bigNumArrey;
}

console.log(getmax4([1, 2, 3, 4, 5, 5, 4, 3, 2, 1]));
