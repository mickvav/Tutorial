function getmax3(arrey) {
  let newArray = arrey;

  for (let i =0; i<3; i+=1) {
  let biggestNumber = Math.max(...newArray);
  newArray.splice(newArray.indexOf(biggestNumber),1);
  
}
return newArray;
}


 console.log(getmax3([5, 1, 8, 10, 4, 90, 1, 92, 93, 3]));
