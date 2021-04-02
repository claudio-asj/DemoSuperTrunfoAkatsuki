// dados das cartas
var cartaNagato = {
  nome:"Nagato",
  imagem:"imagens/nagato.png",
  atributos:{
    ninjutsu:10,
    genjutsu:0,
    taijutsu:0
  }
}
var cartaKonan = {
  nome:"Konan",
  imagem:"imagens/konan.png",
  atributos:{
    ninjutsu:8,
    genjutsu:0,
    taijutsu:0
  }
}
var cartaItachi = {
  nome:"Itachi Uchiha",
  imagem:"imagens/itachi.png",
  atributos:{
    ninjutsu:9,
    genjutsu:10,
    taijutsu:7
  }
}
var cartaTobi = {
  nome:"Tobi",
  imagem:"imagens/tobi.jpg",
  atributos:{
    ninjutsu:10,
    genjutsu:8,
    taijutsu:7
  }
}
var cartaZetsu = {
  nome:"Zetsu",
  imagem:"imagens/zetsu.jpg",
  atributos:{
    ninjutsu:6,
    genjutsu:6,
    taijutsu:6
  }
}
var cartaDeidara = {
  nome:"Deidara",
  imagem:"imagens/deidara.jpg",
  atributos:{
    ninjutsu:8,
    genjutsu:0,
    taijutsu:2
  }
}
var cartaSasori = {
  nome:"Sasori",
  imagem:"imagens/sasori.png",
  atributos:{
    ninjutsu:10,
    genjutsu:0,
    taijutsu:1
  }
}
var cartaHidan = {
  nome:"Hidan",
  imagem:"imagens/hidan.png",
  atributos:{
    ninjutsu:7,
    genjutsu:0,
    taijutsu:7
  }
}
var cartaKakuzu = {
  nome:"Kakuzu",
  imagem:"imagens/kakuzu.png",
  atributos:{
    ninjutsu:7,
    genjutsu:0,
    taijutsu:7
  }
}
var cartaKisame = {
  nome:"Kisame Hoshigaki",
  imagem:"images/kisame.png",
  atributos:{
    ninjutsu:9,
    genjutsu:0,
    taijutsu:6
  }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaNagato, cartaKonan, cartaItachi,cartaTobi,cartaZetsu,cartaDeidara,cartaSasori,cartaHidan,cartaKakuzu,cartaKisame]
var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()


// funções
function atualizaQuantidadeDeCartas() {
  var divQuantidadeCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar () {
  var divPlacar = document.getElementById('placar')
  var html = "jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
  divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)// apagado a carta da maquina

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)// apagado a carta do jogador

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador ++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina ++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if (cartas.length == 0) {
      alert("fim de jogo")
      if (pontosJogador > pontosMaquina){
        htmlResultado = '<p class="resultado-final">Boa!! Vc venceu do javaScript</p>'
      } else if (pontosMaquina > pontosJogador) {
        htmlResultado = '<p class="resultado-final">Eita!! Vc perdeu do javaScript</p>'
      } else {
        htmlResultado = '<p class="resultado-final">Aí é foda!! Vc empatou com javaScript</p>'
      }
    } else {
      document.getElementById('btnProximaRodada').disabled = false
    }
  
  
    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
    
  
    // setar 
    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
  
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
  var divCartas = document.getElementById('cartas')
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div><div id="carta-maquina" class="carta"></div>` //limpando a div de imagens
  //setando os botoes
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
}



