const frutas = [];

frutas.push("Abacaxi");
frutas.push("Banana");
frutas.push("Caju");
frutas.push("dAMASCO");

function imprimir(fruta, posicao) {
  const novaPosicao = posicao + 1;
  console.log(novaPosicao + " - " + fruta);
}

// frutas.forEach(imprimir);

function paraMaiuscula(fruta) {
  return fruta.toUpperCase();
}

// uma funcao que transforma cada fruta em um objeto
// {
//     nome: "Abacaxi"
//     preco: 2.8
// }

function criarFruta(fruta) {
  return {
    nome: fruta,
    preco: Math.random().toPrecision(2) * 10,
  };
}

const frutasMaior = frutas.map(paraMaiuscula);
const frutasObjeto = frutasMaior.map(criarFruta);

function escreverLiDom(fruta) {
  document.write(`<li>${fruta}</li>`);
}

//Criem uma funcao que transforma uma lista de Objetos de frutas
// Em uma LI abacaxi, R$ 8,90
// E depois escrever na DOM ul

function trasnformaFrutaEmLI(fruta) {
  return `<li>${fruta.nome}</li>`;
}

const frutasLi = frutasObjeto.map(trasnformaFrutaEmLI);

// frutasLi.forEach((frutaLi) => {
//   document.write(frutaLi);
// });


let ul = document.getElementById("ul1")
