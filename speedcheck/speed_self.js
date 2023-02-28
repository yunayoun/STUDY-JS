const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');
let startTime;
let endTime;
let total=[];
let timeId;

$screen.addEventListener('click',(e)=>{
  if(e.target.classList.contains('wait')){
    $screen.classList.remove('wait')
    $screen.classList.add('ready')
    $screen.textContent = '파랑색일때 클릭하세요'

    timeId = setTimeout(()=>{
      $screen.classList.remove('ready')
      $screen.classList.add('now')
      $screen.textContent = '누르세요'
      startTime = new Date();
    },Math.floor(Math.random()*1000)+2000);
  }
  else if(e.target.classList.contains('ready')){
    clearTimeout(timeId)
    $screen.classList.remove('ready')
    $screen.classList.add('wait')
    $screen.textContent = '너무빨랐어요'
  }
  else if(e.target.classList.contains('now')){
    $screen.classList.remove('now')
    $screen.classList.add('wait')
    $screen.textContent = '클릭후 시작하세요'
    endTime = new Date();
    total.push(endTime- startTime);
    const average = total.reduce((a,c)=> a+c)/total.length;
    $result.textContent = `클릭시간 :${endTime- startTime}ms 평균시간: ${average}ms`

    const topFive = total.sort((a,b)=> a-b).slice(0,5);
    topFive.forEach((top,index)=>{
      $result.append(
        document.createElement('br'),
        `${index+1}위 : ${top}ms`)
    });
  }
})

// debugger;console.log같은건데 전체적으로 자세히 나옴

