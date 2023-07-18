//let nomes = ["Alana", "Alexia", "Samanta", "Thiago", "Odirlei", "Sarina" ]
//              0         1          2         3          4         5

// const PromptSync = require("prompt-sync")

// console.log(nomes[0])
// console.log(nomes[1])
// console.log(nomes[2])
// console.log(nomes[3])
// console.log(nomes[4])
// console.log(nomes[5])


// for (let contador = 0; contador < nomes.length; contador++) {
//     const element = nomes[contador];
//     console.log(element)
// }

// nomes.forEach((cadaElemento, posicao) => [
//     console.log(posicao, cadaElemento)
// ])


// nomes.forEach(element => [
//     console.log(element)
// ])


// const frutas = ["Pera", "Uva", "Maça", "Salada Mista", "Cambur"]

// for (let contador = 0; contador < frutas.length; contador++) {
//     const cadaElemento = frutas[contador];
//     console.log(contador, cadaElemento);
// }


// frutas.forEach(cadaElemento => [
//     console.log(cadaElemento)
// ])

// let salario = 1000;
// let contador = 0;

// while (salario < 5000) {
//     salario += 100 // salario = salario + 100;
//     contador++;

//     console.log("O seu salario ainda é R$" + salario);
// }


// do {
//     salario += 100
//     contador++;
//     console.log("O seu salario ainda é R$" + salario);
// } while (salario < 5000);

const prompt = require("prompt-sync")()
// let numeroEscolhido;

// do {
//      numeroEscolhido = prompt('Digite um numero: ')
// } while (numeroEscolhido != "5");

// while (numeroEscolhido != "5") {
//     numeroEscolhido = prompt("Digite um numero: ")
// }


let senha;

do {
    senha = prompt("Digite a senha: ")

    if (senha != "123") {
        console.log("Senha incorreta");
    }

} while (senha != "123");