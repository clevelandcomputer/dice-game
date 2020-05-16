const diceNumber = document.querySelector('#dice-number');
const rollDice = document.querySelector('#roll-dice');
const total = document.querySelector('#total');
const showAll = document.querySelector('#show-all');
const showRolls = document.querySelector('#show-rolls');
const reset = document.querySelector('#reset');
const diceSides = document.querySelector('#dice-sides');

let dieRolls = [];
let universal = [];
diceSides.value = 6;

rollDice.addEventListener('click', function(){
    let numberOfDice = diceNumber.value;
    loopCount = 0;
    while (loopCount < numberOfDice){
       if (diceSides.value >= 7){
        let rolledDice = Math.floor( Math.random() * diceSides.value) + 1;
        dieRolls.push(rolledDice);
        let sumTotal = dieRolls.reduce((v, i) => (v + i));
    total.innerHTML = sumTotal;
       }else {
           let universalRandom = Math.floor(Math.random() * diceSides.value);
        dieRolls.push("&#x268" + universalRandom  + ";");
        console.log(dieRolls);
        universal.push(universalRandom + 1);
        console.log(universal);
        let elseTotal = universal.reduce((v, i) => (v + i));
        total.innerHTML = elseTotal;
       }
        loopCount++
    }
    
})

showAll.addEventListener('click', function(){
    let counter = 0;
    while (counter < dieRolls.length) {
        let diceSplit = "";
        for(i = 0; i < dieRolls.length; i++){
            diceSplit = dieRolls[i];
        const newListItem = '<li style="float: none;">' + diceSplit + '</li>';
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
   diceSides.value = 6;
   diceNumber.focus();
})
