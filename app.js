let valorGasosa = [];
function gasosa(){
    //pergunta a distancia percorrida
    let distanciaPercorrida = parseFloat(prompt('Qual é a distancia percorrida da sua casa até o trabalho (em km) ? '));
    //pergunta o consumo médio do veiculo
    let consumoMedioDoVeiculo = parseFloat(prompt('Qual é o consumo médio do veiculo(em Km/L) ? '));
    // faz a conta do consumo necessário
    let consumo_NecessarioLitros= distanciaPercorrida/ consumoMedioDoVeiculo;
    //operador ternario pra a palavra litros ou litro
    let palavraLitro = consumoMedioDoVeiculo > 1 ? 'litros' : 'litro';
    //traz o alert com as variaveis consumoNecessarioLitros e a variavel do operador ternario
    alert(`O consumo necessário é ${consumo_NecessarioLitros}  ${palavraLitro}`);
}
//chama a função sem parametros
gasosa()

//abre a funcao para perguntar a questão da quantidades de posto e a media junto com o maior e menor valor 
function postoEMedia(){
    // pergunta a quantidade de postos que foram pesquisados
    quantidadeDePostos = prompt('Em quantos postos você pesquisou? ');
    //coloca o número de postos em quantidade de pessoas
    quantidadeDePostos = Number(quantidadeDePostos);
    //colocoa o laço for 
    for(let i = 0; i != quantidadeDePostos; i++){
        let valor = prompt(`Digite o valor encontrado (em R$) no posto ${i+1}`);
        valorGasosa.push(valor);
    }
    let menor_Valor_Pesquisado;
    let maior_Valor_Pesquisado;
    media = soma_Total_Valores_Pesquisados/ quantidadeDePostos;
    gasto_Diario = 2*(consumo_NecessarioLitros* menor_Valor_Pesquisado)
    console.log(valorGasosa);    
}

postoEMedia();



