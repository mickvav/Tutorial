function largest (){
    let arr = []
    for (var i=1;i<=20;i++) {
    arr.push(i);}
    var bigNumber=Math.max.apply(null, arr)
      
    document.body.innerHTML =bigNumber
}
    document.write (largest())
