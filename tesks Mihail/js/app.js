function getmax3(arrey) {
  const bigNumArrey = [];
  const justBigNumArrey = [];
  let count = 3;

  getBigNumArrey();
  function getBigNumArrey() {
    for (let i = 0; i < count; i += 1) {
      let biggestNumber = Math.max(...arrey);
      let position = arrey.indexOf(biggestNumber);
      if (bigNumArrey.includes(biggestNumber)) {
        count += 1;
      }

      bigNumArrey.push(biggestNumber);
      arrey.splice(position, 1);
    }
    return bigNumArrey;
  }

  justBigest();
  function justBigest() {
    for (let i = 0; i < bigNumArrey.length; i += 1) {
      // let position2 = bigNumArrey.indexOf(i);
      if (bigNumArrey.includes(bigNumArrey[i])) {
        justBigNumArrey.push(bigNumArrey[i]);
      }
      bigNumArrey.splice(justBigNumArrey.indexOf(bigNumArrey[i]), 1);
    }
    return justBigNumArrey;
  };

  return justBigNumArrey;
}
console.log(getmax3([1, 2, 3, 4, 5, 5, 4, 3, 2, 1]));
