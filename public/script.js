const catalogo = [
{
    id: 1,
    titulo: "As Crônicas de Nárnia",
    tipo: "filme",
    ano: 2005,
    generos: ["fantasia", "aventura"],
    nota: 8.5,
    assistido: true
},
{
    id: 2,
    titulo: "KillBill Part 1",
    tipo: "filme",
    ano: 2003,
    generos: ["ação", "vingança"],
    nota: 10,
    assistido: false

},
{
    id: 3,
    titulo: "KillBill Part 2",
    tipo: "filme",
    ano: 2004,
    generos: ["ação", "vingança"],
    nota: 10,
    assistido: false

},
{
    id: 4,
    titulo: "Era do Gelo",
    tipo: "filme",
    ano: 2002,
    generos: ["animação", "comédia"],
    nota: 10,
    assistido: true

},
{
    id: 5,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["drama", "crime"],
    nota: 10,
    assistido: false

},
{
    id: 6,
    titulo: "Taxi Driver",
    tipo: "filme",
    ano: 1976,
    generos: ["drama", "crime"],
    nota: 10,
    assistido: true

},
{
    id: 7,
    titulo: "Brilho Eterno de uma Mente sem Lembranças",
    tipo: "filme",
    ano: 2004,
    generos: ["drama", "romance"],
    nota: 10,
    assistido: true

},
];
console.log(catalogo);

console.log(catalogo[0].titulo);

console.log(catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos.length > 1) {
    console.log(catalogo[2].generos[1]);
} else {
    console.log("Esse item possui apenas um gênero.");
}

catalogo.forEach(function(item) {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

const titulosEmCaixaAlta = catalogo.map(function(item) {
    return item.titulo.toUpperCase();
});

console.log(titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(function(item) {
    return item.assistido === false;
});

console.log(naoAssistidos);
console.log(naoAssistidos.length);

const notaAlta = catalogo.find(function(item) {
    return item.nota >= 9;
});

if (notaAlta) {
    console.log(notaAlta.titulo, notaAlta.nota);
} else {
    console.log("Nenhum item com nota maior ou igual a 9 foi encontrado.");
}

const somaNotas = catalogo.reduce(function(acumulador, item) {
    return acumulador + item.nota;
}, 0);

const mediaGeral = somaNotas / catalogo.length;

const assistidos = catalogo.filter(function(item) {
    return item.assistido === true;
});

const somaAssistidos = assistidos.reduce(function(acumulador, item) {
    return acumulador + item.nota;
}, 0);

const mediaAssistidos = somaAssistidos / assistidos.length;

console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média dos assistidos:", mediaAssistidos.toFixed(2));

const existeAntigo = catalogo.some(function(item) {
    return item.ano < 2000;
});

const todosTemGenero = catalogo.every(function(item) {
    return item.generos.length > 0;
});

console.log("Existe item antes de 2000?", existeAntigo);
console.log("Todos possuem gênero?", todosTemGenero);

const output = document.getElementById("output");

const totalFilmes = catalogo.filter(function(item) {
    return item.tipo === "filme";
}).length;

const totalSeries = catalogo.filter(function(item) {
    return item.tipo === "serie";
}).length;

const ranking = [...catalogo]

.sort(function(a, b) {
    return b.nota - a.nota;
})
.slice(0, 3);

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>
    <p>Total de itens: ${catalogo.length}</p>
    <p>Total de filmes: ${totalFilmes}</p>
    <p>Total de séries: ${totalSeries}</p>
    <p>Não assistidos: ${naoAssistidos.length}</p>
    <p>Média geral: ${mediaGeral.toFixed(2)}</p>

    <h3>Top 3 Notas</h3>
    <ul>
        <li>${ranking[0].titulo} - Nota: ${ranking[0].nota}</li>
        <li>${ranking[1].titulo} - Nota: ${ranking[1].nota}</li>
        <li>${ranking[2].titulo} - Nota: ${ranking[2].nota}</li>
    </ul>
`;
