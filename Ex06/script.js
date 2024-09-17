function classificaIdade(idade) {
    if(idade <= 12) {
        console.log(`Uma pessoa de ${idade} anos é uma criança`)
    } else if(idade > 12 && idade <= 17) {
        console.log(`Uma pessoa de ${idade} anos é um adolescente`)
    } else if (idade > 17 && idade <= 59) {
        console.log(`Uma pessoa de ${idade} anos é um adulto`)
    } else {
        console.log(`Uma pessoa de ${idade} anos é um idoso`)
    }
}

classificaIdade(1)