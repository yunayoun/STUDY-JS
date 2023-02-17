const $form = document.getElementById('form');
const $input = document.getElementById('input');
const $logs = document.getElementById('logs');

//숫자4개를 뽑는다.
const numbers = [];
for(let i=0; i<9; i++){
numbers.push(i+1)
}
const answer = [];
for(let i=0; i<4; i++){//0부터시작하는게 좋음.인덱스가0부터니까.
// const index = Math.floor(Math.random()*(9-n));//0-8정수
//9-n 은 숫자가 splice로 줄어드는데 랜덤수는 계속 9라서 에러발생.//숫자를 num과 answer로 나눠서하는건 중복방지.
const index = Math.floor(Math.random()*(numbers.length));
answer.push(numbers[index]);
numbers.splice(index,1)//가져왓음 빼줘야지.
}

const tries = [];
function checkInput(input){//형식에맞는가
if(input.length !==4){
  return alert('숫자 4개를 입력해주세요');
}
if(new Set(input).size !==4){//숫자4개랑 중복숫자랑 하나로 합칠수 있지만 정확하게 에러메세지를 알려주기위함.
  return alert('중복숫자입니다.');
}
if(tries.includes(input)){
  return alert('이미 시도한 숫자입니다');
}
return true;
}

$form.addEventListener('submit',(e)=>{
e.preventDefault();
const value = input.value;
input.value = '';
//   if(checkInput(value)){
//     //문제없음
//     tries.push(value);
//   }else{
//     //에러
//   };
// })

if(!checkInput(value)){
  return;
}
if(answer.join('') === value){
  $logs.textContent = '홈런'
//innerhtml은 태그로인식함,textcontent는 문자만
return;
}
if(tries.length >=9){
  const msg = document.createTextNode(`땡!정답은 ${answer.join('')}`)
  $logs.appendChild(msg);
  return;
}
// join()배열을 문자로
// split()문자를 배열로

let strike = 0;
let ball =0;
//ex> answer = 2356 value = 6392
//index = 6392.indexof(2356[0]니까 2 ) 
//index = 2라는 값이 value 에 있자나,value의 3번째 인덱스
//그래서 index = 3
//일치하는숫자가 있으면 0 이상.

//indexof는 있으면 인덱스를 알려주고 없으면 -1 , includes는 true:false

for(let i = 0; i< answer.length;i++){
const index = value.indexOf(answer[i]);
if(index > -1){//일치하는숫자
    if(index === i){//숫자.인덱스같음
    strike += 1;
    }else {//인덱스만같음
    ball +=1;
    }
}
}
$logs.append(`${value}: ${strike} 스크라이크 ${ball} 볼`,document.createElement('br'));
//append 는 바로 문자열추가와 여러개를 한번에 추가가능.textcontent or innertext 사용가능.개발자맘
//appendchild는 createtextnode를 사용해야하고 하나의 텍스트나 태그만 추가가능

tries.push(value)
})
console.log(answer);