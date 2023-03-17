// Armazenar os dados dos inputs ao clicar no botao
const inputNome = document.getElementById('inputNome');
const inputPortas = document.getElementById('inputPortas');
const inputBlindagem = document.getElementById('inputBlindagem');
const inputMunicao = document.getElementById('inputMunicao');
const radioMilitar = document.getElementById('radioMilitar');
const radioCivil = document.getElementById('radioCivil');
const tipo = document.getElementById('Tipo')
const btnAdd = document.getElementById('btnAdd');

class Carro{
    constructor(par_nome, par_portas){
        this.nome=par_nome;
        this.portas=par_portas;
    }
}

class Militar extends Carro{
    constructor(par_nome, par_portas, par_blindagem, par_municao){
        super(par_nome, par_portas);
        this.blindagem=par_blindagem;
        this.municao=par_municao;
    }
}

const carros = []
const carMilitares = []

btnAdd.addEventListener('click', ()=>{
    let nome = inputNome.value;
    let portas = inputPortas.value;
    let blindagem = inputBlindagem.value;
    let municao = inputMunicao.value;
    if(radioMilitar.checked){
        if(nome == 0) {
            alert('Digite um Nome!')
        }else if(portas == 0) {
            alert('O Número de Portas deve Ser Diferente de 0!')
        }else if(blindagem < 0){
            alert('A Blindagem Não Pode Ser Menor que 0')
        }else if(municao < 0){
            alert('A Munição não pode ser menor que 0')
        }else {
            let militar = new Militar(nome, portas, blindagem, municao);
            carros.push(militar);
            carMilitares.push(militar);
            console.log(carros);
            console.log(carMilitares)
        }
    }
    if(radioCivil.checked){
        if(inputNome.value == 0) {
            alert('Digite um Nome!')
        }else if(inputPortas.value == 0) {
            alert('O Número de Portas deve Ser Diferente de 0!')
        }else {
            console.log('tudo certo')
        }
    }
})

// Efeitos ao clicar nos tipos

radioCivil.addEventListener('change', ()=>{
    inputBlindagem.setAttribute('readonly', true);
    inputBlindagem.classList.remove('militarMarcado')
    inputBlindagem.value = 0;
    inputMunicao.setAttribute('readonly', true);
    inputMunicao.classList.remove('militarMarcado')
    inputMunicao.value = 0;
})

radioMilitar.addEventListener('change', ()=>{
    inputBlindagem.removeAttribute('readonly');
    inputBlindagem.classList.add('militarMarcado')
    inputMunicao.removeAttribute('readonly');
    inputMunicao.classList.add('militarMarcado')
})