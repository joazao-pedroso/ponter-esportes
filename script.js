var market = document.querySelector('#market')
var btn = document.querySelectorAll('.btn')
var number = 0

btn.forEach((btn) => {
    btn.addEventListener('click', addToMarket)
})

function addToMarket() {
    number += 1
    market.innerHTML = `${number}`
}