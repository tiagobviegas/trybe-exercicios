//  FOR IN
//
//  O 'for-in' permite percorrermos a propriedade declarada do conjunto chave-valor, de forma conjunta ou separada dos elementos que compõem as informações de chave e valor.
//
// pedidos de pizza
let pizzas = {
  sabor: 'Palmito',
  preco: 39.90,
  bordaCatupiry: true
};

// O laço 'for in' permite repetir toda a extensão do objeto como se fosse um array e percorrer todas as chaves e valores do objeto pela extenção dos conjuntos 'chave-valor' (key = chave, pizzas[key] = valor) do objeto. 

//  No caso abaixo, "key" representa as chaves contidas no (in) objeto "pizzas". Então ao determinar 'console.log(key)' solicitamos que imprima todas as chaves do objeto "pizzas".
for (let key in pizzas) {
  console.log(key)
}

// Já neste exemplo conseguimos exibir todos os valores do objeto.
for (let key in pizzas) {
  console.log(pizzas[key])
}
// OBS: Não é permitido o dot-notation para acessar os valores das chaves de uma vez só.

// Nos exemplos próximos 3 exemplos abaixo, como o laço se repete pela extensão do conjunto chave-valor do objeto mas estabelecemos a leitura apenas do valor contido na chave "sabor", então o laço 'for in' será executado por 3 vezes (a extensão dos elementos do objeto) imprimindo apenas o valor atribuído à chave "sabor" por 3 vezes.
for (let key in pizzas) {
  console.log(pizzas.sabor)
}

for (let key in pizzas) {
  console.log(pizzas.preco)
}

for (let key in pizzas) {
  console.log(pizzas.bordaCatupiry)
}

// FOR IN COM ARRAYS

let pizzasDoces = ['chocolate', 'banana', 'morango'];

// Quando usamos arrays as chaves dos valores são os índices do array. Por isso, no exemplo abaixo o "console.log" imprimirá "0, 1, 2" que são os índices do array "pizzasDoces".

for (let key in pizzasDoces) {
  console.log(key)
}

// Também podemos acessar os valores dos arrays da mesma forma como fazemos com objetos.
for (let key in pizzasDoces) {
  console.log(pizzasDoces[key])
}
// OBS: Assim com no exemplo anterior de mesma equivalência, não é permitido o dot-notation para acessar os valores das chaves de uma vez só.

// Assim como ocorre com os objetos, também é possível exibir as chaves junto aos valores do array. Como "key" está referenciado ao valor das chaves (índices do array), basta chamar antes ou depois separando por vígulas.
for (let key in pizzasDoces) {
  console.log(pizzasDoces[key], key)
}

for (let key in pizzasDoces) {
  console.log(key, pizzasDoces[key])
}

// OBS: a palavra "key" é pode ser trocada por qualquer outra, uma vez que linguagem faz a associação do termo inserido para a variável a referenciando às chaves do objeto. Assim, todos os exemplos a seguir resultarão na mesa associação de chave-valor do objeto.
for (let index in pizzasDoces) {
  console.log(index, pizzasDoces[index])
}
for (let opcoes in pizzasDoces) {
  console.log(opcoes, pizzasDoces[opcoes])
}
for (let bolinha in pizzasDoces) {
  console.log(bolinha, pizzasDoces[bolinha])
}
//
//  FOR OF
//
//  O 'for-of' possibilita "resumir" o laço a leitura e referência do "for" ao ir tiretamente ao valor de cada chave ao invés de acessá-la primeiro para posterioremente acessá-la. Veja a comparação  
//
for (let key in pizzasDoces) {
  console.log(pizzasDoces[key])
}

for (let value of pizzasDoces) {
  console.log(value);
}