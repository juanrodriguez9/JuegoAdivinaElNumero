let rangoUsuario = consultarUsuarioRango();
let numerosSorteados = [];
let numSecreto = generarNumeroSecreto();
let oportunidades = consultarOportunidades();
let intentos = 0;


function asignarTextoElementoHTML(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

console.log(`numsecre: ${numSecreto}`);
console.log(`numsecre: ${oportunidades}`);
console.log(intentos);


while (oportunidades > intentos) {

    function verificarIntento() {

        validarInput();

        let numUsuario = parseInt(document.getElementById('valorUsuario').value);

        intentos++;
        console.log(intentos);
        if (numUsuario === numSecreto) {
            // el usuario acertó 
            asignarTextoElementoHTML('p', `Acertaste, en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
            reiniciarBoton();
            bloquearCajaBoton();
        } else {
            // el usuario no acertó
            if (numUsuario > numSecreto) {
                asignarTextoElementoHTML('p', 'El numero secreto es menor');
            } else {
                asignarTextoElementoHTML('p', 'El numero secreto es mayor');
            }
            limpiarCaja();
            validarInput();
        };

        if (oportunidades == intentos) {
            alert('LLegaste al maximo de oportunidades!!');
            asignarTextoElementoHTML('p', 'Presiona Nuevo juego...');
            document.getElementById('valorUsuario').setAttribute("readonly", "true");
            reiniciarBoton();
        };

    };
    break;
}

function reiniciarBoton() {
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function bloquearCajaBoton() {
    document.getElementById('valorUsuario').setAttribute("readonly", "true");
    document.getElementById('Oninput').setAttribute("disabled", "false");
};


function validarInput() {
    document.getElementById("Oninput").disabled = !document.getElementById("valorUsuario").value.length;
}

function condicionesIniciales() {
    // consultar rango
    rangoUsuario = consultarUsuarioRango();
    // consultar oportunidades
    oportunidades = consultarOportunidades();
    // generar numero secreto
    numSecreto = generarNumeroSecreto();
    // intentos reiniciar a 1
    intentos = 1;
}


function reiniciarJuego() {

    // limpiar caja
    limpiarCaja();

    // inactivar boton

    document.getElementById('reiniciar').setAttribute('disabled', 'true');

    // condiciones iniciales
    condicionesIniciales();
    asignarTextoElementoHTML('p', `Indica un numero del 1 al ${rangoUsuario}`);
    document.getElementById('valorUsuario').removeAttribute('readonly');
    intentos=0;

};

function consultarOportunidades() {
    return parseInt(prompt('¿Cuántas oportunidades quieres tener?'));
};


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = "";
};


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * rangoUsuario) + 1;

    if (numerosSorteados.includes(numeroGenerado)) {
        generarNumeroSecreto();
    } else {
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
};




function consultarUsuarioRango() {
    return parseInt(prompt('¿Qué rango de números quieres?'));
};

asignarTextoElementoHTML('h1', 'Juego del numero secreto!');
asignarTextoElementoHTML('p', `Indica un numero del 1 al ${rangoUsuario}`);


