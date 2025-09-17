//perguntas
const perguntas = [
    {
        enunciado: "Você prefere nike ou adidas?",  //a pergunta
        alternativas: [
            {
                texto: "nike", //primeira alternativa
                afirmacao: [
                    "você tem bom gosto", //comentário para a resposta
                    "afirmação 2"        //segundo comentário
                ],
                proxima: 1,
            },
            {
                texto: "adidas",
                afirmacao: [
                    "você é vaiado",
                    "você não sabe escolher"
                ],
                proxima: 1,
            }
        ]
    },
    {
        enunciado: "pergunta 2",
        alternativas: [
            {
                texto: "nike",
                afirmacao: [
                    "você tem bom gosto",
                    "afirmação 2"
                ],
                proxima: 2,
            },
            {
                texto: "adidas",
                afirmacao: [
                    "você é vaiado",
                    "você não sabe escolher"
                ],
                proxima: 2,
            }
        ]
    },
    {
        enunciado: "pergunta 4",
        alternativas: [
            {
                texto: "nike",
                afirmacao: [
                    "você tem bom gosto",
                    "afirmação 2"
                ],
                proxima: 3,
            },
            {
                texto: "adidas",
                afirmacao: [
                    "você é vaiado",
                    "você não sabe escolher"
                ],
                proxima: 3,
            }
        ]
    },
    {
        enunciado: "Você prefere nike ou adidas?",
        alternativas: [
            {
                texto: "nike",
                afirmacao: [
                    "você tem bom gosto",
                    "afirmação 2"
                ],
                proxima: 4,
            },
            {
                texto: "adidas",
                afirmacao: [
                    "você é vaiado",
                    "você não sabe escolher"
                ],
                proxima: 4,
            }
        ]
    },
    {
        enunciado: "pergunta 5",
        alternativas: [
            {
                texto: "nike",
                afirmacao: [
                    "você tem bom gosto",
                    "afirmação 2"
                ],
            },
            {
                texto: "adidas",
                afirmacao: [
                    "você é vaiado",
                    "você não sabe escolher"
                ],
            }
        ]
    }
]

//aleatorio
const nomes = ["Juca", "Emerson", "Osvaldo", "Pipokinha", "Deolane", "Virginia"];

function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

const nome = aleatorio(nomes)

//script principal

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn"); 
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
   if(opcaoSelecionada.proxima !== undefined) {
       atual = opcaoSelecionada.proxima;
   }else {
       mostraResultado();
       return;
   }
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = `Após os estudos, ${nome} descobriu que`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar"); 
    botaoJogarNovamente.addEventListener("click", jogarNovamente); 
}

function jogarNovamente(){
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar"); 
    mostraPergunta();
}

function substituiNome() {
    for(const pergunta of perguntas) {
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}
substituiNome();
