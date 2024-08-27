/*
Escrever um algoritmo que, dado o valor de GrowCoins
desejado pelo cliente, determine o número de cada uma das notas
necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00.
 */

// Entrada de dados
let valor = parseInt(prompt("Digite o valor em GrowCoins (GC$) que deseja retirar:"))

// Inicialização
let notas50 = 0, notas10 = 0, notas5 = 0, notas1 = 0;


if (valor >= 50) {
    notas50 = Math.floor(valor / 50)
    valor -= notas50 * 50
}


if (valor >= 10) {
    notas10 = Math.floor(valor / 10)
    valor -= notas10 * 10
}


if (valor >= 5) {
    notas5 = Math.floor(valor / 5)
    valor -= notas5 * 5
}


if (valor >= 1) {
    notas1 = valor; // valor restante é a quantidade de notas de 1
}

//Saída
document.write("<h2>Notas necessárias:</h2>");
if (notas50 > 0) {
    document.write(notas50 + " nota(s) de GC$ 50,00<br>")
}
if (notas10 > 0) {
    document.write(notas10 + " nota(s) de GC$ 10,00<br>")
}
if (notas5 > 0) {
    document.write(notas5 + " nota(s) de GC$ 5,00<br>")
}
if (notas1 > 0) {
    document.write(notas1 + " nota(s) de GC$ 1,00<br>")
}
