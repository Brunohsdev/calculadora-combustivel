//função que calcula o consumo médio que o usario faz;
function calculoConsumomedio(){
    //Deve ser solicitado ao usuário a distância percorrida de sua casa até seu trabalho (em km). Uma caixa de diálogo prompt ou form html
    let distanciaPercorrida = parseFloat(prompt('Qual é a distancia percorrida da sua casa até o trabalho (em km) ? '));
    //Deve ser solicitado ao usuário o consumo médio do veículo (em Km/L).
    let consumoMedio = parseFloat(prompt('Qual é o consumo médio do veiculo(em Km/L) ? '));
    //adicionando uma condicional que verifica se o valor está negativo se sim ele acaba o codigo
    if(distanciaPercorrida < 0 || consumoMedio <0){
        alert('==ERROR==');
        return;
    }else{
        let consumo_NecessarioLitros = distanciaPercorrida/ consumoMedio;
        return consumo_NecessarioLitros;

    }

}

//função que calcula a media entre os postos e calcula o gasto diario
function mediaEGastoDiario(){
    //atribuo uma lista e chamo função calculoConsumomedio
    let valores = [];
    let consumo_NecessarioLitros = calculoConsumomedio();
    let valor_Total = 0;
    //peço que o user digite em quantos postos ele pesquisou para usar como o atributo do laço for
    let qtdPostos = parseInt(prompt('Em quantos postos você pesquisou ?'));
    //laço de repetição que coloca os valores em uma lista e soma todos os valores
    for(let i = 0; i != qtdPostos; i++){
        let valor = parseFloat(prompt(`Digite o valor encontrado no Posto ${i+1}`));
        valores.push(valor)
        valor_Total += valor; 
    }
    //calcula a média, menor valor e o gasto diario
    let media = Math.round(valor_Total/qtdPostos);
    let menor_Valor_Pesquisado = Math.min(...valores);
    gasto_Diario = 2*(consumo_NecessarioLitros * menor_Valor_Pesquisado);
    
    return {
        consumo_NecessarioLitros,
        media,
        menor_Valor_Pesquisado,
        gasto_Diario,
    }    
}

//funcao para exibir tela
function exibirTela(){
let mediaFunction = mediaEGastoDiario();
//teste no console
console.log(`Média ${mediaFunction.media}`);
console.log(`Menor valor ${mediaFunction.menor_Valor_Pesquisado}`);
console.log(`gasto diario ${mediaFunction.gasto_Diario}`);


alert(`O consumo necessário é de ${mediaFunction.consumo_NecessarioLitros} litros
O menor valor pesquisado é de ${mediaFunction.menor_Valor_Pesquisado} reais
A média de valores pesquisados é de R$ ${mediaFunction.media}
O gasto diário (ida e volta) é R$ ${mediaFunction.gasto_Diario} reais`);
}

exibirTela();
//fazendo a segunda parte do desafio
