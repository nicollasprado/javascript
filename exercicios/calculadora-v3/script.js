const teclas = [...document.querySelectorAll('.tecla')];
const teclasSimbolo = [...document.querySelectorAll('.teclaSimbolo')]
const teclaIgual = document.getElementById('teclaIgual')
const displayTxt = document.getElementById('display');

// Função para amostragem no display
function criar(tecla, tipo){
    let novoNumero = document.createElement('p');
    if(displayTxt.firstElementChild.innerHTML == "0"){
        displayTxt.removeChild(displayTxt.firstElementChild)
        displayTxt.appendChild(novoNumero);
        novoNumero.innerText = tecla.innerText;
    }else{
        displayTxt.appendChild(novoNumero);
        novoNumero.innerText = tecla.innerHTML;
    }
    if(tipo == 'operador') {
        novoNumero.setAttribute('class', 'operador')
    }
}

// Teste Lógico, tem alguma tecla de operação clicada?
function testar(tecla){
    let clicadas = [...document.querySelectorAll('.operador')];
    if(clicadas.length == 1){
        let clicada = document.querySelector('.operador')
        displayTxt.removeChild(clicada)
        criar(tecla, 'operador')
    }else{
        criar(tecla, 'operador')
    }
}

// Log da tecla clicada e envio para a funcao de criação
teclas.forEach((tecla)=>{
    tecla.addEventListener('click', ()=>{
        criar(tecla)
    })
})

// Log da tecla clicada e envio para a funcao de teste logico
teclasSimbolo.forEach((tecla)=>{
    tecla.addEventListener('click', ()=>{
        testar(tecla);
    })
})

// Evento ao clicar nas teclas de Funções

// Tecla C funcionalidades
let teclaC = document.getElementById('teclaC');
teclaC.addEventListener('click', ()=>{
    let ultimoNum = displayTxt.lastChild;
    if(displayTxt.childElementCount == 1){
        displayTxt.innerHTML = '<p>0</p>'
    }else {
        displayTxt.removeChild(ultimoNum);
    }
})

let teclaCE = document.getElementById('teclaCE');
teclaCE.addEventListener('click', ()=>{
    displayTxt.innerHTML = '<p>0</p>'
})

// Evento Resultado
teclaIgual.addEventListener('click', ()=>{
    let filhos = displayTxt.childNodes;
    let restxt = "";
    filhos.forEach((filho)=>{
        restxt+=filho.innerText;
    })
    let novotxt = restxt.replace("undefinedundefined", "")
    let res = eval(novotxt)
    displayTxt.innerHTML = `<p>${res}</p>`
})