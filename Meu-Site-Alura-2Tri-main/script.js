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
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

// Variáveis Globais
const perguntas = [
    {
        enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que consegue responder a todas as dúvidas que uma pessoa pode ter. Além disso, o chat também gera imagens e áudios hiper-realistas. Qual o seu primeiro pensamento?",
        alternativas: ["Isso é assustador!", "Isso é maravilhoso!"]
    },
    // Outras perguntas podem ser adicionadas aqui
];

let atual = 0;
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

// Inicializa a primeira pergunta
mostraPergunta();

// Adiciona funcionalidade aos botões de navegação
previousButton.addEventListener("click", () => {
    if (atual > 0) {
        atual--;
        mostraPergunta();
    }
});

nextButton.addEventListener("click", () => {
    if (atual < perguntas.length - 1) {
        atual++;
        mostraPergunta();
    }
});
