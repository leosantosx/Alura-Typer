$('#botao-frase').click(fraseAleatoria)

function fraseAleatoria(){
    $("#spinner").show()
    $.get('http://localhost:3000/frases1', trocaFraseAleatoria)
    .fail(() => {
        $('#erro').show()
        setTimeout(() => {
            $('#erro').hide()
        }, 3000)
    }).always(() => {
        $("#spinner").hide()
    })
}

function trocaFraseAleatoria(data){
    const numAleatorio = Math.floor(Math.random() * data.length)
    frase = data[numAleatorio]
    $('#frase').text(frase.texto)
    
    inicializaTamanhoFrase()
    atualizaTempoInicial(frase.tempo)

}