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
        enunciado: "Você acredita que pode utilizar a inteligencia artificial no dia a dia?",
        alternativas: [" SIM "," NÃO "]
    },
    {
        enunciado: " Você pode usar a inteligencia artificial para abrir seu proprio negocio?",
        alternativas: [" SIM "," NÃO "]
    },
    {
        enunciado: "A Inteligencia Artificial é útil na sua rotina? ",
        alternativas: [" SIM "," NÃO "]
    },
    {
        enunciado: "Daqui 10 anos você acredita que a inteligencia artificial pode estar dominando o mundo?",
        alternativas: [" SIM "," NÃO "]
    },
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