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



let amigo = {
    nome: 'Adriano',
    sexo: 'M',
    peso: 70.6,
    engordar(kg=0){
        console.log('engordou!')
        this.peso += kg
    }
}

amigo.engordar(5)
console.log(`Meu amigo ${amigo.nome} pesa ${amigo.peso}kg`)