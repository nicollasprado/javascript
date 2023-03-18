// Armazenar os dados dos inputs ao clicar no botao
const inputNome = document.getElementById('inputNome');
const inputPortas = document.getElementById('inputPortas');
const inputBlindagem = document.getElementById('inputBlindagem');
const inputMunicao = document.getElementById('inputMunicao');
const radioMilitar = document.getElementById('radioMilitar');
const radioCivil = document.getElementById('radioCivil');
const tipo = document.getElementById('Tipo');
const divRes = document.getElementById('resultado');
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

// Evento Criar Item

const criarItem = (par_tipo, par_nome, par_portas, par_blindagem, par_municao)=>{
    let restxt = document.createElement('div');
    restxt.classList.add('novoResultado');
    divRes.appendChild(restxt);
    if(par_tipo == 'Militar') {
        restxt.innerHTML = `Nome: <strong>${par_nome}</strong><br>Tipo: <strong>${par_tipo}</strong><br>Portas: <strong>${par_portas}</strong><br>Blindagem: <strong>${par_blindagem}</strong><br>Munição: <strong>${par_municao}</strong><br>`;
    } else if(par_tipo == 'Civil') {
        restxt.innerHTML = `Nome: <strong>${par_nome}</strong><br>Tipo: <strong>${par_tipo}</strong><br>Portas: <strong>${par_portas}`;
    }
}

// Evento Mostrar Opções - Arrumar!

let mostrarOpcoes = ()=>{
    let resitem = [...document.querySelectorAll('.novoResultado')];
    resitem.map((item)=>{
    item.addEventListener('click', ()=>{
        let divOpcoes = document.createElement('div');
        divOpcoes.classList.add('divOpcoes')
        let remover = document.createElement('p');
        remover.classList.add('btnRemover')
        let modificar = document.createElement('p');
        modificar.classList.add('btnModificar')
        remover.innerText = 'REMOVER';
        modificar.innerText = 'MODIFICAR';
        // Testa se ja existe uma div de opções

        // CONSERTAR DEPOIS
        if(item.childElementCount === 11) {
            itemNovo = item.lastChild;
            item.removeChild(itemNovo);
        }else {
            divOpcoes.appendChild(remover);
            divOpcoes.appendChild(modificar);
            item.appendChild(divOpcoes);
        }
    })
})
}

// Evento de click no botão adicionar

const carros = []
const carMilitares = []

btnAdd.addEventListener('click', ()=>{
    let nome = inputNome.value;
    let portas = inputPortas.value;
    let blindagem = inputBlindagem.value;
    let municao = inputMunicao.value;
    if(radioMilitar.checked){
        if(nome == 0) {
            alert('Digite um Nome!');
        }else if(portas == 0) {
            alert('O Número de Portas deve Ser Diferente de 0!');
        }else if(blindagem < 0){
            alert('A Blindagem Não Pode Ser Menor que 0');
        }else if(municao < 0){
            alert('A Munição não pode ser menor que 0');
        }else {
            const militar = new Militar(nome, portas, blindagem, municao);
            if(municao === undefined) {
                return 0;
            }
            carros.push(militar);
            carMilitares.push(militar);
            criarItem('Militar', nome, portas, blindagem, municao);
            mostrarOpcoes();
        }
    }
    if(radioCivil.checked){
        if(inputNome.value == 0) {
            alert('Digite um Nome!');
        }else if(inputPortas.value == 0) {
            alert('O Número de Portas deve Ser Diferente de 0!');
        }else {
            let civil = new Carro(nome, portas);
            carros.push(civil);
            console.log(carros);
            criarItem('Civil', nome, portas)
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