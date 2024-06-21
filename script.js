// Função para mostrar a pergunta atual
function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

// Função para mostrar as alternativas
function mostraAlternativas() {
    // Limpar as alternativas anteriores
    caixaAlternativas.innerHTML = '';

    // Loop para criar um botão para cada alternativa
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.addEventListener("click", () => {
            avancarProximaPergunta();
        });
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

// Função para avançar para a próxima pergunta
function avancarProximaPergunta() {
    if (atual < perguntas.length - 1) {
        atual++;
        mostraPergunta();
    } else {
        window.location.href = "proxima_pagina.html";
    }
}

// Variáveis Globais
const perguntas = [
    {
        enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que consegue responder a todas as dúvidas que uma pessoa pode ter. Além disso, o chat também gera imagens e áudios hiper-realistas. Qual o seu primeiro pensamento?",
        alternativas: ["Isso é assustador!", "Isso é maravilhoso!"]
    },
    {
        enunciado: "Você está assistindo um filme onde a inteligência artificial se torna autoconsciente e começa a tomar decisões por conta própria. Como você se sente sobre isso?",
        alternativas: ["Preocupado", "Empolgado"]
    },
    {
        enunciado: "Se você tivesse a oportunidade de utilizar uma IA para ajudá-lo a estudar, como você reagiria?",
        alternativas: ["Seria incrível!", "Não confio em IAs"]
    },
    {
        enunciado: "Você acredita que as IAs podem substituir completamente os humanos em determinadas profissões no futuro?",
        alternativas: ["Sim, é inevitável", "Não, sempre precisaremos de humanos"]
    }
];

let atual = 0;
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");

// Inicializa a primeira pergunta
mostraPergunta();
