const diceNumber = document.querySelector('#dice-number');
const rollDice = document.querySelector('#roll-dice');
const total = document.querySelector('#total');
const showAll = document.querySelector('#show-all');
const showRolls = document.querySelector('#show-rolls');
const reset = document.querySelector('#reset');
const diceSides = document.querySelector('#dice-sides');



let dieRolls = [];
diceSides.value = 6;

rollDice.addEventListener('click', function(){
    console.log(diceNumber.value)
    

    let numberOfDice = diceNumber.value;
    loopCount = 0;
    while (loopCount < numberOfDice){
        let rolledDice = Math.floor( Math.random() * diceSides.value) + 1;
        dieRolls.push(rolledDice);
        console.log(rolledDice);
        loopCount++
    }
    let sumTotal = dieRolls.reduce((v, i) => (v + i));
    console.log(sumTotal);
    total.innerHTML = sumTotal;
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
    
    
})

reset.addEventListener('click', function(){
    
    
   dieRolls = [];
   total.innerText = '';
   showRolls.innerHTML = '';
   diceNumber.value = null;
   diceNumber.focus();

    
    
})
