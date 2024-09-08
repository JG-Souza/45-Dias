function calcRetangulo(l1, l2){
    const area = l1 * l2
    const perimetro = (l1 * 2) + (l2 * 2)
    console.log(`Um retângulo de lados ${l1} e ${l2} possui ${area} de área e ${perimetro} de perimetro`)
}

calcRetangulo(2, 4)