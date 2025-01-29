const frm = document.querySelector("form")
const resposta1 = document.querySelector("#resp1")
const resposta2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) => {
    const medicamento = frm.remedio.value
    let preco = parseFloat(frm.valor.value)

    const precoTotal = preco * 2
    const centavos = precoTotal % 1
    const desconto = precoTotal - centavos

    resposta1.innerText = `Promoção de ${medicamento}`
    resposta2.innerText = `Leve 2 por apenas R$: ${desconto.toFixed(2)}`

    e.preventDefault()
}) 

