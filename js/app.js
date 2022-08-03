function getmax3(arrey) {
  let newArray = arrey;
  for (let i =0; i<3; i+=1){
  let biggestNumber = Math.max(...newArray);
  const deletedBiggestNumber = 
  newArray.splice(newArray.indexOf(biggestNumber),1);
  console.log(newArray);}
}


 getmax3([5, 1, 8, 4, 3]);

