alert('oi')

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function() {

    console.log(cartaoAtual);
    console.log(cartoes.length - 1);

    if (cartaoAtual === cartoes.length - 1) return;

    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");
})

btnVoltar.addEventListener("click", function() {
    if (cartaoAtual === 0) return;
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
})