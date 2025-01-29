const frm = document.querySelector("form")
const resposta = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.valor.value)
    const tempo = Number(frm.tempo.value)

    const quinzeMinutos = Math.ceil(tempo / 15)
    const valorTotal = quinzeMinutos * valor

    resposta.innerText= `Valor a pagar R$: ${valorTotal.toFixed(2)}`

    e.preventDefault()
})