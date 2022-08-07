function getmax3(arrey) {
  let newArray = arrey;

  for (let i =0; i<3; i+=1) {
  let biggestNumber = Math.max(...newArray);
  newArray.splice(newArray.indexOf(biggestNumber),1);
  
}
return newArray;
}


 console.log(getmax3([5, 1, 8, 10, 4, 90, 1, 92, 93, 3]));



 
 function getmax4(arrey) {

   for (let i = 0; i < 4; i += 1) {
     let biggestNumber = Math.max(...arrey);
     arrey.pop(biggestNumber);
   }
   return arrey;
 }

console.log(getmax4([1, 2, 3, 90, 91, 92]));
