$('#botao-frase').click(fraseAleatoria)
$('#botao-frase-id').click(buscaFrase)

function fraseAleatoria(){
    $("#spinner").show()
    $.get('http://localhost:3000/frases', trocaFraseAleatoria)
    .fail(() => {
        $('#erro').show()
        setTimeout(() => {
            $('#erro').hide()
        }, 3000)
    }).always(() => {
        $("#spinner").hide()
    })
}

function trocaFrase(frase){
    $('#frase').text(frase.texto)
    inicializaTamanhoFrase()
    atualizaTempoInicial(frase.tempo)
}

function trocaFraseAleatoria(data){
    const numAleatorio = Math.floor(Math.random() * data.length)
    frase = data[numAleatorio]
    trocaFrase(frase)
}

function buscaFrase(){
    $('#spinner').show()

    const fraseId = $('#frase-id').val()
    const dado = {id: fraseId}
    $.get('http://localhost:3000/frases', dado, trocaFrase)
    .fail(() => {
        $('#erro').show()
        setTimeout(() => {
            $('#erro').hide()
        }, 3000)
    })
    .always(() => { $('#spinner').hide() })
}
