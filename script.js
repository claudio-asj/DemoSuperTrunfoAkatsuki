// dados das cartas
var cartaNagato = {
  nome:"Nagato",
  imagem:"https://static.wikia.nocookie.net/naruto/images/7/7a/Nagato_Jovem.png/revision/latest/scale-to-width-down/310?cb=20200313165236&path-prefix=pt-br",
  atributos:{
    ninjutsu:10,
    genjutsu:0,
    taijutsu:0
  }
}
var cartaKonan = {
  nome:"Konan",
  imagem:"https://static.wikia.nocookie.net/naruto/images/b/b4/Konan_%28Parte_II%29.png/revision/latest/scale-to-width-down/310?cb=20151220140904&path-prefix=pt-br",
  atributos:{
    ninjutsu:8,
    genjutsu:0,
    taijutsu:0
  }
}
var cartaItachi = {
  nome:"Itachi Uchiha",
  imagem:"https://static.wikia.nocookie.net/naruto/images/8/8d/UchihaItachi.png/revision/latest/scale-to-width-down/310?cb=20180420021356&path-prefix=pt-br",
  atributos:{
    ninjutsu:9,
    genjutsu:10,
    taijutsu:7
  }
}
var cartaTobi = {
  nome:"Tobi",
  imagem:"https://i.pinimg.com/originals/bd/18/15/bd1815e277afa27f66f61647fd42bae8.jpg",
  atributos:{
    ninjutsu:10,
    genjutsu:8,
    taijutsu:7
  }
}
var cartaZetsu = {
  nome:"Zetsu",
  imagem:"http://pm1.narvii.com/6243/0fb372fcae9d0476ea58ebe56bac72666a3bfff1_00.jpg",
  atributos:{
    ninjutsu:6,
    genjutsu:6,
    taijutsu:6
  }
}
var cartaDeidara = {
  nome:"Deidara",
  imagem:"https://static.wikia.nocookie.net/naruto/images/c/c8/Deidara_surpreso_com_o_Sharingan_de_Itachi.png/revision/latest/scale-to-width-down/310?cb=20160329031729&path-prefix=pt-br",
  atributos:{
    ninjutsu:8,
    genjutsu:0,
    taijutsu:2
  }
}
var cartaSasori = {
  nome:"Sasori",
  imagem:"https://static.wikia.nocookie.net/naruto/images/2/26/Sasori_%28Passado%29.PNG/revision/latest/scale-to-width-down/310?cb=20141202201336&path-prefix=pt-br",
  atributos:{
    ninjutsu:10,
    genjutsu:0,
    taijutsu:1
  }
}
var cartaHidan = {
  nome:"Hidan",
  imagem:"https://static.wikia.nocookie.net/naruto/images/0/0f/Hidan_Parte_II.png/revision/latest/scale-to-width-down/310?cb=20160521003057&path-prefix=pt-br",
  atributos:{
    ninjutsu:7,
    genjutsu:0,
    taijutsu:7
  }
}
var cartaKakuzu = {
  nome:"Kakuzu",
  imagem:"https://static.wikia.nocookie.net/naruto/images/a/a3/Kakuzu_%28Shippuden%29.png/revision/latest/scale-to-width-down/310?cb=20140825181534&path-prefix=pt-br",
  atributos:{
    ninjutsu:7,
    genjutsu:0,
    taijutsu:7
  }
}
var cartaKisame = {
  nome:"Kisame Hoshigaki",
  imagem:"https://static.wikia.nocookie.net/naruto/images/c/c9/Kisame_Hoshigaki.png/revision/latest/scale-to-width-down/310?cb=20130305034004&path-prefix=pt-br",
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




/*

#Desafios

[] fazer a maquina escolher o atributo nas rodadas pares
[] fazer quem ganha pegar a carta de quem perdeu
*/