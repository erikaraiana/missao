const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativa  = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    { //primeiro objeto da lista de perguntas
        enunciado: "perguntas1",
        alternativas: ["alternativa1", "alternativa2"]
    },
    { // segundo objeto da lista de pergutas
        enunciado: "perguntas2",
        alternativas: ["alternativa1", "alternativa2"]
    }
];
