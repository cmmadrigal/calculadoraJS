const botonNumeros = document.getElementsByName('number');
console.log(botonNumeros);

const botonOperaciones = document.getElementsByName('operaciones');
console.log(botonOperaciones);
const botonIgual = document.getElementsByName('igual')[0];
console.log(botonIgual);
const botonIDelete = document.getElementsByName('delete')[0];
console.log(botonIDelete);

var result = document.getElementById('result');
console.log(result);
var operacionActual = '';
var operacionAnterior = '';
var operacion = undefined;



botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});

botonOperaciones.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function(){
        calcular();
        actualizarDisplay();
});

botonIDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function agregarNumero(num){
    operacionActual = operacionActual.toString() + num.toString(); //Asi concatena; UNE LOS NUMEROS
    actualizarDisplay();

}

function actualizarDisplay(){
    result.value = operacionActual;
}

function clear(){
    operacionActual= '';
    operacionAnterior= '';
    operacion = undefined;
}

function selectOperacion(op){
    if(operacionActual == ''){
        return;
    }

    if(operacionAnterior != ''){
        calcular();
    }
    operacion = op.toString();
    operacionAnterior = operacionActual;
    operacionActual= '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo= anterior + actual;
            break;
        case '-':
            calculo= anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo= anterior / actual;
            break;
        default:
            return;

    }
    operacionActual= calculo;
    operacion= undefined;
    operacionAnterior = '';

}

clear();