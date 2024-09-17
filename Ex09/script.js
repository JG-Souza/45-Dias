let tarifa = 2.5
let tipoUsuario = 'Regular'
function calcTarifa(idade, tipoUsuario) {
    if(idade < 6) {
        tarifa = 0
    } else if(tipoUsuario == 'Estudante') {
        tarifa = tarifa * 50/100
    } else if (idade > 60) {
        tarifa = tarifa * 70/100
    }
    console.log(tarifa)
}

calcTarifa(61, 'Estudante')