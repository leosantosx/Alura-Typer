const frase = $('#frase').text()
const tamFrase = frase.split(' ').length
$('#tamanho-frase').text(tamFrase)


$('.campo-digitacao').on('input', () => {
    const campo = $('.campo-digitacao').val()
    
    $('#contador-caracteres').text(campo.length)

    const numPalavras = campo.split(' ').length
    $('#contador-palavras').text(numPalavras)
})