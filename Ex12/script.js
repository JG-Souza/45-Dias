let n = 0;

function isPrimo(n) {
    if (n <= 1) {
        return false;
    } else if (n <= 3) {
        return true;
    } else if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function verifica() {
    if (isPrimo(n)) {
        console.log(`${n} é um número primo`);
    } else {
        console.log(`${n} não é um número primo`);
    }
}

n = 3;
verifica();



