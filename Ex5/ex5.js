function verificaDivisibilidade(x, y) {
    if(x % y === 0) {
        console.log(`${x} é divisível por ${y}`)
    } else{
        let resto = x % y
        console.log(`${x} não é divisível por ${y} pois sobra ${resto} em sua divisão`)
    }
}

verificaDivisibilidade(19, 2)