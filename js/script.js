import {aleatorio} from './aleatorio.js';
import {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
  atual = 0;
  telaInicial.style.display = 'none';
  caixaPerguntas.classList.remove(".mostrar");
  caixaAlternativas.classList.remove(".mostrar");
  caixaResultado.classList.remove(".mostrar");
  mostraPergunta();
}

function mostraPergunta() {};
