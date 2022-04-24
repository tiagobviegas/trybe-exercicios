const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

//  for (const chaves in coolestTvShow) {   // retorna o nome das chaves
//    console.log(chaves);
//  }

console.log(Object.keys(coolestTvShow));  // retorna um array com os nomes das chaves
console.log(Object.values(coolestTvShow));  // retorna um array de arrays de chaves-valores
console.log(Object.entries(coolestTvShow));  // retorna um array de arrays de chaves-valores

const coolestMovie = {
  title: "Inception",
  genre: "science/Fiction",
  directors: "Emma Thomas, Chistopher Nolan",
  soundtrack: "Hans Zimmer",
};

const coolestConcert = {
  title: "Live At Red Rock",
  group: "Dave Matthews Band",
  artists: ["Dave Matthews", "Carter Beauford", "Stefan Lessard", "Leroy Moore", "Boyd Tinsley"],
  specialGuests: ["Tim Reynolds", "The Flackstones"],
}

console.log(Object.assign(coolestTvShow, coolestMovie, coolestConcert));  // insere em um objeto (primeiro valor) outro(s) objeto(s) (demais valores). Chaves com o mesmo nome serão sobescritas pelo último valor inserido, como ocorre aqui com as chaves "genre" que foi atualizada para "Science/Fiction" e a key "title", que inicialmente possuia o valor "Inception" e foi atualizada para "Live at Red Rock".

// Para alterar os valores de chaves de um novo objeto sem alterar os valores do objeto clonado fazemos o "Object.assign" do novo objeto clone associando o primeiro valor um objeto vazio por meio de "{}" seguido dos objetos dos quais queremos pegar as chaves do objeto original para inserir no novo objeto clonado. E então apenas alteramos o valor das chaves fazendo as referências das chaves ao objeto clonado.

const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);
