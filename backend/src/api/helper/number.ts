export const numberToReal = (numero) => {
    var number = numero.toFixed(2).split('.');
    number[0] = "R$ " + number[0].split(/(?=(?:...)*$)/).join('.');
    return number.join(',');
}
