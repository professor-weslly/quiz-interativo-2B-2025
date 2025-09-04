const nomes = ["Juca", "Emerson", "Osvaldo", "Pipokinha", "Deolane", "Virginia"];

function aleatorio(lista){
  const posicao = Math.floor(Math.random()* lista.length);
  return lista[posicao];
}

const nome = aleatorio(nomes) 
