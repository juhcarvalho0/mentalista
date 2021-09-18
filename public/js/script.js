var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    var elementoResultado = document.getElementById("resultado");
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Ebaaa! Você Acertou.";
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else {
        elementoResultado.innerHTML = "Ixi..Você errou! Tente novamente!";
    }
}

function LimparResultado() {
    document.getElementById("valor").value = "";
    document.getElementById("resultado").innerHTML = "";
}