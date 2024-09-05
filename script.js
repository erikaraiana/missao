const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a sua prioridade quando se trata de reduzir o impacto ambiental?",
        alternativas: [
            {
                texto: "Priorizar a reciclagem e a redução de resíduos em casa.",
                afirmacao: "A reciclagem e a redução de resíduos são fundamentais para diminuir a quantidade de lixo e conservar recursos naturais. Escolher essa alternativa indica um foco em práticas que minimizam o impacto ambiental diretamente em sua residência."
            },
            {
                texto: " Investir em tecnologias e produtos sustentáveis, como painéis solares e eletrodomésticos eficientes.",
                afirmacao: "Investir em tecnologias sustentáveis contribui para uma maior eficiência energética e redução das emissões de carbono. Optar por essa alternativa mostra uma preocupação em adotar soluções de longo prazo para a sustentabilidade."
            }
           
        ]
    },
    {
        enunciado: "Como você prefere economizar água no seu dia a dia?",
        alternativas: [
            {
                texto: "Implementar práticas como tomar banhos mais curtos e consertar vazamentos.",
                afirmacao: "Adotar práticas como tomar banhos mais curtos e corrigir vazamentos ajuda significativamente a reduzir o consumo de água e evita o desperdício. Escolher essa alternativa reflete um esforço para fazer ajustes diretos no seu comportamento diário."
            },
            {
                texto: "Utilizar sistemas de coleta de água da chuva e instalar dispositivos de economia de água.",
                afirmacao: "Sistemas de coleta de água da chuva e dispositivos de economia são soluções tecnológicas que ajudam a reduzir o consumo de água e a utilizar recursos de forma mais eficiente. Optar por essa alternativa demonstra um interesse em soluções mais estruturais para a conservação da água."
            }
           
        ]
    },
    {
        enunciado: "Qual é sua abordagem para reduzir a emissão de gases de efeito estufa?",
        alternativas: [
            {
                texto: "Optar por transporte público ou modos de transporte sustentáveis, como bicicleta.",
                afirmacao:"Usar transporte público ou modos de transporte não poluentes, como a bicicleta, é uma forma eficaz de reduzir a emissão de gases de efeito estufa e minimizar sua pegada de carbono. Escolher essa alternativa mostra um esforço em reduzir o impacto ambiental pessoal através de escolhas de transporte."
                
            },
            {
                texto: "Investir em veículos elétricos e apoiar políticas que promovam energia limpa.",
                afirmacao:"Veículos elétricos e apoio a políticas de energia limpa ajudam a reduzir as emissões de gases de efeito estufa e promovem um futuro mais sustentável. Optar por essa alternativa reflete uma preocupação com soluções mais abrangentes e a longo prazo para a proteção do meio ambiente.
"
            }
        ]
    }
];

        let atual = 0;
        let perguntaAtual;
        let historiaFinal = "";

        function mostraPergunta(){
            if (atual >= perguntas.length){
                mostraResultado();
                return;
            }
            perguntaAtual = perguntas[atual];
            caixaPerguntas.textContent = perguntaAtual.enunciado;
            caiaxaAternativas.textContent = "";
            textoResultado.textContent = "";
            mostraAlternativas();
        }

        function mostraAlternativas(){
            for (const alternativa of perguntaAtual.alternativas){
                const botaoAlternativa = document.createElement("button");
                botaoAlternativa.textContent = atlternativa.texto;
                botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(altermativa));
                caixaAlternativas.appendChild(botaoAlternativa);
            }
        }
        Function respostaSelecionada (opcaoSelecionada){
            const afirmacao = opcaoSelecionada.afirmacao;
            historiaFinal += afirmacao = " ";
            atual++
            mostraPergunta();
        }  

        function mostraResultado(){
            caixaPerguntas.textContent = "Resumindo...";
            textoResultado.textContent = historiaFinal;
            caixaAlternativas.textContent = "";
        }
            mostraPergunta();