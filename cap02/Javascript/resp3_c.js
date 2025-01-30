const frm = document.querySelector("form")
const resp1 = document.querySelector("#resposta1")
const resp2 = document.querySelector("#resposta2")

frm.addEventListener("submit", (e) => {
    const produto = frm.produto.value
    const preco = Number(frm.preco.value)

    const promocao = (preco * 2) + (preco * 0.5)
    const precoProduto = preco * 0.5

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${promocao}`
    resp2.innerText = `O 3° produto custa apenas R$: ${precoProduto}`

    e.preventDefault()
})