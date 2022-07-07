let numero = parseInt(prompt('Dame un numero, y te digo si es primo o no'));

function numeroPrimo(pnumero) {
    //Por convenio el 0 y 1 no son numeros primos, por tanto, los gestiono como números especiales.
    if (pnumero === 0 || pnumero === 1) {
        return false;
    }

    for (let i = 2; i < pnumero; i++) {
        if (pnumero % i === 0) {
            return false;
        }
    };

    return true;
}

function pintarResultado(pboolean) {
    if (pboolean === true) {
        document.write(`El número ${numero} es primo.`);
    } else {
        document.write(`El número ${numero} no es primo.`);
    }
}

let returnFunction = numeroPrimo(numero);
pintarResultado(returnFunction);