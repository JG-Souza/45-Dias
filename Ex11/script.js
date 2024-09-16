let n = 0

function tabuada(n) {
    for(let i = 0; i < 10; i++)
        console.log(`${n} x ${i + 1} = ${n * (i + 1)}`)
}

tabuada(5)