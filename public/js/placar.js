const nomeJogador = 'Leo'

$('#botao-placar').click(mostraPlacar)
$('#botao-sync').click(sincronizaPlacar)

function mostraPlacar(){
    $('.placar').stop().slideToggle()
}

function sincronizaPlacar(){
    console.log('Sincronizando placar...');
}

function inserePlacar(){
    const corpoTabela = $("tbody")
    const numPalavras = $('#contador-palavras').text()

    const linha = criaLinha(nomeJogador, numPalavras)
    linha.find('.botao-remover').click(removeLinha)
    corpoTabela.append(linha);
    $('.placar').slideDown(500)
    scrollPlacar()
}

function scrollPlacar(){
    const posicaoPlacar = $('.placar').offset().top
    $('html').animate({
        scrollTop: posicaoPlacar
    }, 1000)
}

function criaLinha(nomeJogador, numPalavras){

    const linhaTr = $('<tr>')
    const tdNome = $('<td>').text(nomeJogador)
    const tdNumPalavras = $('<td>').text(numPalavras)
    const tdBotaoRemover = $('<td>')

    const ancora = $('<a>').addClass('botao-remover').attr('href', '#')
    const icone = $('<i>').text('delete').addClass('small').addClass('material-icons')
    ancora.append(icone)
    tdBotaoRemover.append(ancora)

    linhaTr.append(tdNome)
    linhaTr.append(tdNumPalavras)
    linhaTr.append(tdBotaoRemover)

    return linhaTr
}

function removeLinha(event){
    event.preventDefault()
    const linha = $(this).parent().parent()
    linha.fadeOut(1000)
    setTimeout(() => {
        linha.remove()
    }, 1000)
}
