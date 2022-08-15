//  Objetos: Parte I - Adicionando novas chaves (keys)

//  No exemplo acima, você viu que há diferentes formas de associar chaves e valores a um objeto.
//  Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const family = {};

const viegasFamily = (obj, key, value) => {
  obj[key] = value
  return obj
}

viegasFamily(family, 'name', 'Tiago');
viegasFamily(family, 'lastName', 'Viegas');
viegasFamily(family, 'age', 40);
viegasFamily(family, 'profession', 'Dev');
console.log(family);

//_________________________________________________________


