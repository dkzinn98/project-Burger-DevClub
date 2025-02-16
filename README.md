# 🍔 Project Burger DevClub

Este projeto é um menu interativo de hambúrgueres, permitindo visualizar os itens disponíveis, aplicar descontos, calcular o valor total e filtrar hambúrgueres veganos.

## 📌 Funcionalidades

- Exibir todos os hambúrgueres disponíveis
- Aplicar desconto de 7% em todos os itens
- Somar o valor total dos hambúrgueres
- Filtrar apenas opções veganas

## 🛠️ Tecnologias Utilizadas

- HTML
- CSS
- JavaScript (DOM Manipulation)

## 🚀 Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/dkzinn98/project-Burger-DevClub.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd project-Burger-DevClub
   ```
3. Abra o arquivo `index.html` no seu navegador.

## 📜 Estrutura do Código

### `products.js`
Define um array com os hambúrgueres disponíveis no menu, contendo:
- `name`: Nome do hambúrguer
- `price`: Preço do hambúrguer
- `vegan`: Se é uma opção vegana
- `src`: Caminho da imagem do hambúrguer

### `script.js`
Manipula a exibição dos hambúrgueres com as seguintes funções:
- `showAll(productsArray)`: Exibe todos os hambúrgueres na tela.
- `mapAll()`: Aplica um desconto de 7% em todos os itens.
- `sumAllItens()`: Calcula e exibe o valor total dos hambúrgueres.
- `filterAllItens()`: Filtra e exibe apenas os hambúrgueres veganos.
- `formatToBRL(value)`: Formata valores para o formato de moeda brasileira (R$).

Os botões interagem com o menu através de eventos `click`:
- `buttonShowBurgers`: Exibe todos os hambúrgueres
- `buttonMapBurgers`: Aplica desconto
- `sumAll`: Soma o valor total
- `filterAll`: Filtra opções veganas

## 📌 Melhorias Futuras

- Adicionar um backend para armazenar os pedidos
- Criar um sistema de login e personalização do pedido
- Implementar um design responsivo

## 📝 Licença

Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).

---

Feito com ❤️ por [Deryk Silva](https://github.com/dkzinn98) 🚀
