const convertButton = document.querySelector(".convert-button"); // Mapeaia o botão no HTML
const currencySelectCoin = document.querySelector(".currency-select-coin"); // Mapeia o select
const inputValue = document.querySelector(".input-currency");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value; // Função de pegar o valor digitado no input e dividir pelo valor do dólar

  const currencyValue = document.querySelector(".currency-value"); // Valor em real

  const currencyValueConverted = document.querySelector(
    ".currency-value-converted"
  );

  console.log(currencySelectCoin.value);
  const dolarToday = 5.37;
  const euroToday = 6.27;
  const libraEsterlinaToday = 7.2;
  const bitcoinToday = 488.0;

  if (currencySelectCoin.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelectCoin.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelectCoin.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraEsterlinaToday);
  }

  if (currencySelectCoin.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
      currencyDisplay: "code",
    }).format(inputCurrencyValue / bitcoinToday);
  }

  currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyCoinConverted = document.querySelector(
    ".currency-coin-converted"
  );

  const currencyImgage = document.querySelector(".img-coin-converted");

  if (currencySelectCoin.value == "dolar") {
    currencyCoinConverted.innerHTML = "Dólar Americano";
    currencyImgage.src = "./assets/usa.png";
  }
  if (currencySelectCoin.value == "euro") {
    currencyCoinConverted.innerHTML = "EURO";
    currencyImgage.src = "./assets/euro.png";
  }
  if (currencySelectCoin.value == "libra") {
    currencyCoinConverted.innerHTML = "Libra Esterlina";
    currencyImgage.src = "./assets/libra.png";
  }
  if (currencySelectCoin.value == "bitcoin") {
    currencyCoinConverted.innerHTML = "BITCOIN";
    currencyImgage.src = "./assets/bitcoin.png";
  }
}

currencySelectCoin.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues); //Ouvindo o click do botão
