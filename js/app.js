function comprar(){
    let quantidade = parseInt(document.getElementById('qtd').value);
    let tipoIngresso = document.getElementById('tipo-ingresso');

    if (isNaN(quantidade) || quantidade <= 0){
        alert('Insira um valor válido');
        return;
    }

    if(tipoIngresso.value == 'pista'){
        comprarPista(quantidade);
    } else if (tipoIngresso.value == 'superior') {
        comprarSuperior(quantidade);
    } else if(tipoIngresso.value == 'inferior'){
        comprarInferior(quantidade);
    }

}

function comprarPista(quantidade){
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade > quantidadePista){
        alert('Acabaram os ingressos :(');
    } else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada');
    }

}

function comprarSuperior(quantidade){
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade > quantidadeSuperior){
        alert('Acabaram os ingressos :(');
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior
        alert('Compra realizada!!');
    }
}
function comprarInferior(quantidade){
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidade > quantidadeInferior){
        alert('Acabaram os ingressos :(');
    } else {
        quantidadeInferior = quantidadeInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior
        alert('Compra realizada!!');
    }
}