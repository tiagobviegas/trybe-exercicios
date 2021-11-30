let linha = '';
function asteriscos(n){
  for(let contador = 0; contador < n; contador += 1){
    for(let index = 0; index < n; index += 1){
      linha += '*';
    }
    console.log(linha);
    linha = '';
  }
}
asteriscos(5)