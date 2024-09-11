const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

const perguntas = [
    {
    enunciado: "Qual gênero musical, teve maior impacto durante a ditadura militar",
    alternativas: [
        {
texto:"Tropicadelismo, inspirado no rock, no pop e elemento de cultura",
afirmacao: "Você conhece o estilo musical na ditadura militar."
        },
        {
texto:"Sertanejo universitário",
afirmacao: "Você não possui conhecimento da época da ditadura militar"
        }
]
    },
    {
        enunciado: "Quais gêneros musicais marcaram os anos 2000 no Brasil",
        alternativas: [
            {
    texto:"Funk carioca, emocore, black musical",
    afirmacao: "Você conhece sobre os estilos musicais dos anos 2000."
            },
    {
    texto:"Samba e rap",
    afirmacao: "Não nasceu nos anos 2000 ou não pesquisou sobre a época"
    },
    ]
        },
        {
            enunciado: "Na onde surgiu as musicas classicas",
            alternativas: [
                {
        texto:"Europa",
        afirmaçao: "Você estudou ou pesquisou sobre as musicas classicas."
                },
                {
        texto:"Asía",
        afirmacao: "Você confundiu o país, pois se localizam próximos."
                }
        ]
            },
   ];
  
   let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();