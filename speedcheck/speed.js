const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');
let startTime;
let endTime;
//start,end를 함수안에서 선언하게되면 함수안에서만 가능하게됨.스코프문제발생
//함수안에서 선언됬던 변수는 함수실행후 다 지워짐.
const recodes = [];
let timeoutId;

$screen.addEventListener('click',(e)=>{
  if(e.target.classList.contains('waiting')){
    $screen.classList.remove('waiting');
    $screen.classList.add('ready');
    $screen.textContent = '초록색되면 클릭하쇼';
    timeoutId =setTimeout(() => {
      startTime = new Date();
      $screen.classList.remove('ready');
      $screen.classList.add('now');
      $screen.textContent = '클릭하쇼';
      //시작시간재기
    },Math.floor(Math.random()*1000)+2000);//2000~3000사이 수
  }else if(e.target.classList.contains('ready')){
      clearTimeout(timeoutId);
      $screen.classList.remove('ready');
      $screen.classList.add('waiting');
      $screen.textContent = '성급해';
  }else if(e.target.classList.contains('now')){
    //끝시간재기
    //시간차이저장
    endTime = new Date();
    const current = endTime - startTime;
    recodes.push(current);
    const average = recodes.reduce((a,c)=>a+c)/recodes.length
    $result.textContent = `현재 ${current}ms,평균 ${average}ms`
    startTime = null;
    endTime = null;//초기화.
    $screen.classList.remove('now');
    $screen.classList.add('waiting');
    $screen.textContent='클릭해서 시작하세요';
  }
  //태그.classList.contains 클래스유무확인
  //태그.classList.replace('기존클래스','수정클래스')
  
})