const diceNumber = document.querySelector('#dice-number');
const rollDice = document.querySelector('#roll-dice');
const total = document.querySelector('#total');
const showAll = document.querySelector('#show-all');
const showRolls = document.querySelector('#show-rolls');



let dieRolls = [];


rollDice.addEventListener('click', function(){
    let numberOfDice = diceNumber.value;
    loopCount = 0;
    while (loopCount < numberOfDice){
        let rolledDice = Math.floor( Math.random() * 6) + 1;
        dieRolls.push(rolledDice);
        console.log(rolledDice);
        loopCount++
    }
    let sumTotal = dieRolls.reduce((v, i) => (v + i));
    console.log(sumTotal);
    total.innerText = sumTotal;
    console.log(dieRolls)

})

let counter = 0;



showAll.addEventListener('click', function(){
    
    
    while (counter < dieRolls.length) {
        let diceSplit = "";
        for(i = 0; i < dieRolls.length; i++){
            diceSplit = dieRolls[i];
        

        const newListItem = '<li>' + diceSplit + '</li>';
        showRolls.innerHTML += newListItem;
        counter++
    }
    }
    // showRolls.innerHTML = 
    
    
})
