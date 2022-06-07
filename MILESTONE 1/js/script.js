    
const numbersContainer = document.querySelector('.numbers-container');

for(let i = 0; i <= 100; i++) {
    // Assegniamo ad una variabile il nome della classe per il colore
    // Se è pari .even, altrimenti .odd
    let threeFiveClassName;
    if(i % 5 === 0 && i % 3 === 0) {
        threeFiveClassName = 'fizzbuzz';
    } else if(i % 3 === 0 ){
        threeFiveClassName = 'fizz'
    } else if(i % 5 === 0 ){
        threeFiveClassName = 'buzz'
    }

    // Creare dei div box
    const newBox = `<div class=" box ${threeFiveClassName}">${i}</div>`;

    // Li concateniamo a numbersContainer
    numbersContainer.innerHTML += newBox;

  
}

