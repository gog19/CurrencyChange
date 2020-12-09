var formElement = document.querySelector('.currency-change');
var moneyOfCurrency = document.querySelector('.amount-money');
var result = document.querySelector('.money-uzs');
var currencies = document.querySelector('.currencies');
var error = document.querySelector('.error');

formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();



    if (isNaN(moneyOfCurrency.value)) {
        result.innerHTML = 'FAQAT RAQAM';
    } else {
        var total = moneyOfCurrency.value * currencies.value;
        result.textContent = total;
    }


});