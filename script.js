const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector ('.texto-reultado');

const perguntas = [ //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "Você acredita na Inteligência Artificial?",
            alternativas: [{texto: " SIM ", afirmação: "afirmação da alternativas"} , { texto: "NÃO ",afirmação: "afirmação da alternativas"} ]
    },
    {
        enunciado: "A inteligência artificial pode ser considerada confiavel no meio da Medicina?",
        alternativas: [{texto: " SIM ", afirmação: "afirmação da alternativas"},{ texto: "NÃO ",afirmação: "afirmação da alternativas"}]
    },
    {
        enunciado: "Você acredita que pode utilizar a inteligencia artificial no dia a dia?",
        alternativas: [{texto: " SIM ", afirmação: "afirmação da alternativas"},{ texto: "NÃO ",afirmação: "afirmação da alternativas"}]
    },
    {
        enunciado: " Você pode usar a inteligencia artificial para abrir seu proprio negocio?",
        alternativas: [{texto: " SIM ", afirmação: "afirmação da alternativas"},{ texto: "NÃO ",afirmação: "afirmação da alternativas"}]
    },
    {
        enunciado: "A Inteligencia Artificial é útil na sua rotina? ",
        alternativas: [{texto: " SIM ", afirmação: "afirmação da alternativas"},{ texto: "NÃO ",afirmação: "afirmação da alternativas"}]
    },
    {
        enunciado: "Daqui 10 anos você acredita que a inteligencia artificial pode estar dominando o mundo?",
        alternativas: [{texto: " SIM ", afirmação: "afirmação da alternativas"},{ texto: "NÃO ",afirmação: "afirmação da alternativas"}]
    },
]

let posicao = 0;
let perguntaAtual;
let hitoriafinal = "";

function mostraPergunta(){
    if (posicao >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() =>respostaselecionada(alternativas));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoselecionada){
    const afirmação = opcaoselecionada.afirmação
    historiafinal = afirmação
    posicao++;
    mostraPergunta();
}
function mostraResultados(){
    caixaPerguntas.textContent = "Num futuro próximo...";
    textoResultado.textContent = hitoriafinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();