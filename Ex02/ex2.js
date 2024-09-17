// Arrow Function IIFE

((peso, altura) => {
    const imc = peso / (Math.pow(altura, 2))
    console.log(imc)
})(70, 1.78);

// ou

const calcularIMC = (peso, altura) => {
    const imc = peso / (altura ** 2); // Usando o operador de exponenciação
    console.log(imc);
};

calcularIMC(70, 1.78);

