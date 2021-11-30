# Parte I - Criação de arquivos e diretórios

### Dica : Para criação de arquivos vazios você pode utilizar o comando touch nome-do-arquivo.extensao .

###### 1) Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.
> Digitamos o comando "mkdir" seguido do nome desejado para o diretório. E em seguida damos o comando "cd" para indicar o "change directory" e para qual diretório queremos ir. Assim escrevemos primeiro "**mkdir unix_tests**" e depois "**cd unix_tests**"

###### 2) Crie um arquivo de texto com o nome trybe.txt .
> Digitamos o comando "touch" seguido do nome do arquivo, ou seja, "**touch trybe.txt**"

###### 3) Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt .
> Para isso usamos o comando "cp" seguido do arquivo a ser copiado seguido pelo nome do novo arquivo: "**cp trybe.txt trybe_backup.txt**"

###### 4) Renomeie o arquivo trybe.txt .
> Fazemos uso do comando "mv" que serve para renomear mover um arquivo dando um novo nome. Para renomear basta escrevermos "mv" seguido do novo nome para o arquivo: "**mv trybe.txt tribo.txt**"

###### 5) Dentro de unix_tests , crie um novo diretório chamado backup .
> Após acessarmos o primeiro diretório por meio de "**cd unix_tests**" e usamos novamente o comando "mkdir" para criarmos o novo diretório: "**mkdir backup**"

###### 6) Mova o arquivo trybe_backup.txt para o diretório backup .
> Usamos o comando "mv" que serve tanto para renomear quanto para mover arquivos. Assim, digitamos no terminal: "**mv trybe_backup.txt ./backup**"

###### 7) Dentro de unix_tests , crie um novo diretório chamado backup2 .
> Primeiramente usamos o comando "**cd ..**" para sair do diretório backup e voltar para "**unix_tests**" e então digitamos o comando "**mkdir backup2**"
 
###### 8) Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2 .
> No meu computador damos o comando "**cd backup**" para acessar este diretório para em seguida escrevermos o comando mv com o destino de mudança para o arquivo "**mv trybe_backup.txt /home/tiagobviegas/Documents/Studies/unix_tests/backup2**" 

###### 9) Apague a pasta backup .
> Saimos da backup com o comando "**cd ..**" e digitamos o comando "rmdir" que exclui um diretório vazio: "**rmdir backup**"

###### 10) Renomeie a pasta backup2 para backup .
> Usamos o comando "**mv**" com as pasta de origem a ser renomeada seguida do nome que deverá ter: "**mv backup2 backup**"

###### 11) Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
> Digitamos o comando "**pwd**" que indica o caminho do diretório atual e em seguida o comando "**ls**" para lista o conteúdo do diretório

###### 12) Apague o diretório backup.
> Neste caso não podemos usar o comando "rmdir" pois o diretório não está vazio. Assim, podemos usar o comando "**rm**" para remover seguido de "**-r**", parâmetro de força a ação de remoção. Assim, escrevemos "**rm -r backup**" para eliminar o diretório sem necessitar confirmar a eliminação. 

###### 13) Limpe o terminal.
> Usamos o comando "**clear**" ("limpo" em inglês) para limpar o conteúdo da tela. Em alguns sistemas, o comando apenas traz o prompt de comando para a primeira linha da tela, mas mantém o conteúdo fora de vista.


###### Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt :

###### Internet
###### Unix
###### Bash
###### HTML
###### CSS
###### JavaScript
###### React
###### SQL

###### 14) Mostre na tela as 5 primeiras skills do arquivo skills.txt .
> Usamos o comando "**head**" para indicar que queremos exibir as primeiras linhas do conteúdo de um arquivo sequido de "**-5**" quantas linhas iniciais queremos exibir: "**head -5 skills.txt**"
> Internet
> Unix
> Bash
> HTML
> CSS

###### 15) Mostre na tela as 4 últimas skills do arquivo skills.txt .
> Usamos o comando "**tail**" para indicar que queremos exibir as últimas linhas do conteúdo de um arquivo sequido de "**-4**" quantas linhas finais queremos exibir: "**tails -4 skills.txt**"
CSS
JavaScript
React
SQL

###### 16) Apague todos os arquivos que terminem em .txt .
> usamos o carcter especial "__*__" para terminar que parte que precede ou antecede um palavra seja ignorado. Como queremos que todos os arquivos ".txt" sejam apagados, devemos usar "rm" antes de usar "__*.txt__", dizendo que a busca para eliminar arquivos devem ignorar qualquer coisa escrita antes de ".txt", ou seja, apenas arquivos terminados assim serão deletados. Escrevemos o seguinte: "__rm *.txt__"


