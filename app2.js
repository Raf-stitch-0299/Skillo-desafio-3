let contaRR = 0;

while (contaRR < 20){
    alert(`${contaRR}`)
    contaRR++;

    if(contaRR == 20 ){
        alert(` ${contaRR}, fim `)
    }
        
}

let contR = prompt( "escolha o tempo do cronometro" )

while( contR > 0 ){
    alert(` ${contR} `)
contR--;

if (contR == 0){
    alert(` ${contR}, BOOOOOOM!!!`)
}
}

let regresso = prompt( "subindo ate o andar..." )
let andarIicial = 0;

        while( andarIicial < regresso ){
            alert(`Subindo ---> ${andarIicial}` )
            andarIicial++;

            if ( andarIicial == regresso ){
                alert(`${andarIicial}, você chegou `)

            }
        }