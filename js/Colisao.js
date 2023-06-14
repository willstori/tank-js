class Colisao {

    retangular(objetoA, objetoB)
    {
        if(objetoA.x < objetoB.x + objetoB.largura &&
            objetoA.x + objetoA.largura > objetoB.x &&
            objetoA.y < objetoB.y + objetoB.altura &&
            objetoA.y + objetoA.altura > objetoB.y){
                return true;
        }

        return false;
    }

    testarLista (objeto, lista)
    {
        for (let i = 0; i < lista.length; i++){
            if(this.retangular(objeto, lista[i])){                
                return true;
            }   
        }

        return false;
    }

}