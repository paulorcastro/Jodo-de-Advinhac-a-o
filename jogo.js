numerodojogo = 0


function jogar(){

    numerodojogo++

    var jogador1 = jogando("Digite um numero misterioso")
    var jogador2 = jogando("Adivinhe o numero")

    function jogando(mensagem){

        
        var n1 = parseInt(prompt(mensagem))

        if(n1 === NaN){

            alert("Somente numeros !!!")
            jogando(mensagem)
    
        }
    
        return n1
    }


    if(jogador1==jogador2){

        mostra(`<hr>Jogo ${numerodojogo}<hr> <br>  <strong>ACERTOU!!!</strong> O numero digitado foi ${jogador1}`)

    }else{

        mostra(`<hr>Jogo ${numerodojogo}<hr> <br> <strong>NÃO ACERTOU!!!</strong> O numero digitado foi ${jogador1}`)

    }
    
}
