function Multiply(a,b){
    function multiply (x,y){
        return x * y
    }
    return multiply.apply(null,[a,b])

}

console.log(Multiply(5,8))