$('#botao-frase').click(fraseAleatoria)

function fraseAleatoria(){
    $.get('http://localhost:3000/frases', trocaFraseAleatoria)
}

function trocaFraseAleatoria(data){
    const numAleatorio = Math.floor(Math.random() * data.length)
    frase = data[numAleatorio]
    $('#frase').text(frase.texto)
    
    inicializaTamanhoFrase()
    atualizaTempoInicial(frase.tempo)

}