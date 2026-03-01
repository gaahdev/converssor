const convertButton = document.querySelector(".conver-button")
const selectCurrency = document.querySelector("#currency-select")
const selectCurrencyTop = document.querySelector("#currency-select-top")

function convertValue() {

    const inputValue = Number(document.querySelector("input").value)

    const valueToConvert = document.querySelector(".currency-value-to-convert")
    const convertedValue = document.querySelector(".currency-value")

    const rates = {
        real: 1,
        dolar: 5.2,
        euro: 6.2,
        libra: 6.95,
        bitcoin: 350206.96
    }

    const fromCurrency = selectCurrencyTop.value
    const toCurrency = selectCurrency.value

    // Converter moeda origem para REAL
    const valueInReal = inputValue * rates[fromCurrency]

    // Converter REAL para moeda destino
    const finalValue = valueInReal / rates[toCurrency]

    // Formatação moeda origem
    valueToConvert.innerHTML = formatCurrency(inputValue, fromCurrency)

    // Formatação moeda destino
    convertedValue.innerHTML = formatCurrency(finalValue, toCurrency)
}

function formatCurrency(value, currency) {

    const formats = {
        real: { locale: "pt-BR", code: "BRL" },
        dolar: { locale: "en-US", code: "USD" },
        euro: { locale: "de-DE", code: "EUR" },
        libra: { locale: "en-GB", code: "GBP" },
        bitcoin: { locale: "en-US", code: "BTC" }
    }

    return new Intl.NumberFormat(formats[currency].locale, {
        style: "currency",
        currency: formats[currency].code,
        minimumFractionDigits: currency === "bitcoin" ? 6 : 2
    }).format(value)
}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")

    updateCurrencyVisual(selectCurrency.value, currencyName, currencyImage)

    convertValue()
}

function changeCurrencyTop() {

    const currencyNameTop = document.getElementById("currency-name-top")
    const currencyImageTop = document.querySelector(".currency-image-top")

    updateCurrencyVisual(selectCurrencyTop.value, currencyNameTop, currencyImageTop)
    convertValue()
}

function updateCurrencyVisual(currency, nameElement, imageElement) {

    const currencies = {
        dolar: {
            name: "Dólar americano",
            image: "./assets/dolar.png"
        },
        euro: {
            name: "Euro",
            image: "./assets/euro.png"
        },
        libra: {
            name: "Libra esterlina",
            image: "./assets/libra.png"
        },
        bitcoin: {
            name: "Bitcoin",
            image: "./assets/bitcoin.png"
        },
        real: {
            name: "Real brasileiro",
            image: "./assets/brasil 2.png"
        }
        
    }

    nameElement.innerHTML = currencies[currency].name
    imageElement.src = currencies[currency].image
}



selectCurrencyTop.addEventListener("change", changeCurrencyTop)
selectCurrency.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)