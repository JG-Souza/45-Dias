function fibonacciAteN(n) {
    let fib = [0, 1]

    while (true) {
        let proximo = fib[fib.length - 1] + fib[fib.length -2]
        if (proximo > n) break
        fib.push(proximo)
    }

    return fib
}

console.log(fibonacciAteN(55))