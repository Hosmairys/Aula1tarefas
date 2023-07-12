// 2
 let prompt = require("prompt-sync")()

// let numero = prompt("Digite seu salario: ")

// if (numero < 500) {
//     console.log("Você foi escolhido para o aumneto salario")
// } else {
//     console.log("Você não foi escolhido para o aumento salario")
// }


//5Faça um programa receba dois valores e imprima qual é o maior número digitado.



// let valor1 = prompt("Digite um numero: ")
// let valor2 = prompt("Digite um numero: ")

// if (valor1 < valor2) {
//     console.log("O primeiro numero é maior que o segundo")
// }else{
//     console.log("O segundo numero é maior que o primeiro")
// }

//6 Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de APROVADO
//para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre
//5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.
 

let nota1 = parseInt(prompt("Digite seus pontos do examen: "))
let nota2 = parseInt(prompt("Digite seus pontos do examen: "))
let nota3 = parseInt(prompt("Digite seus pontos do examen: "))
let nota4 = parseInt(prompt("Digite seus pontos do examen: "))

media = (nota1 + nota2 + nota3 + nota4)/4 ; 

if ( media >= 7,0 ) 
{
    console.log ("Aprovado");

} 
else 
{ 
    if ( media < 5,0 ) 
    {
       console.log("Reprovado");
    }
    else 
    {
       console.log ("Recuperação");
    }
}
