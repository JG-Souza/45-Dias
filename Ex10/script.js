let n = 0
let soma = n
function loopSoma(n) {
    for(let i = 0; i < (n + 1); i++)
        soma += Number(i)
    console.log(soma)
}

loopSoma(20)