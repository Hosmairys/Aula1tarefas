// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é &quot;admin&quot; e a senha é &quot;senha123&quot;. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

let prompt = require("prompt-sync")()

// let nomeUsuario = prompt("Digite o nome de usuario: ")
// let senha = prompt("Digite sua senha: ")

// if (nomeUsuario == "admin" && senha == "senha123" ) {
//     console.log("Seu login foi com sucesso")
// }else{
//     console.log("Senha ou nome de usuario invalido")
// }




// Exercício 2: Verificação de dia da semana
// Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
// semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
// 2 representa terça-feira e assim por diante.

// let dia = prompt("Digite um numero de 1 a 7: ")

// switch (dia) {
//     case "1":
//         console.log("Segunda-feira")
//         break;
//     case "2":
//         console.log("Terça-feira")
//         break;
//     case "3":
//         console.log("Quarta-feira")
//         break;
//     case "4":
//         console.log("Quinta-feira")
//         break;
//     case "5":
//         console.log("Sexta-feira")
//         break;
//     case "6":
//         console.log("Sabado")
//         break;
//     case "7":
//         console.log("Domingo")
//         break;
//     default:
//         console.log("O numero que você digitou não se encontra")
//         break;
// }



// Exercício 3: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let num1 = parseInt(prompt("Digite um numero: "))
let num2 = parseInt(prompt("Digite um numero: "))
let num3 = parseInt(prompt("Digite um numero: "))

if (num1 > num2 && num2 > num3) { //ordem crecente
    console.log("Os numeros estão em ordem crecente")
}else if (num3 > num2 && num2 > num1) { // ordem decrecente
    console.log("Os numero estão decrecente")
}else{
    console.log("Os numero que você digito não esta na ordem")
}
