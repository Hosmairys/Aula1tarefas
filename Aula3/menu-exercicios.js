import PromptSync from "prompt-sync";

import { verificarMayorIdade, numerosPares, tabuada, calcular } from "./exercicios.js";

const prompt = PromptSync();

//MENU para escolher qual exercicio o usuario escolher

let exercicio;
let continuar;

do {

    exercicio = parseInt(prompt("Digite um numero que represente um exercicio de 1 a 6: "))

    switch (exercicio) {
        case 1:
            //Chamando função Hello World()
            helloWorld("Hello World!!")
            break;
        case 2:
            //objeto
            let aluno = {
                nome: "Sarina",
                idade: 19,
                hardSkills: ["Figma", "HTML", "CSS", "Web Responsive"]
            }
            //acessando objeto pela propiedade
            console.log(aluno.nome, aluno.idade, aluno.hardSkills);
            //exibindo objeto interno
            console.log("Objjeto aluno", aluno);
            break;
        case 3:
            verificarMayorIdade();
            break;
        case 4:
            numerosPares();
            break;
        case 5:
            tabuada();
            break;
        case 6:
            calcular();
            break;
        default:
            console.log("Digite o numero de 1 a 6");
            break;
    }

    continuar = prompt("Deseja continuar ver outros exercicios? Digite s para sim e digite n para não: ").toLocaleUpperCase() //ætoLocaleUpperCase transforma o texto em miniscula

} while (continuar === "S");

function helloWorld(frase) {
    console.log(frase);
}

