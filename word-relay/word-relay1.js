const number = parseInt(prompt('몇명참가?'),10);
// parseint 10의 의미는 10진법
const $button = document.querySelector('button');
const $input = document.querySelector('input');
let word;//제시어
let newWord;//새로입력한단어
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');


const onClickButton = ()=>{
    if(!word){//제시어가비어있는가?
        //비어있다
        word = newWord;//입력된단어가 제시어가된다
        $word.textContent = word;
        $input.value = '';//입력후공백
        $input.focus();//입력후커서
        const order = Number($order.textContent);//현재순서
        if(order + 1 > number){
            $order.textContent = 1;
        }else{
            $order.textContent = order +1;
        }
    }else{
        //비어있지않다
        if(word[word.length-1] === newWord[0]){//올바른가
            word = newWord;//입력된단어가 제시어가된다
            $word.textContent = word;
            $input.value = '';
            $input.focus();
            const order = Number($order.textContent);//현재순서
            if(order + 1 > number){
                $order.textContent = 1;
            }else{
                $order.textContent = order +1;
            }
        }else{//올바르지않은가
            alert('올바르지않은 단어입니다');
            $input.value = '';
            $input.focus();
        }
    }
};
const  onInput = (event)=>{
    newWord = event.target.value;
};

$input.addEventListener('input',onInput);
$button.addEventListener('click',onClickButton);


// word = newWord;//입력된단어가 제시어가된다
//         $word.textContent = word;
//         $input.value = '';//입력후공백
//         $input.focus();//입력후커서
//         const order = Number($order.textContent);//현재순서
//         if(order + 1 > number){
//             $order.textContent = 1;
//         }else{
//             $order.textContent = order +1;
//         }

// 반복되는 이부분을 제시어가있는가?or올바른가? 같이 묶어서
// if(!word || word[word.length-1] === newWord[0]) 코드가 좀더 간단.
// $input.value = '';
// $input.focus(); 위치상관없는 코드라 끝에 한번만 넣음.
