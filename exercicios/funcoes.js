function parimpar(valor) {
    if (valor%2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}
console.log(parimpar(21))



function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(1, 3))



var teste = function(x) {
    return x*2
}
console.log(teste(5))