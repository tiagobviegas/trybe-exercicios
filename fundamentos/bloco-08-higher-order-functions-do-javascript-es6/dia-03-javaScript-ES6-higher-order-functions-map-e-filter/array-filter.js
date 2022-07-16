// ARRAY.FILTER

// O array.filter retorna um novo array com os elementos relativos à condição estabelecida na função. O array.filter recebe três parâmetro, sendo um deles obrigatório, que é uma função. Os outros dois, opcionais, são o index do array e o próprio array.

const arr = ['Tiago', 'Ianny', 'Lis', 'Lia', 'Noah', 'Alex', 'Aaron', 'Sheik'];

console.log(arr.filter((name) => name.split('').length < 5));

