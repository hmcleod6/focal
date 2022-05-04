const num = process.argv.slice(2);

const rollingDice = function(num) {
  let diceRolls = '';
  for (let i = 0; i < num; i++) {
    let resultOfEachDiceRoll = Math.floor(Math.random() * 6) + 1;
    diceRolls += resultOfEachDiceRoll + ', ';
  }
  return diceRolls.slice(0, diceRolls.length - 2);
};

console.log(`Rolled ${num} dice: ${rollingDice(num)}`);