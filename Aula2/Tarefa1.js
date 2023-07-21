// FOR
// 3. Faça um programa que imprima os números ímpares de 0 a 50;

let prompt = require("prompt-sync")()

// for (let contador = 1; contador < 50; contador += 2) {
//     console.log(contador);

// }


//2. Imprimir números pares de 1 a 10.

// for (let contador = 0; contador <= 10; contador+= 2 ) {
//     console.log(contador);

// }

// 1. Imprimir números de 1 a 10 utilizando o loop for

// for (let contador = 1; contador <= 10; contador++) {
//     console.log(contador);

// }

// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

// let num = prompt("Tabuada do número: ")

// for (let tabuada = 1; tabuada < 11; tabuada++) {
//     console.log(num + " x " + tabuada + " = " + tabuada * num );

// }


// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.
// 0 1 1 2 3 5 8 13

// let

// for (let contador = 0; contador <= 10; contador++) {
//     const element = array[contador];

// }






//WHILE

// 10. Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

// let numero;

// do {
//     numero = prompt("Digite um número: ")

// } while (numero != "0");


//6. Imprimir números pares de 0 a 20 utilizando o loop while

//  let contador = 2;

// while (contador <= 20) {
//     console.log(contador);

//     contador += 2
// }

// 7. Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.

//let resultado = 0
// let contador = 1;

// while (contador <= 100) {
// resultado = resultado + contador;
//     console.log(resultado);
//     contador++
// }

// 8. Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

// let contador = 0;
// let idade;

// do {
//     idade = parseInt(prompt("Digite sua idade: "))
//     contador++


// }
// while (idade < 18);

// console.log("Você é maior de idade");

// {

//     contador++

//     console.log( "A sua idade é maior que 18");
// }


// 9. Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

let numero =  parseInt(prompt("Digite m numero: "))

while (numero >= 0) {
    console.log(numero);
    numero--;
}