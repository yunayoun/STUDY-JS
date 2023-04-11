let numOne='';
let operator='';
let numTwo='';

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
// const onClickNumber= (event)=>{
// if(operator){// 비어있지않다
//     if(!numTwo){
//         $result.value = '';
//     }
//     numTwo += event.target.textContent;
// }else{//비어있다
//     numOne +=event.target.textContent;
// }
// $result.value += event.target.textContent;
// }

const onClickNumber= (event)=>{
  if(!operator){// 비어있다
    numOne +=event.target.textContent;
    $result.value += event.target.textContent;
    return;//함수내 리턴이나오면 else가 필요없음
    }
  // 비어있지않다
  if(!numTwo){
      $result.value = '';
  }//화면에 넘버원이없어지고
  numTwo += event.target.textContent;
  $result.value += event.target.textContent;
}


document.querySelector('#num-0').addEventListener('click',onClickNumber);
document.querySelector('#num-1').addEventListener('click',onClickNumber);
document.querySelector('#num-2').addEventListener('click',onClickNumber);
document.querySelector('#num-3').addEventListener('click',onClickNumber);
document.querySelector('#num-4').addEventListener('click',onClickNumber);
document.querySelector('#num-5').addEventListener('click',onClickNumber);
document.querySelector('#num-6').addEventListener('click',onClickNumber);
document.querySelector('#num-7').addEventListener('click',onClickNumber);
document.querySelector('#num-8').addEventListener('click',onClickNumber);
document.querySelector('#num-9').addEventListener('click',onClickNumber);

const onClickOperator = (op)=>()=>{
if(numTwo){
    switch(operator){
        case '+':
            $result.value = Number(numOne) + Number(numTwo);
            break;
        case '-':
            $result.value = Number(numOne) - Number(numTwo);
            break;
        case '*':
            $result.value = Number(numOne) * Number(numTwo);
            break;
        case '/':
            $result.value = Number(numOne) / Number(numTwo);
            break;
        default:
            break;
    }
}//이어서 계산하기

//마이너스숫자 가능하게 하기....num1이 없는데 op를 누르면

    numOne = $result.value;
    numTwo = '';
    
if(numOne){
    operator=op;
    $operator.value =op;
}else{
    
    alert('숫자먼저입력하세요');
}
} 
document.querySelector('#plus').addEventListener('click',onClickOperator('+'));
document.querySelector('#minus').addEventListener('click',onClickOperator('-'));
document.querySelector('#divide').addEventListener('click',onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click',onClickOperator('*'));

document.querySelector('#calculate').addEventListener('click',()=>{
if(numTwo){
    switch(operator){
        case '+':
            $result.value = Number(numOne) + Number(numTwo);
            break;
        case '-':
            $result.value = Number(numOne) - Number(numTwo);
            break;
        case '*':
            $result.value = Number(numOne) * Number(numTwo);
            break;
        case '/':
            $result.value = Number(numOne) / Number(numTwo);
            break;
        default:
            break;
    }
    $operator.value = '';
    numOne = $result.value;
    operator = '';
    numTwo = ''

}else{
    alert('숫자를입력하세요');
        }

// if(numTwo){
//     if(operator=== '+'){
//         $result.value = Number(numOne) + Number(numTwo);
//     } if(operator=== '-'){
//         $result.value = Number(numOne) - Number(numTwo);
//     } if(operator=== '*'){
//         $result.value = Number(numOne) * Number(numTwo);
//     } if(operator=== '/'){
//         $result.value = Number(numOne) / Number(numTwo);
//     }
// }else{
//     alert('숫자입력하라ㅏㅏ');
// }
});
document.querySelector('#clear').addEventListener('click',()=>{
let numOne='';
let numTwo='';
let operator='';
$result.value = '';
$operator.value = '';
});

