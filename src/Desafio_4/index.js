const data = [
    {
        "estado": "SP",
        "valor": 67836.43
    },
    {
        "estado": "RJ",
        "valor": 36678.66
    },
    {
        "estado": "MG",
        "valor":  29229.88
    },
    {
        "estado": "ES",
        "valor": 27165.00
    },
    {
        "estado": "Outros",
        "valor": 19849.53
    }
]
let total = 0
for(let i = 1; i < data.length;i++ ){
     total += data[i].valor
}
 for(let i = 0; i < data.length;i++){
    console.log(`${data[i].estado}: %${Math.round(data[i].valor *100 /total )}`)
} 



