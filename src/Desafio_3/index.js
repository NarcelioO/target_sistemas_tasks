const fs = require('fs')
const dados = fs.readFileSync('dados.json', 'utf-8')
const array = JSON.parse(dados);

let menor = array[1].valor
let maior = array[1].valor
let dia = ''
let somaValores = 0
let media = 0
let goldenDays = 0

for(let i = 1; i < array.length ; i++){ 

    if (array[i].valor > 0){
        somaValores += array[i].valor
        media = somaValores / array.length

        if(array[i].valor > media){
            goldenDays ++
        }

        if(array[i].valor < menor){
            menor = array[i].valor
            dia = array[i].dia
        }
        
        if(array[i].valor > maior){
            maior = array[i].valor
        }
    }
}
console.log(`O menor valor de faturamento em um dia do mês: ${menor.toFixed(2)}\nO maior valor de faturamento em um dia do mês:${maior.toFixed(2)}\nNumero de dia que o valor de faturamento foi maior que a media mensal: ${goldenDays}`)
