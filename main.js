const valueEnter = document.querySelectorAll('.number');
const numberOfCombinations = document.getElementById('combinaison')
const btnSubmit = document.querySelector('.btn-submit')
const displayCombinaisons = document.querySelector('.display-combinaison')
const numberAdded = []


for (let i = 0; i < valueEnter.length; i++) {
    valueEnter[i].addEventListener('click', (event) => {
        event.preventDefault()
        numberAdded.push(valueEnter[i].getAttribute('value'))
        console.log(numberAdded)

       numberAdded.forEach((number) => {
           displayCombinaisons.innerHTML += `<span class="number">${number}</span>`;
       })
       
    }) 
    
}



/*
    Clicker sur chaque boutton
*/