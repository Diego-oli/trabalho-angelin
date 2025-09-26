let sort = Math.floor(Math.random()*100)+1;
console.log(sort);
let tentativas = 5;
document.getElementById("chances").innerHTML= " tentativas "+ tentativas;
 let saida = document.getElementById(" output");

function clique(){
    let valor = document.getElementById("input").value
    let saida = document.getElementById("output");

if(valor > 0 && valor <=100){
    if( tentativas > 0){
    if(valor == sort){
        saida.innerHTML = "acertou!!!!";
    } if(valor > sort){
        saida.innerHTML = "o valor sorteado é menor";
    } if(valor < sort){
        saida.innerHTML = "o valor sorteado é maior ";
    }

} else {
    saida.innerHTML = "Está fora do intervalo";
}

}

tentativas--;
document.getElementById("chances ").innerHTML= " tentativas "+ tentativas;
if(tentativas ==0){
    document.getElementById("btn").disabled = true;
    saida.innerHTML = "Acabaram as tentativas o número sorteado era: " + sort;
}

}

function novo(){
    let sort = Math.floor(Math.random()*100)+1;
    tentativas = 5;
    document.getElementById("chances ").innerHTML= "tentativas "+ tentativas;
    document.getElementById("btn").disabled = false;
    saida.innerHTML= ("&nbsp");
    

}