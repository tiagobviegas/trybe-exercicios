<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Leitor</title>
  <style>
  body {
      margin: 10px;
  }
  .preferences {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      border: 1px solid green;
  }
  .options {
      display: flex;
      flex-direction: column;
  }
  .title {
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .description {
      display: flex;
      justify-content: center;
      align-items: center;
      font-style: italic;
  }
  .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 15px;
  }
  .paragraph {
      display: flex;
  }
  </style>
  <script>
    window.onload = () => {
      const setBackgroundColor = (color) => {
        let content = document.querySelector(".content")
        content.style.backgroundColor = color
        localStorage.setItem("backgroundColor", color)
      }

      const setFontColor = (color) => {
        let paragraphs = document.querySelectorAll(".paragraph")
        for (let index = 0; index < paragraphs.length; index += 1) {
          paragraphs[index].style.color = color
        }
        localStorage.setItem("fontColor", color)
      }

      const setFontSize = (size) => {
        let paragraphs = document.querySelectorAll(".paragraph")
        for (let index = 0; index < paragraphs.length; index += 1) {
          paragraphs[index].style.fontSize = size
        }
        localStorage.setItem("fontSize", size)
      }

      const setLineHeight = (height) => {
        let paragraphs = document.querySelectorAll(".paragraph")
        for (let index = 0; index < paragraphs.length; index += 1) {
          paragraphs[index].style.lineHeight = height
        }
        localStorage.setItem("lineHeight", height)
      }

      const setFontFamily = (family) => {
        let paragraphs = document.querySelectorAll(".paragraph")
        for (let index = 0; index < paragraphs.length; index += 1) {
          paragraphs[index].style.fontFamily = family
        }
        localStorage.setItem("fontFamily", family)
      }

      // Cor de fundo da tela;

      let backgroundColorButtons = document.querySelectorAll("#background-color>button")
      for (let index = 0; index < backgroundColorButtons.length; index += 1) {
        backgroundColorButtons[index].addEventListener("click", (event) => {
          setBackgroundColor(event.target.innerHTML)
        })
      }

      // Cor do texto;
      let fontColorButtons = document.querySelectorAll("#font-color>button")
      for (let index = 0; index < fontColorButtons.length; index += 1) {
        fontColorButtons[index].addEventListener("click", (event) => {
          setFontColor(event.target.innerHTML)
        })
      }

      // Tamanho da fonte
      let fontSizeButtons = document.querySelectorAll("#font-size>button")
      for (let index = 0; index < fontSizeButtons.length; index += 1) {
        fontSizeButtons[index].addEventListener("click", (event) => {
          setFontSize(event.target.innerHTML)
        })
      }

      // Espaçamento entre as linhas do texto;
      let lineHeightButtons = document.querySelectorAll("#line-height>button")
      for (let index = 0; index < lineHeightButtons.length; index += 1) {
        lineHeightButtons[index].addEventListener("click", (event) => {
          setLineHeight(event.target.innerHTML)
        })
      }

      // Tipo da fonte (_Font family_).
      let fontFamilyButtons = document.querySelectorAll("#font-family>button")
      for (let index = 0; index < fontFamilyButtons.length; index += 1) {
        fontFamilyButtons[index].addEventListener("click", (event) => {
          setFontFamily(event.target.innerHTML)
        })
      }

      const initialize = () => {
        let backgroundColor = localStorage.getItem("backgroundColor")
        if (backgroundColor) setBackgroundColor(backgroundColor)

        let fontColor = localStorage.getItem("fontColor")
        if (fontColor) setFontColor(fontColor)

        let fontSize = localStorage.getItem("fontSize")
        if (fontSize) setFontSize(fontSize)

        let lineHeight = localStorage.getItem("lineHeight")
        if (lineHeight) setLineHeight(lineHeight)

        let fontFamily = localStorage.getItem("fontFamily")
        if (fontFamily) setFontFamily(fontFamily)
      }

      initialize()
    }
  </script>
</head>
<body>
  <section class="preferences">
    <section id="background-color" class="options">
      <span>Cor de fundo</span>
      <button>white</button>
      <button>black</button>
      <button>green</button>
      <button>blue</button>
      <button>yellow</button>
    </section>
    <section id="font-color" class="options">
      <span>Cor da fonte</span>
      <button>black</button>
      <button>red</button>
      <button>white</button>
    </section>
    <section id="font-size" class="options">
      <span>Tamanho da fonte</span>
      <button>8pt</button>
      <button>10pt</button>
      <button>12pt</button>
      <button>14pt</button>
      <button>20pt</button>
    </section>
    <section id="line-height" class="options">
      <span>Espaçamento entre as linhas</span>
      <button>1</button>
      <button>normal</button>
      <button>1.5</button>
      <button>2.0</button>
      <button>3.0</button>
    </section>
    <section id="font-family" class="options">
      <span>Tipo da fonte</span>
      <button>Arial</button>
      <button>Times New Roman</button>
    </section>
  </section>
  <main>
    <section class="title">
      <h1>Lorem Ipsum</h1>
    </section>
    <section class="description">
      <h3>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h3>
    </section>
    <article class="content">
      <p class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet tellus purus. Sed blandit nec duit eu lacinia. Vestibulum tincidunt hendrerit turpis, vitae hendrerit ipsum mollis at. Nulla a leo purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce ac tellus at ante ullamcorper finibus. Sed efficitur risus sit amet diam fringilla sagittis. Mauris enim elit, sagittis tincidunt arcu id, efficitur blandit magna. Sed ac aliquam ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse lobortis aliquam lacus sit amet consectetur. Nulla neque lectus, venenatis bibendum tortor sed, rhoncus consectetur mauris. Phasellus ac aliquet massa. Donec vitae odio et mauris vehicula euismod. Vivamus tempor justo sit amet ornare fermentum.
      </p>
      <p class="paragraph">
        Proin imperdiet velit enim, eget vestibulum urna commodo non. Cras tincidunt nisl in venenatis maximus. Donec sit amet sem at quam suscipit pharetra. Integer feugiat id nunc volutpat laoreet. Donec ornare sodales ipsum. Nam efficitur est felis, vitae tempor lorem porttitor eget. Vestibulum eu nisl vitae nulla iaculis tempus sit amet et dui. Phasellus eget erat id nibh pulvinar sodales. Praesent fermentum erat at mauris feugiat semper. In congue nisi ut dignissim mattis. Cras fringilla a ante a dapibus. Nulla fringilla dolor vel massa lobortis fringilla.
      </p>
      <p class="paragraph">
        Vestibulum blandit, diam at lacinia hendrerit, augue velit varius turpis, at imperdiet lacus tellus vel felis. Quisque velit magna, faucibus sit amet sem consequat, fermentum ultrices lorem. Integer vestibulum purus vel tincidunt mattis. Suspendisse lacinia sodales nibh. In hac habitasse platea dictumst. Curabitur at cursus lectus, sit amet vestibulum dolor. Mauris ultricies lacus quis arcu faucibus varius. Nulla venenatis neque sed nisl consequat lobortis. Praesent pretium rhoncus tellus a pellentesque. In et tincidunt odio. Praesent pulvinar dapibus mi, in dapibus lacus rhoncus eget. Nam laoreet metus nibh, sit amet semper mi lacinia id.
      </p>
      <p class="paragraph">
        Vivamus ac ullamcorper nisl, eget rutrum mauris. Praesent nec elementum sem, et porttitor sem. Morbi placerat urna sit amet iaculis egestas. Suspendisse malesuada eget risus congue pulvinar. Donec nisi elit, cursus quis tempus sed, accumsan non mauris. Praesent ligula leo, auctor ullamcorper ultricies nec, sagittis et leo. Sed convallis ut tellus lobortis consectetur. Pellentesque mauris lectus, pretium at nunc a, porttitor dictum ipsum. Morbi suscipit ultrices massa nec egestas. Curabitur scelerisque sem vitae commodo dictum. Phasellus pretium luctus nulla vel aliquet. Duis at arcu vitae elit lacinia semper.
      </p>
      <p class="paragraph">
        Nullam pulvinar ullamcorper dignissim. Ut blandit a tortor ac vehicula. Cras lobortis fermentum nibh eu finibus. Aenean commodo suscipit tincidunt. Pellentesque tincidunt sem sem, nec fermentum nisi fringilla ut. Etiam id porttitor ex. Fusce iaculis ultricies ex, quis dapibus sem maximus eu. In pharetra condimentum nisi in aliquet. Pellentesque pharetra nulla at turpis venenatis, eu luctus lacus imperdiet. Cras dui felis, pharetra sagittis purus et, rutrum feugiat quam. Morbi nec venenatis dolor. Donec vulputate in nibh et feugiat. Ut eros orci, auctor et faucibus ac, laoreet eu mi. Morbi sollicitudin magna dui. Proin nec libero sit amet felis mattis tempor a vel leo. Mauris elit nisl, tristique a lectus vel, varius finibus elit.
      </p>
      <p class="paragraph">
        Duis felis nibh, laoreet vitae ligula in, sagittis faucibus diam. Ut pretium placerat ante, id aliquet metus consectetur a. Suspendisse libero nisi, consequat a fermentum id, elementum ut nisl. Nulla facilisi. Mauris placerat mauris sed libero venenatis tempus. Praesent gravida metus erat, eu accumsan orci vestibulum sed. Cras massa sem, rutrum in libero at, ornare feugiat nunc.
      </p>
      <p class="paragraph">
        Morbi pharetra ullamcorper neque. Cras luctus volutpat sem, eget placerat libero malesuada a. Nullam accumsan dolor ac felis varius eleifend. In vitae justo convallis enim fermentum vestibulum in non lacus. Etiam pellentesque scelerisque orci, nec euismod diam lobortis at. Pellentesque id massa quis felis rhoncus condimentum. Nunc ultricies, arcu sed blandit condimentum, nulla lacus rhoncus ligula, non fringilla ante velit sed tortor. Nullam congue euismod leo sit amet elementum.
      </p>
      <p class="paragraph">
        Morbi auctor erat non molestie venenatis. Donec pellentesque egestas dignissim. Quisque sed tempus erat, eu iaculis urna. Vestibulum eu efficitur elit, sed gravida diam. Aenean et ligula laoreet, tempus turpis id, bibendum mi. In mollis accumsan magna, eget feugiat ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer suscipit nisl felis, id pellentesque elit varius vel. Suspendisse sed lobortis tellus. Aliquam ut libero maximus, sollicitudin justo a, aliquam nisi.
      </p>
      <p class="paragraph">
        Proin magna lectus, tincidunt at congue id, fermentum at metus. Phasellus pretium efficitur ornare. Duis at convallis purus. Phasellus ac metus a quam sollicitudin aliquam. Maecenas mi quam, venenatis ut fringilla sit amet, iaculis vitae tortor. In lorem augue, auctor egestas odio nec, rutrum mollis est. Curabitur condimentum sit amet odio porta interdum. Nullam eleifend laoreet mi, eget dignissim nisi consequat volutpat.
      </p>
      <p class="paragraph">
        Integer mollis consequat finibus. Maecenas vitae porttitor turpis. Phasellus id enim quis lorem consequat aliquet eget non lacus. In varius bibendum turpis, non ultricies lacus scelerisque sed. Vivamus sagittis fringilla iaculis. Maecenas eget nisl euismod, pellentesque dui sed, tristique metus. Donec porta eu lorem sed egestas. Duis luctus tortor ac ipsum malesuada, non tincidunt justo lacinia. Suspendisse commodo magna eros, id accumsan mauris convallis id. Integer ullamcorper arcu sit amet placerat dictum. Vestibulum auctor ut felis et fermentum. Praesent tempor vitae velit congue lobortis. Proin velit turpis, tempus eu elit non, convallis ornare libero.
      </p>
    </article>
  </main>  
</body>
</html>