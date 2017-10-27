// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'

const quoteText = document.querySelector(".quote-text")
const quoteAuthor = document.querySelector(".quote-author")
const button = document.querySelector(".button")

function getQuote() {
    $.ajax({
        url: API_URL,
        dataType: 'json'
    })
    .done(function (response) {
        console.log(response);
        console.log(response.quoteText);
        console.log(response.quoteAuthor);

        quoteText.textContent = response.quoteText
        quoteAuthor.textContent = response.quoteAuthor
    })
}

getQuote()

button.addEventListener("click", function() {
  getQuote()
})
