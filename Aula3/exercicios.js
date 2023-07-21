import PromptSync from "prompt-sync";

const prompt = PromptSync();

export function verificarMayorIdade() {
    console.log(" 8. Faça um programa que receba a idade do usuário, enquanto a resposta do usuário for menor que 18 anos continue a solicitar a idade e mostre uma mensagem quando a idade do usuário for maior que 18.");

    let pessoa = {
        nome: "",
        idade: 0
    }

    console.log("Sua idade deve ser maior que 18");

    do {
        pessoa.idade = parseInt(prompt("Digite sua idade: "));
        pessoa.nome = prompt("Digite seu nome: ");

    } while (pessoa.idade < 18);
    console.log("Idade valida!");
    console.log("Objeto", pessoa);
    console.log(`${pessoa.nome}, sua idade ${pessoa.idade}, é valida`);
}


export function numerosPares() {
    console.log("Imprimir números pares de 1 a 10.");

    for (let contador = 0; contador <= 10; contador += 2) {
        console.log(contador);
    }
}

export function tabuada() {
    console.log("Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.");

    let num = prompt("Tabuada do número: ")

    for (let tabuada = 1; tabuada < 11; tabuada++) {
        console.log(num + " x " + tabuada + " = " + tabuada * num);
    }
}

export function calcular() {
    console.log("Calcular a soma dos números de 1 a 100 utilizando a estrutura while.");
 
    let resultado = 0
    let contador = 1;

    while (contador <= 100) {
        resultado = resultado + contador;
        console.log(resultado);
        contador++
    }
}