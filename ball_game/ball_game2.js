const $input = document.querySelector('#input');
const $form= document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = [];
    for(let i = 0; i<9;i++){
        numbers.push(i +1);
    }

const answer = [];
    for(let i = 0; i <4; i++){
        const index = Math.floor(Math.random()*(numbers.length));
        answer.push(numbers[index]);
        numbers.splice(index,1);
    }
console.log(answer)

const tries = [];
function checkInput(input){
    if(input.length !==4){
        return alert('4개를 고르세요');
    }if(new Set(input).size !==4){
        return alert('중복');
    }if(tries.includes(input)){
        return alert('이미 시도한숫자');
    }
    return true;
}
function defeated(){
    $logs.append(`틀림,정답은${answer.join('')}`);
}

let out = 0;//뒤로가면 작동안함.왜지?
$form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let value = input.value;
    input.value = '';
    if(!checkInput(value)){
        return;
    }
    if(answer.join('')===value){
        $logs.textContent = '홈런이다'
        return;
    }
    if(tries.length >= 9){
        defeated()
        return;
    }
    


let strike = 0;
let ball=0;

for(let i =0; i< answer.length; i++){
index = value.indexOf(answer[i])
if(index > -1){
    if(index === i){
        strike += 1;
    }else{
        ball+=1;
    }
}
}
// foreach ---
// answer.forEach((element,i)=>{
// index = value.indexOf(element)
// if(index > -1){
// if(index === i){
//     strike += 1;
// }else{
//     ball+=1;
// }
// }
// })

if(strike ===0 && ball===0){
out++;
$logs.append(`${value} : 아웃`,document.createElement('br'));
}else{
$logs.append(`${value} : ${strike} 스트라이크 ${ball} 볼`,document.createElement('br'));
}
if(out === 3){
defeated();
}
tries.push(value);
});


    // 숫자 4개뽑는다 
    // 답제출한다
    // 인풋에 숫자를 1~9 4개를 입력한다.
    // 답형식이 맞나--4개가 맞나,중복되는숫자가있나,같은숫자가있나
    // 홈런인가
    // 10번도전햇나
    // 몇볼몇스트라이크인가
    // 0볼0스트라이크인가
    // 아웃표시
    // 3번아웃이면실패
    