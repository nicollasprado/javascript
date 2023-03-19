const inputAlarme = document.getElementById('inputAlarme');
const alarmeTxt = document.getElementById('alarmeTxt');
const btnAtivar = document.getElementById('btnAtivar');
const btnParar = document.getElementById('btnParar');

// Armazenamento do delay para o Alarme
let delay = undefined
function getDelay(){
    delay = inputAlarme.value*1000;
}

// Função Adicionar valor ao Alarme
function acionar(hora, minuto, segundo, delay){
    if(segundo+delay == 60 && minuto < 60){
        minuto++
        alarmeTxt.innerText = `${hora}:${minuto}:00`
    }else {
        alarmeTxt.innerText = `${hora}:${minuto}:${segundo+delay}`
    }
}

// Função Armazenar Horário do Click
btnAtivar.addEventListener('click', ()=>{
    let data = new Date()
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    getDelay();
    acionar(horas, minutos, segundos, delay);
    alertaFunc()
    .then((retorno)=>{
        alert(retorno);
        alarmeTxt.innerText == ''
    })
})

// Função Alertar
const alertaFunc=()=>{
const alerta = new Promise((res_ok, res_falha)=>{
    let tempo = delay;
    setTimeout(()=>{
            res_ok('O alarme chegou a 0');
    },tempo)
})
return alerta;
}