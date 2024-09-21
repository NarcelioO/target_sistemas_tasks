function fibonacci(Number){
    let a = 0
    let b = 1
    let fib
    for(fib = b; fib< Number ;fib = a +b){
        a = b
        b = fib
    }
    return fib === Number

}

console.log(fibonacci(232))