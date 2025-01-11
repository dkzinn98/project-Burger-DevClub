const listItens = document.querySelector('.allItens')
const buttonShowBurgers = document.querySelector('.showAll')
const buttonMapBurgers = document.querySelector('.mapAll')
const sumAll = document.querySelector('.sumAll')
const filterAll = document.querySelector('.filterAll')

// forEach (1° botão = mostrar os burger's ao clicar)

function showAll(productsArray) {
    let myListBurgers = ''

    productsArray.forEach((product) => {
        myListBurgers += `
            <li>
                <img src="${product.src}">
                <p class="burgerName">"${product.name}"</p>
                <p class="itemPrice">${formatToBRL(product.price)}</p>
            </li>
        `
    })
    listItens.innerHTML = myListBurgers
}

// Map | dando desconto (mostrar 10% de desconto em todos os produtos ao clicar)

function mapAll() {
    const newPrice = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.93 // dar 7% de desconto
    }))
    
    showAll(newPrice)
}

// somando o valor de todos os itens

function sumAllItens() {
  const totalValue = menuOptions.reduce( (acc, curr) => acc + curr.price, 0)
    
  listItens.innerHTML = `
    <li>
        <p>O valor total dos itens é de: R$ ${formatToBRL, totalValue}</p>
    </li>
    `
}

// Filter | Filtrando os itens veganos

function filterAllItens(){
    const filterAll = menuOptions.filter ((product) => product.vegan)
    
    showAll(filterAll)
}


// Função para formatar valores para BRL

function formatToBRL(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}

buttonShowBurgers.addEventListener('click', () => showAll(menuOptions))
buttonMapBurgers.addEventListener('click', mapAll)
sumAll.addEventListener('click', sumAllItens)
filterAll.addEventListener('click', filterAllItens)


