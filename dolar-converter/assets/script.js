let dolar = 5.1
let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")

})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value)
 })
 
usdInput.value = "1000,00"
convert("usd-to-brl")

// Funções

function formatCurrency(value) {
    let fixedValue = fixValue(value) // ajusta o valor
    // utiliza função formatar
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    } // Cria um objeto com as propriedades a aplicar na função de formatação
    let formatter = new Intl.NumberFormat("pt-BR", options)
    //retorna valor formatado
    return formatter.format(fixedValue)
}

function fixValue(value) {
    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue)
    if (floatValue == NaN) {
        floatValue = 0
    }
    return floatValue
}


function convert(type) {
    if (type == "usd-to-brl") {
        let fixedValue = fixValue(usdInput.value) // ajusta o valor ( corrige virgula para ponto)
        let result = fixedValue * dolar // converte o valor
        result = result.toFixed(2)
        brlInput.value = formatCurrency(result) //mostra no campo Real

    }

    if (type == "brl-to-usd") {
        let fixedValue = fixValue(brlInput.value) // ajusta o valor ( corrige virgula para ponto)
        let result = fixedValue / dolar // converte o valor
        result = result.toFixed(2)
        usdInput.value = formatCurrency(result) //mostra no campo Dolar
        
    }

}





