const campo = $('.campo-digitacao')
const tempoRestante = $('#tempo-digitacao').text()

$(document).ready(() => {
    inicializaTamanhoFrase()
    inicializaContadores()
    iniciaCronometro()
    $('.reinicia-jogo').click(reiniciaJogo)
})

function inicializaTamanhoFrase(){
    const frase = $('#frase').text()
    const tamFrase = frase.split(' ').length
    $('#tamanho-frase').text(tamFrase)
}

function inicializaContadores(){
    campo.on('input', () => {
        const campo = $('.campo-digitacao').val()
        
        $('#contador-caracteres').text(campo.length)

        const numPalavras = campo.split(/\S+/).length - 1
        $('#contador-palavras').text(numPalavras)
    })
}

function iniciaCronometro(){
    let tempoRestante = $('#tempo-digitacao').text()
    campo.one('focus', () => {
        const cronometroId = setInterval(() => {
            tempoRestante--
            $('#tempo-digitacao').text(tempoRestante)
            if(tempoRestante <= 0){
                campo.attr('disabled', true)
                clearInterval(cronometroId)
            }
        }, 1000)
    })
}

function reiniciaJogo(){
    campo.attr('disabled', false)
    campo.val('')
    $('#contador-caracteres').text('0')
    $('#contador-palavras').text('0')
    $('#tempo-digitacao').text(tempoRestante)
    iniciaCronometro()
}

