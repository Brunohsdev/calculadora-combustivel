# calculadora-combustivel
Agora, que você aprendeu as estruturas de lógica de programação utilizando a linguagem JavaScript, desenvolva um
programa para uma grande empresa, seguindo as informações a seguir:
O aumento nos preços dos combustíveis é algo que tem preocupado muitas famílias na tomada de decisões ao
buscar locais onde abastecer. Você é colaborador da FORD, e, assim como você, existem outros colegas que
precisam avaliar:
• O consumo necessário em litros para o descolamento da casa para o trabalho
• O local mais acessível para abastecimento de combustível
• A média de valores de preços de combustíveis na região pesquisada
• O gasto diário com combustível
Com base nesta avaliação, cada colaborador realizou uma pesquisa na região onde mora, e os dados coletados serão
inseridos no programa a ser construído por você, que deve conter a seguinte estrutura:
1. Deve ser solicitado ao usuário a distância percorrida de sua casa até seu trabalho (em km). Uma caixa de diálogo
será exibida semelhante a que se encontra abaixo:


2
DESAFIO | INGLÊS TÉCNICO E
LÓGICA DE PROGRAMAÇÃO
Dica: é possível usar o método prompt para solicitar ao usuário a distância percorrida e como essa distância pode ser um valor real. Deve-se usar a função parseFloat para que seja lida uma entrada em valor flutuante.
O usuário poderá digitar qualquer valor real. Por exemplo: 20 Km ou 20.4 Km, como segue na imagem abaixo:
2. Deve ser solicitado ao usuário o consumo médio do veículo (em Km/L). Uma caixa de diálogo será exibida
semelhante à que se encontra abaixo:



Dica: é possível usar o método prompt, para solicitar ao usuário o consumo médio do veículo e como o consumo
médio pode ser um valor real. Deve-se usar a função parseFloat para que seja lida uma entrada em valor flutuante.
 O usuário poderá digitar qualquer valor real. Por exemplo: 10 Km ou 10.2 Km, como segue na imagem abaixo:
3. Deve ser calculado o consumo necessário em litros para realizar o deslocamento da casa até o trabalho, da
seguinte forma:
3
DESAFIO | INGLÊS TÉCNICO E
LÓGICA DE PROGRAMAÇÃO
consumo_NecessarioLitros = distancia_Percorrida/consumo_Medio
Dica: Deve ser declarada a variável consumoNecessarioLitros e atribuída a ela a razão entre a distância percorrida da
casa até o trabalho e o consumo médio do veículo, da seguinte forma:
var consumo_Necessario_Litros = distancia_Percorrida/consumo_Medio;
4. Deve ser apresentado na tela o consumo necessário em litros para realizar o deslocamento da casa até o trabalho.
Se usar o exemplo acima, com a distância percorrida de 20.4 Km e o consumo médio de 10.2 Km, deve ser exibida
na tela uma mensagem semelhante a essa:
O consumo necessário é 2 litros
Dica: Devem ser construídas funções, para quebrar linhas, nas saídas da tela e para mostrar as saídas na tela, sem
necessidade de repetir comandos de quebra de linha e para escrever no html da página. Como, por exemplo: usar a
palavra reservada function para criar funções e dentro dessa função usar comandos para quebrar linha, como:
 document.write("<br>");
E para mostrar algum texto:
 document.write(texto)
5. Deve ser solicitada ao usuário a quantidade de postos de combustíveis pesquisados e seus respetivos valores.

Dica: é possível usar o método prompt para solicitar ao usuário a quantidade de postos de combustíveis pesquisados
e, como a quantidade pode ser um valor inteiro, deve-se usar a função parseInt para que seja lida uma entrada em
valor inteiro.
O usuário poderá digitar qualquer valor inteiro, como, por exemplo: 4, como segue na imagem abaixo:
4
DESAFIO | INGLÊS TÉCNICO E
LÓGICA DE PROGRAMAÇÃO
6. Deve ser solicitado ao usuário, os valores de combustíveis pesquisados nos postos, lembrando que tais valores
devem ser números reais a serem somados e colocados em uma variável de quantidade total de valores de
combustíveis digitadas pelo usuário.
Dica 1: Tal solicitação deve ocorrer em uma estrutura de repetição, como, por exemplo, o for, pois ela irá controlar a
quantidade de valores de combustíveis pesquisados pelo colaborador e auxiliar na soma da quantidade total de
valores de combustíveis digitados pelo usuário.
Dica 2: O comando for vai executar um conjunto de comandos, de acordo com a quantidade de postos de
combustíveis pesquisada pelo usuário.
Dica 3: é possível usar o método prompt para solicitar ao usuário os valores de combustíveis e como estes de
combustíveis podem ser valor reais. Deve-se usar a função parseFloat para que sejam lidas entradas com valores
flutuantes.
Observação: No exemplo acima o usuário digitou a quantidade de 4 postos de combustíveis, logo, serão exibidas 4
caixas de diálogo para o usuário digitar o valor de cada posto solicitado, como segue abaixo:

5
DESAFIO | INGLÊS TÉCNICO E
LÓGICA DE PROGRAMAÇÃO
7. Deve ser utilizada uma estrutura condicional dentro da estrutura de repetição para verificar, dentre os valores que
o usuário digitou, qual o menor valor encontrado dentre a quantidade de postos que foi pesquisada.
Dica: Dentro da estrutura de repetição for, por exemplo, deve ser utilizada uma estrutura condicional if para verificar
qual o menor valor de preço de combustível encontrado pelo funcionário, dentre a quantidade de postos que foi
pesquisada. Os valores de combustíveis que o usuário digitou serão comparados por meio de uma análise
condicional com a estrutura if e será possível determinar qual é o menor valor encontrado pelo colaborador da
empresa, que será o usuário da aplicação criada por você.
8. Deve ser calculada e apresentada na tela uma média simples relacionada aos valores dos postos pesquisados pelo
usuário. Da seguinte forma:

 media=soma_total_Valores_Pesquisados/quantidade_Postos_Pesquisados;
9. Deve ser calculado e apresentado na tela o gasto diário, de acordo com o menor valor pesquisado pelo usuário,
no caso:
 gasto_Diario = 2*(consumo_Necessario_Litros*menor_Valor_Pesquisado)
Ao final, as seguintes mensagens devem ser exibidas na tela, considerando que os dados de entrada exemplificados
acima foram usados para teste.
6
DESAFIO | INGLÊS TÉCNICO E
LÓGICA DE PROGRAMAÇÃO
ENTREGÁVEL
Ao final, você deverá postar o arquivo com a seguinte nomenclatura:
DESAFIO_LOGICA <NOME DO ALUNO>.html
DESAFIO – PARTE 2
Após a finalização do programa, você deve testá-lo. No momento em que forem solicitados os valores dos combustíveis
pesquisados pelo usuário, você deve digitar um texto, no lugar do valor, pelo menos em uma das caixas de diálogo,
como, por exemplo:
7
DESAFIO | INGLÊS TÉCNICO E
LÓGICA DE PROGRAMAÇÃO
Se você seguiu as entradas do exemplo, as seguintes mensagens serão exibidas na tela:
Observe que a mensagem relacionada à média retorna um NaN, ou seja, não é um número. Dessa forma, você deve
apresentar alternativas para evitar a saída NaN (Not a Number) em média.
