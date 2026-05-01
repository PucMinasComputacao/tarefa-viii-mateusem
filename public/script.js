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