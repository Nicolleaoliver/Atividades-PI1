const estilos = ["estilos.css", "preto_branco.css", "blog.css"];
let posicaoAtual = 0;

function alternarEstilo() {
    const linkTag = document.getElementById("idlink");

    posicaoAtual = (posicaoAtual + 1) % estilos.length;

    linkTag.href = estilos[posicaoAtual];
    
    console.log("Estilo atual: " + estilos[posicaoAtual]);
}