let resultado = 0
const botao = document.getElementById('botao')

botao.addEventListener('click', () => {
    const inputN1 = document.getElementById('inputN1')
    const inputN2 = document.getElementById('inputN2')
    const n1 = Number(inputN1.value)
    const n2 = Number(inputN2.value)
    const select = document.getElementById('select')
    const operador = select.value
    console.log(operador)
    switch(operador) {
        case 'soma':
            resultado = n1 + n2
            break;
    
        case 'subtracao':
        resultado = n1 - n2
            break;
    
        case 'multiplicacao':
            resultado = n1 * n2
            break
    
        case 'divisao':
            if(n2 != 0) {
            resultado = n1 / n2
            } else {
                resultado = 'ERRO! Divisão por 0'
            }
            break
        default:
            resultado = 'Operação inválida';
            break;
            
    }
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
})
