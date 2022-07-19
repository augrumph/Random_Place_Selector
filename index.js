const lugares = [
  "Hamburgueria Americas",
  "Famiglia Ceschin",
  "Chealsea Café",
  "God save the Wine",
  "Outback",
  "Park da Pizza",
  "Churrascaria",
  "rock pizza roll",
];

let imagem = document.getElementById("choose");
let nome = document.getElementById("placeName");
let celebration = document.getElementById("celebration");

const escolha = () => {
  let lugar = lugares[Math.floor(Math.random() * lugares.length)];
  if (lugar == "Hamburgueria Americas") {
    imagem.innerHTML = `<img src='Assets/hamburgueria.jpeg'/>`;
    celebration.innerHTML = `<img src='Assets/celebration.jpeg'/>`;
    nome.innerText = "Hamburgueria das Americas ";
  } else if (lugar == "Famiglia Ceschin") {
    celebration.innerHTML = `<img src='Assets/celebration.jpeg'/>`;
    imagem.innerHTML = `<img src='Assets/pizza.jpeg'/>`;
    nome.innerText = "Famiglia Ceschin";
  } else if (lugar == "Chealsea Café") {
    celebration.innerHTML = `<img src='Assets/celebration.jpeg'/>`;
    imagem.innerHTML = `<img src='Assets/chealsea.jpg'/>`;
    nome.innerText = "Chealsea Café";
  } else if (lugar == "God save the Wine") {
    celebration.innerHTML = `<img src='Assets/celebration.jpeg'/>`;
    imagem.innerHTML = `<img src='Assets/wine.jpg'/>`;
    nome.innerText = "God save the Wine";
  } else if (lugar == "Outback") {
    celebration.innerHTML = `<img src='Assets/celebration.jpeg'/>`;
    imagem.innerHTML = `<img src='Assets/outbnack.jpg'/>`;
    nome.innerText = "Outback";
  } else if (lugar == "Park da Pizza") {
    celebration.innerHTML = `<img src='Assets/celebration.jpeg'/>`;
    imagem.innerHTML = `<img src='Assets/pizzapark.webp'/>`;
    nome.innerText = "Park da Pizza";
  } else if (lugar == "Churrascaria") {
    celebration.innerHTML = `<img src='Assets/celebration.jpeg'/>`;
    imagem.innerHTML = `<img src='Assets/churrasco.webp'/>`;
    nome.innerText = "Churrascaria";
  } else if (lugar == "rock pizza roll") {
    celebration.innerHTML = `<img src='Assets/celebration.jpeg'/>`;
    imagem.innerHTML = `<img src='Assets/pizzarock.jpg'/>`;
    nome.innerText = "Rock Pizza Roll";
  }
};
