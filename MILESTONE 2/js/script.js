
const numbersContainer = document.querySelector('.numbers-container');

for(let i = 1; i <= 100; i++) {
    let threeFiveClassName='';
    if(i % 5 === 0 && i % 3 === 0) {
        threeFiveClassName = 'fizzbuzz';
    } else if(i % 3 === 0 ){
        threeFiveClassName = 'fizz';
    } else if(i % 5 === 0 ){
        threeFiveClassName = 'buzz';
    } 
    console.log(i);
    console.log(threeFiveClassName);

  numbersContainer.innerHTML += `<li>${i} ${threeFiveClassName}</li>`;


    // Creare dei div box
    // const newBox = `<div class=" box ${threeFiveClassName}">${i}</div>`;

    // Li concateniamo a numbersContainer
//    numbersContainer.innerHTML += newBox;

  
}

