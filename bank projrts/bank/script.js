document.getElementById('conversion-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let fromCurrency = document.querySelector('.bank1').value;
    let toCurrency = document.querySelector('.bank2').value;
    let amount = parseFloat(document.getElementById('amount').value);
    let exchangeRate = 0;

    if (fromCurrency === 'usd' && toCurrency === 'euro') {
        exchangeRate += 0.88;
    } else if (fromCurrency === 'usd' && toCurrency === 'gel') {
        exchangeRate += 3.12;
    } else if (fromCurrency === 'euro' && toCurrency === 'usd') {
        exchangeRate += 1.14;
    } else if (fromCurrency === 'euro' && toCurrency === 'gel') {
        exchangeRate += 3.53;
    } else if (fromCurrency === 'gel' && toCurrency === 'usd') {
        exchangeRate += 0.32;
    } else if (fromCurrency === 'gel' && toCurrency === 'euro') {
        exchangeRate += 0.38;
    } else {
        exchangeRate += 1;
    }
    
    const dd = amount * exchangeRate;
    document.getElementById('exchange-rate').textContent = `${amount} ${fromCurrency} = ${dd} ${toCurrency}`;
});

