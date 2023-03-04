const $startScreen = document.querySelector('#startScreen');
const $gameMenu=document.querySelector('#game-menu')
const $battleMenu=document.querySelector('#battle-menu')
const $heroName = document.querySelector('#name-input')

$startScreen.addEventListener('submit',(e)=>{
  e.preventDefault();
  const name = e.target[name-input].value;
  //[]는 - 가 있어서.
  $startScreen.style.display = 'none';
  $gameMenu.style.display ='block';
  $heroName.textContent = name;
})