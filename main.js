const diceNumber = document.querySelector('#dice-number');
const rollDice = document.querySelector('#roll-dice');
const total = document.querySelector('#total');
const showAll = document.querySelector('#show-all');
const showRolls = document.querySelector('#show-rolls');
const reset = document.querySelector('#reset');



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
    console.log(dieRolls);

})





showAll.addEventListener('click', function(){
    let counter = 0;
    
    while (counter < dieRolls.length) {
        let diceSplit = "";
        for(i = 0; i < dieRolls.length; i++){
            diceSplit = dieRolls[i];
        

        const newListItem = '<li>' + diceSplit + '</li>';
        showRolls.innerHTML += newListItem;
        counter++
    }
    }
    // dieRolls = [];
    
    
})

reset.addEventListener('click', function(){
    
    
   dieRolls = [];
   total.innerText = '';
   showRolls.innerText = '';
   diceNumber.value = null;
   diceNumber.focus();

    
    
})
