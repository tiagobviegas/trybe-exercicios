// ARRAY.FILTER

// O array.filter retorna outro array com todos os elementos que satisfaçam à condição verificada pela função. Recebe um parâmetro obrigatório que é uma função, e dois opcionais, sendo eles o index e o próprio array.

const arr = ['Tiago', 'Ianny', 'Lis', 'Lia', 'Noah', 'Alex', 'Aaron', 'Sheik'];

console.log(arr.filter((name) => name.split('').length < 5));