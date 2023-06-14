class Bala {

    constructor(posicaoX, posicaoY, largura, altura, velocidade, direcao) {
        this.x = posicaoX;
        this.y = posicaoY;
        this.largura = largura;
        this.altura = altura;
        this.velocidade = velocidade,
        this.direcao = direcao;
    }

    moverCima ()
    {
        this.y -= this.velocidade; 
    }

    moverBaixo()
    {
        this.y += this.velocidade;
    }

    moverDireita()
    {
        this.x += this.velocidade;
    }

    moverEsquerda()
    {
        this.x -= this.velocidade;
    }

}