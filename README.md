# Torre de Hanói

Este projeto é uma implementação do jogo clássico "Torre de Hanói" utilizando JavaScript, HTML e CSS puros. O objetivo do jogo é mover todos os discos de uma torre inicial para uma torre destino, seguindo algumas regras específicas.

## Visão Geral do Jogo

A Torre de Hanói é um quebra-cabeça matemático que consiste em três torres e um número de discos de diferentes tamanhos que podem ser empilhados em qualquer torre. O jogo começa com todos os discos empilhados na primeira torre, com o maior disco na parte inferior e o menor no topo. O objetivo é mover todos os discos para a terceira torre, seguindo estas regras:

1. Apenas um disco pode ser movido por vez.
2. Um disco só pode ser colocado em cima de outro disco maior ou em uma torre vazia.
3. Você deve usar a terceira torre como torre auxiliar para mover os discos entre a torre inicial e a torre destino.

## Estrutura do Projeto

### HTML

O arquivo HTML estrutura a interface do jogo, contendo três colunas representando as torres. Cada torre é um elemento `<div>` com classes específicas para identificação e manipulação via JavaScript.

### CSS

O CSS define o estilo das torres e dos discos, criando uma interface visualmente agradável e fácil de usar.

### JavaScript

O JavaScript é responsável pela lógica do jogo, permitindo a interação do usuário e implementando as regras da Torre de Hanói.

## Lógica do Jogo

1. **Inicialização**: Os discos são inicialmente colocados na primeira torre em ordem decrescente de tamanho.
2. **Seleção e Movimentação**: O jogador clica em uma torre para selecionar o disco no topo e clica em outra torre para movê-lo. A movimentação é permitida somente se a torre de destino estiver vazia ou se o disco no topo da torre de destino for maior que o disco sendo movido.
3. **Regras de Validação**: O JavaScript valida os movimentos, garantindo que os discos sejam movidos de acordo com as regras do jogo.
4. **Condição de Vitória**: O jogo termina quando todos os discos são movidos para a terceira torre em ordem correta.

## Como Jogar

1. Clique na torre contendo o disco que deseja mover.
2. Clique na torre de destino para mover o disco selecionado.
3. Repita os passos até que todos os discos estejam na terceira torre.

Divirta-se jogando a Torre de Hanói e testando sua lógica e habilidades de resolução de problemas!
