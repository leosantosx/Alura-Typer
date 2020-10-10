$('#botao-placar').click(mostraPlacar)
$('#botao-sync').click(sincronizaPlacar)

function mostraPlacar(){
    $('.placar').stop().slideToggle()
}

function sincronizaPlacar(){
    const placar = []
    const linhas = $('tbody tr')
    linhas.each(function(){
        const usuario = $(this).find("td:nth-child(1)").text()
        const palavras = $(this).find("td:nth-child(2)").text()
        const score = {
            usuario: usuario,
            pontos: palavras
        }

        placar.push(score)
    })

    enviaDadosPlacar(placar)
    
}

function enviaDadosPlacar(placar){
    dados = {
        placar: placar
    }

    $.post('http://localhost:3000/placar', dados, () => {
        console.log('Placar salvo com sucesso!');
    })

}

function inserePlacar(dado){
    const corpoTabela = $("tbody")
    const linha = criaLinha(dado.usuario, dado.pontos)
    linha.find('.botao-remover').click(removeLinha)
    corpoTabela.append(linha);
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


function atualizaPlacar(){
    $.get('http://localhost:3000/placar', function(data){
        $(data).each(function(){
            inserePlacar(this)
        })
    })
}