var canvas = document.getElementById('root');
var ctx = canvas.getContext('2d');

const LARGURA_CENARIO = 800;
const ALTURA_CENARIO = 600;

var desenhador = new Desenhador(ctx);
var colisao = new Colisao();
var tank = new Tank(400, 300, 20, 20, 5);
var balas = [];
var blocos = [
    new Bloco(50,50, 480, 100),
    new Bloco(470,200, 100, 300),
    new Bloco(320,200, 100, 50),
    new Bloco(100, 300, 100, 250),
    new Bloco(500, 200, 250, 100),    
];

var flagAndandoParaEsquerda = false;
var flagAndandoParaCima = false;
var flagAndandoParaDireita = false;
var flagAndandoParaBaixo = false;

document.addEventListener('keydown', function (event) {
    
    if (event.key === 'a') {
        // Tecla para mover pra esquerda
        flagAndandoParaEsquerda = true;
        tank.alterarDirecaoCanhao('esquerda');
    } else if (event.key === 'w') {
        // Tecla para mover pra cima
        flagAndandoParaCima = true;
        tank.alterarDirecaoCanhao('cima');
    } else if (event.key === 'd') {
        // Tecla para mover pra direita
        flagAndandoParaDireita = true;
        tank.alterarDirecaoCanhao('direita');
    } else if (event.key === 's') {
        // Tecla para mover pra baixo
        flagAndandoParaBaixo = true;
        tank.alterarDirecaoCanhao('baixo');
    } else if(event.key === 'l'){
        // Tecla para disparo
        balas.push(new Bala(tank.x + 10, tank.y + 10, 4, 4, 15, tank.canhaoDirecao));               
    }
});

document.addEventListener('keyup', function (event) {

    if (event.key === 'a') {       

        flagAndandoParaEsquerda = false;
    } else if (event.key === 'w') {
        
        flagAndandoParaCima = false;
    } else if (event.key === 'd') {    

        flagAndandoParaDireita = false;
    } else if (event.key === 's') {      

        flagAndandoParaBaixo = false;
    }
     
});

setInterval(function () {
    
    // Física do tank
    if(flagAndandoParaEsquerda){
        tank.moverEsquerda();
        if(tank.x < 0){
            tank.moverDireita();
        }else if(colisao.testarLista(tank, blocos)){
            tank.moverDireita();
        }        
    }

    if(flagAndandoParaCima){
        tank.moverCima();
        if(tank.y < 0){
            tank.moverBaixo();
        }else if(colisao.testarLista(tank, blocos)){
            tank.moverBaixo();
        }
    }

    if(flagAndandoParaDireita){
        tank.moverDireita();
        if(tank.x + tank.largura > LARGURA_CENARIO){
            tank.moverEsquerda();
        }else if(colisao.testarLista(tank, blocos)){
           tank.moverEsquerda();
        }
    }

    if(flagAndandoParaBaixo){
        tank.moverBaixo();
        if(tank.y + tank.altura > ALTURA_CENARIO){
            tank.moverCima();
        }else if(colisao.testarLista(tank, blocos)){
            tank.moverCima();
        }
    }    

    // Física das balas

    for(let i = 0; i < balas.length; i++){

        // Bala fora do cenário
        if(balas[i].x > LARGURA_CENARIO || balas[i].x < 0 || balas[i].y > ALTURA_CENARIO || balas[i].y < 0){
            balas.splice(i, 1);
            continue;
        }

        if(balas[i].direcao === 'esquerda'){
            balas[i].moverEsquerda();
            if(colisao.testarLista(balas[i], blocos)){
                balas.splice(i, 1);
                continue;
            }
        }

        if(balas[i].direcao === 'cima'){
            balas[i].moverCima();
            if(colisao.testarLista(balas[i], blocos)){
                balas.splice(i, 1);
                continue;
            }
        }

        if(balas[i].direcao === 'direita'){
            balas[i].moverDireita();
            if(colisao.testarLista(balas[i], blocos)){
                balas.splice(i, 1);
                continue;
            }
        }

        if(balas[i].direcao === 'baixo'){
            balas[i].moverBaixo();
            if(colisao.testarLista(balas[i], blocos)){
                balas.splice(i, 1);
                continue;
            }
        }               
    }

    // Lógica de desenho da tela
    
    desenhador.limparCenario(LARGURA_CENARIO, ALTURA_CENARIO);

    for (let i = 0; i < blocos.length; i++){
        desenhador.desenha(blocos[i], "rgb(0,0,255)");
    }

    desenhador.desenha(tank, "rgb(200,0,0)");

    for(let i = 0; i < balas.length; i++){        
        desenhador.desenha(balas[i], "rgb(255,255,255)");
    }
    
}, 16);
