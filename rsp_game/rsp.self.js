const $computer = document.querySelector('#computer');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');
const $score = document.querySelector('#score');
const IMG_URL = './rsp.png';
$computer.style.background = `url(${IMG_URL}) 0 0`;
$computer.style.backgroundSize = 'auto 200px';

const rspX = {
  scissors:'0',
  rock: '-220px',
  paper:'-440px',
}

let com = 'scissor'
const com_change=()=>{
  if(com === 'scissors'){
      com = 'rock'
    }else if(com === 'rock'){
      com = 'paper'
    }else{
      com = 'scissors'
    }
    $computer.style.background = `url(${IMG_URL}) ${rspX[com]} 0`;
    $computer.style.backgroundSize = 'auto 200px';
}
let intervalId = setInterval(com_change, 50);

let clickable = true;
let my_score =0;
let com_score =0;

const scoreTable ={
  scissors : '1',
  rock : '0',
  paper: '-1',
}
const my_btn = (e)=>{
  if(clickable){
    clearInterval(intervalId);
    clickable = false;
    const my_choice = e.target.textContent === '가위'? 'scissors' : e.target.textContent === '바위'?'rock':'paper';
    const me = scoreTable[my_choice];
    const you = scoreTable[com];
    const diff = me - you;
    let message;

    if([2,-1].includes(diff)){
      my_score +=1;
      message = '승리';
    }else if([-2,1].includes(diff)){
      com_score +=1;
      message = '패배'
    }else{
      message = '무승부'
    }

    if(my_score >= 3){
      $score.textContent = `${message}했어요,축하합니다. ${my_score}: ${com_score}`
    }else if(com_score >= 3){
      $score.textContent = `${message}했어요,아쉽습니다. ${my_score}: ${com_score}`
    }else if(my_score <3 || com_score <3){
      $score.textContent = `${message} 내점수: ${my_score} 컴퓨터점수: ${com_score}`
      setTimeout(()=>{
          clickable= true;
          intervalId =setInterval(com_change,50);
        },1000);
      }
    }
};

$scissors.addEventListener('click',my_btn);
$rock.addEventListener('click',my_btn);
$paper.addEventListener('click',my_btn);

