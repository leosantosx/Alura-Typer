const campo = $('.campo-digitacao')
const tempoRestante = $('#tempo-digitacao').text()

$(document).ready(() => {
    inicializaTamanhoFrase()
    inicializaContadores()
    inicializaMarcadores()
    iniciaCronometro()
    $('#reinicia-jogo').click(reiniciaJogo)
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
                clearInterval(cronometroId)
                finalizaJogo()
            }
        }, 1000)
    })
}

function inicializaMarcadores(){
     const frase = $('#frase').text()
     campo.on('input', () => {
         const digitado = campo.val()
         const comparavel = frase.substr(0, digitado.length)
         if(digitado == comparavel){
            campo.removeClass('borda-vermelha')
            campo.addClass('borda-verde')
         }else{
            campo.removeClass('borda-verde')
            campo.addClass('borda-vermelha')
         }
     })
}

function finalizaJogo(){
    campo.attr('disabled', true)
    campo.toggleClass('campo-desativado')
    inserePlacar()
}

function reiniciaJogo(){
    campo.attr('disabled', false)
    campo.val('')
    campo.toggleClass('campo-desativado')
    campo.removeClass('borda-vermelha')
    campo.removeClass('borda-verde')
    $('#contador-caracteres').text('0')
    $('#contador-palavras').text('0')
    $('#tempo-digitacao').text(tempoRestante)
    iniciaCronometro()
}