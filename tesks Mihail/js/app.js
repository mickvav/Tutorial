
function getmax3(arrey) {
  let newArray = arrey;

  for (let i =0; i<3; i+=1) {
  let biggestNumber = Math.max(...newArray);
  newArray.splice(newArray.indexOf(biggestNumber),1);
  
}
return newArray;
}


 console.log(getmax3([1, 2, 3, 4, 5,    5, 4, 3, 2, 1]));




 function getmax4(arrey) {

   for (let i = 0; i < 4; i += 1) {
     let biggestNumber = Math.max(...arrey);
     let position = arrey.indexOf(biggestNumber);
     arrey.splice(position, 1);
   }
   return arrey;
 }

console.log(getmax4([1, 2, 3, 4, 5,      5, 4, 3, 2, 1]));
