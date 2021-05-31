let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget=()=>{
  return Math.floor(Math.random()*10);
}
const compareGuesses=(human,comp,secret)=>{
  diff1 = Math.abs(human-secret);
  diff2 = Math.abs(comp-secret);
  if (diff1< diff2){
    return true;
  }
  else return false;
}
const updateScore=score=>{
  if (score==='human'){
    humanScore += 1;
  }
  else if (score==='computer') {computerScore += 1;}
}
const advanceRound=()=>{
  currentRoundNumber += 1
}
