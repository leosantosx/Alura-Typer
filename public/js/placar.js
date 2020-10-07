function inserePlacar(){
    const corpoTabela = $("tbody")
    const numPalavras = $('#contador-palavras').text()
    const nomeJogador = 'Leo'

    const linha = criaLinha(nomeJogador, numPalavras)
    linha.find('.botao-remover').click(removeLinha)
    corpoTabela.append(linha);
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

    console.log(linhaTr);
    return linhaTr
}

function removeLinha(event){
    event.preventDefault()
    $(this).parent().parent().remove()
}