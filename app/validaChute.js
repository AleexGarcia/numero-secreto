function validaChute(chute) {

    const numero = +chute;

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += ("<div>Valor inválido</div>");
        return
    }
    if (numeroRange(numero)) {
        elementoChute.innerHTML += `
        <div>Valor invalido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `;
        return
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML+= `
        <div>O numero secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML+= `
        <div>O numero secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}
function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroRange(numero) {
    return numero > maiorValor || numero < menorValor;
}