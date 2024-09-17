function comparaNumeros(x, y) {
    if( x === y) {
        console.log('Os números inseridos são iguais')
    } else if(x > y) {
        console.log(`${x} é maior que ${y}`)
    } else {
        console.log(`${y} é maior que ${x}`)
    }
}

comparaNumeros(2, 12)