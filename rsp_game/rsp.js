const $computer = document.querySelector('#computer');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');
const $score = document.querySelector('#score');
const IMG_URL = './rsp.png';
$computer.style.background = `url(${IMG_URL}) 0 0`;
//0,0 이미지가로,세로위치
$computer.style.backgroundSize = 'auto 200px';

const rspX= {
  scissors : '0',
  rock : '-220px',
  paper : '-440px',
};

// let comChoice = 'scissors';
// setInterval(() => {
//   if(comChoice === 'scissors'){//가위면
//     comChoice = 'rock';
//   }
//   else if(comChoice === 'rock'){//바위
//     comChoice = 'paper'
//   }
//   else if(comChoice === 'paper'){//보
//     comChoice = 'scissors';
//   }
//   $computer.style.background = `url(${IMG_URL}) ${rspX[comChoice]} 0`;
//   $computer.style.backgroundSize = 'auto 200px';
// }, 50);

// ${rspX[comChoice]는 값을 가져오는거고 rspX.comChoice 는 문자열인데 rspX 안에 없다.

let comChoice = 'scissors';
const changeComputer = ()=>{
  if(comChoice === 'scissors'){//가위면
  comChoice = 'rock';
}
else if(comChoice === 'rock'){//바위
  comChoice = 'paper'
}
else if(comChoice === 'paper'){//보
  comChoice = 'scissors';
}
$computer.style.background = `url(${IMG_URL}) ${rspX[comChoice]} 0`;
$computer.style.backgroundSize = 'auto 200px';
// setTimeout(changeComputer,50);
};
// setTimeout(changeComputer,50);
// 셋타임사용시 밖에서 셋타임하고 함수안에서 셋타임을 써줘서 계속반복되도록,
// 함수가 자가함수를 다시사용하는 재귀함수

//버그발견----------------
// 버튼을 여러번 연속해서 누르면 돌아가는 속도가 엄청 빨라지고 버튼을 눌러도 눌러지지 않는다.
// let intervalId =setInterval(changeComputer,50);
// const clickButton = ()=>{
//   clearInterval(intervalId);
//   setTimeout(()=>{
//     intervalId =setInterval(changeComputer,50);
//   },1000);
// };
// 5번클릭호출하면 인터벌 1,2,3,4,5번..5번마지막만 인터벌아이디로 되고 버튼시 5번만 취소.
//버그수정 1번 셋타임을 할때마다 인터벌을 지워준다 
    // let intervalId =setInterval(changeComputer,50);
    // const clickButton = ()=>{
    //   clearInterval(intervalId);
    //   setTimeout(()=>{
    //     clearInterval(intervalId);
    //     intervalId =setInterval(changeComputer,50);
    //   },1000);
    // };
//버그수정2번 버튼을 못누르게 disabled or 이벤트리스너를 없애고 1초뒤에 다시 이벤트살려줌
   // let intervalId =setInterval(changeComputer,50);
   // const clickButton = ()=>{
   //   clearInterval(intervalId);
   //     $rock.removeEventListener('click',clickButton);
   //     $scissors.removeEventListener('click',clickButton);
   //     $paper.removeEventListener('click',clickButton);
   //   setTimeout(()=>{
   //     intervalId =setInterval(changeComputer,50);
   //     $rock.addEventListener('click',clickButton);
   //     $scissors.addEventListener('click',clickButton);
   //     $paper.addEventListener('click',clickButton);
   //   },1000);
   // };------------------
  
   //function yy ===function yy =>false
   //객체(함수,배열,,,)는 비교하면 다름. 같으려면 변수에 넣어서 사용해야만함
   //addEvent,removeEvent할때 주의해야함.아래 코드 안전 .
   //a={}; b=a; a===b; true;
  
  let intervalId =setInterval(changeComputer,50);

  const scoreTable ={
    rock: 0,
    scissors: 1,
    paper: -1,
  }//if문보다 코드가 짧아짐.규칙찾아서 숫자로 입력함.

  let clickable = true;
  let score = 0;
  const clickButton = (event)=>{
    if(clickable){
      clearInterval(intervalId);
      clickable = false;
    const myChoice = event.target.id === 'rock'?
      'rock' : event.target.textContent === '가위'?
      'scissors' :'paper';

      const myScore = scoreTable[myChoice];
      const computerScore = scoreTable[comChoice];
      const diff = myScore - computerScore;
      let message;
      //2,-1은 승리/-2,1은 패배/스코어테이블 참고
      if([2,-1].includes(diff)){
        score += 1;
        message = '승리';
      }else if ([-2,1].includes(diff)){
        score += -1;
        message = '패배';
      }else{
        message = '무승부';
      }
      $score.textContent = `${message} : 총: ${score}점`;
      setTimeout(()=>{
        clickable= true;
        intervalId =setInterval(changeComputer,50);
      },1000);
    }
  };


$rock.addEventListener('click',clickButton);
$scissors.addEventListener('click',clickButton);
$paper.addEventListener('click',clickButton);





