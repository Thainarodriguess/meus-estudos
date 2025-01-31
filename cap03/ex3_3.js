const prompt = require("prompt-sync")()

const salario = Number(prompt("Salário R$: "))
const tempoTrabalho = Number(prompt("Tempo(anos) "))

const quadrienios = Math.floor(tempoTrabalho/4)
const acrescimo = salario * quadrienios / 100

console.log(`Quadrienios: ${quadrienios}`)
console.log(`Salário final R$: ${(salario + acrescimo).toFixed(2)}`)