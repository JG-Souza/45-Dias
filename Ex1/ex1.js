// Arrow Function IIFE

((conversao, graus) => {
    if(conversao === 'cToF'){
        const resultado = (graus * 1.8) + 32
        console.log(resultado)
    } else if(conversao === 'fToC'){
        const resultado = (graus - 32) / 1.8
        console.log(resultado)
    }
})('fToC', 40);

// Ou

((conversao, graus) => {
    const formulas = {
        cToF: graus => (graus * 1.8) + 32,
        fToC: graus => (graus - 32) / 1.8
    };
    
    console.log(formulas[conversao](graus));
})('fToC', 40);
