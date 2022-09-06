let palavras = ["CARRO", "LANTERNA", "PROGRAMAR", "BRINQUEDO", "DOCE", "AMOR", "CACHORRO", "GATO", "ALURA"];
let quantidadeErros = 0;
let acertos = 0;
let tentativas = "";
let palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
let btn_iniciar = document.getElementById("novo-jogo");
let btn_desistir = document.getElementById("desistir");
let padrao = ["A-Z"];
let forca = document.getElementById("forca");
let ctx = forca.getContext("2d");

desenhaPoste();
desenhaBarraSuperior();
desenhaApoio();
desenhaTracos();

btn_iniciar.onclick = reseta
btn_desistir.onclick = desistir

window.onkeypress = teclaPressionada

function reseta() {
    window.location.reload(false);
}

function desistir() {
    ctx.font = "20px Arial";
    ctx.fillText("GAME OVER! A palavra era: " + palavraSecreta, 200, 100);
    window.onkeypress = null;
    return;
}

function teclaPressionada() {
    if (!tentativas.includes(event.key) && palavraSecreta.includes((event.key).toUpperCase())) {
        adicionaTentativa();   
        for (var i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] == (event.key).toUpperCase()) {
                ctx.font = "30px Arial";
                ctx.fillStyle = "#000000"
                ctx.fillText((event.key).toUpperCase(), 120 + (35 * i), 250);
                acertos++;
            }
        }
     } else {
        adicionaTentativa();
        quantidadeErros++;
        desenhaBoneco(quantidadeErros);
    }
    verificaFimJogo(); 
}

function adicionaTentativa() {
    if(!tentativas.includes(event.key)) {
        tentativas= tentativas + event.key;
        ctx.font = "20px Arial";
        ctx.fillText("Tentativas: " + tentativas.toUpperCase(), 100, 300);
    }
}

function verificaFimJogo() {
    if (quantidadeErros >= 6) {
        ctx.font = "20px Arial";
        ctx.fillText("GAME OVER! A palavra era: " + palavraSecreta, 200, 100);
        window.onkeypress = null;
        return;
    }
    if (acertos == palavraSecreta.length) {
        ctx.font = "20px Arial";
        ctx.fillText("Você venceu!", 200, 100);
        window.onkeypress = null;
        return;
    }
}

function desenhaPoste() {
    ctx.moveTo(100, 240);
    ctx.lineTo(100, 70);
    ctx.strokeStyle = "#0A3871";
    ctx.stroke();
}

function desenhaBarraSuperior() {
    ctx.moveTo(100, 70);
    ctx.lineTo(180, 70);
    ctx.stroke();
}

function desenhaApoio() {
    ctx.moveTo(180, 70);
    ctx.lineTo(180, 100);
    ctx.stroke();
}

function desenhaTracos() {
    for (var i = 0; i < palavraSecreta.length; i++) {
        ctx.moveTo(120 + (35 * i), 250);
        ctx.lineTo(140 + (35 * i), 250);
        ctx.stroke();
    }
}

function desenhaBoneco(quantidadeErros) {
    switch (quantidadeErros) {
        case 1:
            desenhaCabeca();
            break;
        case 2:
            desenhaTronco();
            break;
        case 3:
            desenhaBracoEsquerdo();
            break;
        case 4:
            desenhaBracoDireito();
            break;
        case 5:
            desenhaPernaEsquerda();
            break;
        case 6:
            desenhaPernaDireita();
            break;    
    }
}

function desenhaCabeca() {
    ctx.beginPath();
    ctx.arc(180, 110, 10, 0, 2 * Math.PI);
    ctx.stroke();
}

function desenhaTronco() {
    ctx.moveTo(180, 120);
    ctx.lineTo(180, 150);
    ctx.stroke();
}

function desenhaBracoEsquerdo() {
    ctx.moveTo(180, 120);
    ctx.lineTo(160, 140);
    ctx.stroke();
}

function desenhaBracoDireito() {
    ctx.moveTo(180, 120);
    ctx.lineTo(205, 140);
    ctx.stroke();
}

function desenhaPernaEsquerda() {
    ctx.moveTo(180, 150);
    ctx.lineTo(160, 170);
    ctx.stroke();
}

function desenhaPernaDireita() {
    ctx.moveTo(180, 150);
    ctx.lineTo(200, 170);
    ctx.stroke();
}
