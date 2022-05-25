function getMax (arr){
    
    var x =arr [0]
    for (var i=0; i<=arr.length; i++) {
        if (x<arr[i]) {
            x=arr[i]
        }
    }
    return (x)
}

function test1 (){
    let arr = []
    for (var i=40;i>0;i--) {
    arr.push(i);
    }
    return getMax(arr)
}

    function test2 (){
        let arr = []
        for (var i=80;i>0;i--) {
        arr.push(i);
        }
        return getMax(arr)
    }

    function test3 (){
        let arr = []
        // for (var i=40;i>0;i--) {
        // arr.push(i);
        // }
        return getMax(arr)
    }
    document.write (test1(),"<br/>")   
    document.write (test2(),"<br/>")
    document.write (test3())