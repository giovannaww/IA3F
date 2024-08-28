const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [ //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "Você acredita na Inteligência Artificial?",
        alternativas: [" SIM ","NÃO "]
    },
    {
        enunciado: "A inteligência artificial pode ser considerada confiavel no meio da Medicina?",
        alternativas: [" SIM "," NÃO "]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: ["Alternativa 1","Alternativa 2"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado
    mostraAlternativas();
}
function mostraAlternativas(){

}

mostraPergunta();