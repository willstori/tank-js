class Desenhador {

    constructor(ctx) {
        this.ctx = ctx
    }

    desenha(objeto, cor)
    {
        this.ctx.fillStyle = cor;

        this.ctx.fillRect(objeto.x, objeto.y, objeto.largura, objeto.altura);
    }

    limparCenario(largura_cenario, altura_cenario)
    {
        ctx.clearRect(0, 0, largura_cenario, altura_cenario);
    }
}