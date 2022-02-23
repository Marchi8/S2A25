
console.log("ue");







    function oneThroughTwenty(twenty) {

        let meuRetorno = [];
    
        for (let counter = 1; counter <= 20; counter++) {
            meuRetorno.push(counter)
        }
    
        return meuRetorno;
    }
    
    console.log(oneThroughTwenty());


 
 function evensToTwenty(evensT) {
    let meuRetorno = [];
    
        for (let counter = 1; counter <= 20; counter++) {
            if(counter%2==0)
            meuRetorno.push(counter)
        }
    
        return meuRetorno;
    }
    
      
 
 
console.log(evensToTwenty());
    
 
 

function oddsToTwenty(oddsT) {

    let meuRetorno = [];
    
    for (let counter = 1; counter <= 20; counter++) {
        if(counter%2==1)
        meuRetorno.push(counter)
    }

    return meuRetorno;
}
    
console.log(oddsToTwenty());
 
 
 
 
function multiplesOfFive(five) {
    let meuRetorno = [];
    
    for (let counter = 5; counter <= 50; counter++) {
        if(counter%5===0)
        meuRetorno.push(counter)
    }

    return meuRetorno;
}
console.log(multiplesOfFive());
 
 
 


function squareNumbers(square) {
     
    let meuRetorno = [];
    
    for (let counter = 1; counter <= 100; counter++) {
        if(Math.sqrt(counter)% 1 === 0)
        meuRetorno.push(counter)
    }

    return meuRetorno;
}



console.log(squareNumbers());
 
 
 

function countingBackwards(bckwrd) {
     
    let meuRetorno = [];
    
        for (let counter = 20; counter >= 1; counter--) {
            meuRetorno.push(counter)
        }
    
        return meuRetorno;
    }
    
    console.log(countingBackwards());

 



function evenNumbersBackwards(evenBckwrd) {
     
    let meuRetorno = [];
    
        for (let counter = 20; counter >= 1; counter--) {
            if(counter%2==0)
            meuRetorno.push(counter)
        }
    
        return meuRetorno;
    }
    
console.log(evenNumbersBackwards());
 




 function oddNumbersBackwards(oddBckwrd) {
     
    let meuRetorno = [];
    
    for (let counter = 20; counter >= 1; counter--) {
        if(counter%2==1)
        meuRetorno.push(counter)
    }

    return meuRetorno;
}
    
console.log(oddNumbersBackwards());






 function multiplesOfFiveBackwards(fiveBckwrd) {
    let meuRetorno = [];
    
    for (let counter = 50; counter >= 5; counter--) {
        if(counter%5===0)
        meuRetorno.push(counter)
    }

    return meuRetorno;
}
 
console.log(multiplesOfFiveBackwards());



function squareNumbersBackwards(sqrbckwrd) {
     
 
     
    let meuRetorno = [];
    
    for (let counter = 100; counter >= 1; counter--) {
        if(Math.sqrt(counter)% 1 === 0)
        meuRetorno.push(counter)
    }

    return meuRetorno;
}
console.log(squareNumbersBackwards());