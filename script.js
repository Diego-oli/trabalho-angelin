let sort = Math.floor(Math.random() * 100) + 1;
let tentativas = 5;
document.getElementById("chances").innerHTML = "Tentativas: " + tentativas;
let saida = document.getElementById("output");

function clique() {
    let valor = document.getElementById("input").value;
    let saida = document.getElementById("output");

    if (valor > 0 && valor <= 100) {
        if (tentativas > 0) {
            if (valor == sort) {
                saida.innerHTML = "Acertou!!!!";
                document.getElementById("btn").disabled = true; // Desabilita o botão
            } else if (valor > sort) {
                saida.innerHTML = "O valor sorteado é menor";
            } else if (valor < sort) {
                saida.innerHTML = "O valor sorteado é maior";
            }

            // Decrementa as tentativas apenas se o usuário não acertou
            tentativas--;
            document.getElementById("chances").innerHTML = "Tentativas: " + tentativas;

            if (tentativas == 0) {
                document.getElementById("btn").disabled = true; // Desabilita o botão se as tentativas acabarem
                if (valor != sort) {
                    saida.innerHTML = "Acabaram as tentativas, o número sorteado era: " + sort;
                }
            }
        }
    } else {
        saida.innerHTML = "Está fora do intervalo (1 a 100)";
    }
}

function novo() {
    sort = Math.floor(Math.random() * 100) + 1;
    tentativas = 5;
    document.getElementById("chances").innerHTML = "Tentativas: " + tentativas;
    document.getElementById("btn").disabled = false; // Habilita o botão
    saida.innerHTML = "&nbsp;"; // Limpa a saída
}
