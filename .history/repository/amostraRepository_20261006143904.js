const amostras = [];

export function cadastrar(amostra){
    amostras.push(amostra);

}

export function listar(){
    return amostras;
}

export function buscarPorIndice(indice, novaAmostra){
    amostras[indice] = novaAmostra;

}

export function deletar(indice){
    amostras.splice(indice, 1);
}

export function atualizar(indice, amostra){
    amostras[indice] = amostra;
}
