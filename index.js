var display = document.querySelector('canvas');
var pointer = display.getContext('2d');

display.width  = window.innerWidth;
display.height = window.innerHeight;

pointer.fillStyle = `rgb(8, 12, 18)`;
pointer.fillRect(0,0,display.width,display.height);

/* var puedoDibujar = false; */

document.addEventListener('mousemove', dibujarCirculo);


function dibujarCirculo(e) {

/*     if(puedoDibujar) { */
        var x = e.clientX - display.offsetLeft;
        var y = e.clientY - display.offsetTop;
        pointer.fillStyle = `rgb(0, 32, 76)`;
        pointer.beginPath();
        pointer.arc(x, y, 5, 0, 2 * 3.14);
        pointer.fill();
/*     } */
}

/* function habilitarDibujar() {

    puedoDibujar = true;
}

function deshabilitarDibujar() {

    puedoDibujar = false;
}

display.onmousedown = habilitarDibujar;

display.onmouseup = deshabilitarDibujar; */


let textOut = document.getElementById('dataOut')

function encrypt() {
    let dataIn = document.getElementById('dataIn').value;
    let dataIn1 = dataIn.toLowerCase();
    let dataOut = "";
    for (var i = 0; i < dataIn1.length; i++){
        if (dataIn1[i] === "a" || dataIn1[i] === "e" || dataIn1[i] === "i" || dataIn1[i] === "o" || dataIn1[i] === "u"){
            switch (dataIn1[i]){
                case 'a':
                    dataOut = dataOut + 'ai';
                    break;
                case 'e':
                    dataOut = dataOut + 'enter';
                    break;
                case 'i':
                    dataOut = dataOut + 'imes';
                    break;
                case 'o':
                    dataOut = dataOut + 'ober';
                    break;
                case 'u':
                    dataOut = dataOut + 'ufat';
                    break;
            }
        } else {
            dataOut = dataOut + dataIn[i]
        }
    }
    textOut.value = dataOut;
}

function decrypt() {
    let dataIn = document.getElementById('dataIn').value;
    let dataIn1 = dataIn.toLowerCase();
    let dataOut = "";
    for (var i = 0; i < dataIn1.length; i++){
        if (dataIn1[i] === "a" || dataIn1[i] === "e" || dataIn1[i] === "i" || dataIn1[i] === "o" || dataIn1[i] === "u"){
            switch (dataIn1[i]){
                case 'a':
                    if (dataIn1[i+1] === "i") {
                        dataOut = dataOut + 'a';
                        i++;
                        break;
                    } else {
                        dataOut = 'error de decodificación, parece que la frase no la hice yo';
                        break;
                    }
                case 'e':
                    if (dataIn1[i+1] === "n" && dataIn1[i+2] === "t" && dataIn1[i+3] === "e" && dataIn1[i+4] === "r") {
                        dataOut = dataOut + 'e';
                        i = i + 4;
                        break;
                    } else {
                        dataOut = 'error de decodificación, parece que la frase no la hice yo';
                        break;
                    }
                case 'i':
                    if (dataIn1[i+1] === "m" && dataIn1[i+2] === "e" && dataIn1[i+3] === "s") {
                        dataOut = dataOut + 'i';
                        i = i + 3;
                        break;
                    } else {
                        dataOut = 'error de decodificación, parece que la frase no la hice yo';
                        break;
                    }
                case 'o':
                    if (dataIn1[i+1] === "b" && dataIn1[i+2] === "e" && dataIn1[i+3] === "r") {
                        dataOut = dataOut + 'o';
                        i = i + 3;
                        break;
                    } else {
                        dataOut = 'error de decodificación, parece que la frase no la hice yo';
                        break;
                    }
                case 'u':
                    if (dataIn1[i+1] === "f" && dataIn1[i+2] === "a" && dataIn1[i+3] === "t") {
                        dataOut = dataOut + 'u';
                        i = i + 3;
                        break;
                    } else {
                        dataOut = 'error de decodificación, parece que la frase no la hice yo';
                        break;
                    }
            }
        } else {
            dataOut = dataOut + dataIn[i]
        }
    }
    textOut.value = dataOut;
}


function copyText() {
    navigator.clipboard.writeText(textOut.value)
    alert(`copiado: ${textOut.value}`)
}