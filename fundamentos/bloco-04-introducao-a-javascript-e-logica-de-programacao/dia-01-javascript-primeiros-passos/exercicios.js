// EXERCÍCIOS | VARIÁVEIS

// Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
//  1) Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
  const birthCity = 'Brasília';
//  2) Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
  let birthYear = 1981;
//  3) Utilize o console.log() para imprimir as constantes e variáveis que você criou.
  console.log(birthCity, birthYear);
//  4) Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
  birthYear = 2030;
  console.log(birthYear);
//  5) Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 
  birthCity = 'Distrito Federal';
  console.log(birthCity);
  // O erro ocorre porque não é possível alterar um valor atribuído a uma constante de forma direta ou por redeclarção.