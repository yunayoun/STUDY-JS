let number = Number(prompt('몇명?'));
// if 로 묶어서 prompt 에서 취소를 누르면 NaN 일때 실행안됨.
if(number){
    let $order = document.querySelector('#order');
    let $input = document.querySelector('input');
    let $button = document.querySelector('button');
    let $word = document.querySelector('#word');
    let word;
    let newWord;

    const btnClick = ()=>{
        if(!word || (word[word.length -1] === newWord[0] && newWord.length === 3)){ 
            //제시어가 없거나 단어끝자리와 새단어첫자리가 같고 새단어가 3글자
            word = newWord;
            $word.textContent = word;

            const order =Number($order.textContent);//string 이므로 number 바꿔줘야함!
            if(order +1> number){// === 가능
                $order.textContent = 1;
            }else{
                $order.textContent = order +1;
            }
        }else{
                alert("틀림");
            }
            $input.value = '';
            $input.focus();
        }
    const onInput= (event)=>{
        newWord = event.target.value;
    }

    $input.addEventListener('input', onInput);
    $button.addEventListener('click', btnClick);
}
