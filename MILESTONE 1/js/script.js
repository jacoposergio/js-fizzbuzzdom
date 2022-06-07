
for(let i = 1; i <= 100; i++) {
    let threeFiveClassName;
    if(i % 5 === 0 && i % 3 === 0) {
        threeFiveClassName = 'fizzbuzz';
    } else if(i % 3 === 0 ){
        threeFiveClassName = 'fizz'
    } else if(i % 5 === 0 ){
        threeFiveClassName = 'buzz'
    } 
    console.log(i);
    console.log(threeFiveClassName);
    
}

