class Tank {

    constructor(posicaoX, posicaoY, largura, altura, velocidade) {
        this.x = posicaoX;
        this.y = posicaoY;
        this.largura = largura;
        this.altura = altura;
        this.velocidade = velocidade
        this.canhaoDirecao = 'direita';
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

    alterarDirecaoCanhao(direcao)
    {
        this.canhaoDirecao = direcao;
    }
}