var contador = 6

function verificaNumeroValido(chute){
    const numero = +chute
    const elementoChute = document.getElementById("chute")
    const elementoVidas = document.getElementById("vidas")

    if(chuteForInvalido(numero) || verificaSeEMaiorOuMenor(numero)) {
        elementoChute.innerHTML +=`<div>Valor invalido! fale um número entre ${menorValor} e ${maiorValor}</div>`
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <p>O numero secreto é ${numeroSecreto}</p>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
        contador -= 1
    }
    else if(numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
        contador -= 1
    }

    if(contador > 0){
        elementoVidas.innerHTML =` <h4>Vidas: ${contador}</h4>`
    } else {
        document.body.innerHTML = `
        <h2>GAME OVER</h2>
        <p>Não foi dessa vez, o número secreto era ${numeroSecreto}</p>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        document.body.classList.add('fundo-preto')
    }
    console.log(contador)

}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function verificaSeEMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', evento => {
    if(evento.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
