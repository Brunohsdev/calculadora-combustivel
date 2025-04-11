///colocar função
function br(){
document.write("<br>")
}

function ExibirTexto(texto, tag){
    document.write(texto);
    br();
}

while(true){    
//declaração de variaveis  e pedido da distância casa/trabalho
    let distanciaPercorrida = parseFloat(prompt('Qual é a distancia percorrida da sua casa até o trabalho (em km) ? '));
    let consumoMedio;
    //testando se o número é válido ou se não é um número
    if (distanciaPercorrida <= 0 || isNaN(distanciaPercorrida)){
        alert('===ERROR===\n===Value is invalid===');
    }else{
     consumoMedio = parseFloat(prompt('Qual é o consumo médio do veiculo(em Km/L) ? '));
     //testando se o número é válido ou se não é um número
     if (consumoMedio <= 0 || isNaN(consumoMedio)){
         alert('===ERROR=== \n===Value is invalid===');
     }
     //calculando o consumo necessário do usuario
     else{
         var consumo_NecessarioLitros = distanciaPercorrida/ consumoMedio;
         break;
 
     }
    }
}


    
    
    let valorEncontradoNoPosto;
    let valorTotal = 0;
    let media;
    let menorValorPesquisado = 1000;
    let gastoDiario;
    let qtdPostos = parseInt(prompt('Em quantos postos você pesquisou ?'));
    if (qtdPostos <= 0 || isNaN(qtdPostos)){
        alert('===ERROR=== \n===Value is invalid===');
    }  else{
        for(let i = 0; i != qtdPostos; i++){
            let mensagemDoPosto = `encontrado no posto ${i + 1}`;
            valorEncontradoNoPosto = parseFloat(prompt(`Digite o valor (em R$) ${mensagemDoPosto}`));
            if (valorEncontradoNoPosto <= 0 || isNaN(valorEncontradoNoPosto)){
                alert(`===ERROR=== \n===Value is invalid===\n===Digite novamente o valor ${mensagemDoPosto}===`);
                i -= 1;
            }else{
                valorTotal += valorEncontradoNoPosto;  
                
            if(valorEncontradoNoPosto < menorValorPesquisado){
                menorValorPesquisado = valorEncontradoNoPosto;
            }
        }
    }
    media = parseFloat(valorTotal)/qtdPostos;
    gastoDiario = 2*(consumo_NecessarioLitros*menorValorPesquisado);
    console.log(menorValorPesquisado);
    console.log(valorTotal);
    console.log(valorEncontradoNoPosto);
    console.log(media);
    ExibirTexto('===Resultado===', 'h2');
    ExibirTexto(`O consumo necessário é de ${consumo_NecessarioLitros.toFixed(2)}`, 'p');
    ExibirTexto(`O menor valor foi de ${menorValorPesquisado}`, 'p');
    ExibirTexto(`A média dos valores pesquisados é de ${media.toFixed(2)}`,'p');
    ExibirTexto(`o gasto diario (ida e volta) é de ${gastoDiario.toFixed(2)}`,'p');
    
}
