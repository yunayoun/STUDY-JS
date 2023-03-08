const $startScreen = document.querySelector('#start-screen');
const $gameMenu=document.querySelector('#game-menu')
const $battleMenu=document.querySelector('#battle-menu')
const $heroName = document.querySelector('#hero-name')
const $heroLevel = document.querySelector('#hero-level')
const $heroHp = document.querySelector('#hero-hp')
const $heroXp = document.querySelector('#hero-xp')
const $heroAtt = document.querySelector('#hero-att')
const $monsterName = document.querySelector('#monster-name')
const $monsterHp = document.querySelector('#monster-hp')
const $monsterAtt = document.querySelector('#monster-att')
const $message = document.querySelector('#message')

const hero ={
  name:'',
  lev:1,
  maxHp:100,
  hp:100,
  xp:0,
  att:10,
  attack(monster){//this사용할때 화살표함수사용시 window를 가르킴.
    monster.hp -= this.att;
    this.hp -= monster.att;
  },
  heal:function(monster){//어택처럼 function 생략가능
    this.hp += 20;
    this.hp -= monster.att;
  },
};
let monster = null;
const monsterList=[
{name:'슬라임',hp:25,att:10,xp:10},
{name:'스켈레',hp:50,att:15,xp:20},
{name:'마왕',hp:150,att:30,xp:50},
];

$startScreen.addEventListener('submit',(e)=>{
  e.preventDefault();
  const name = e.target['name-input'].value;
  //[]는 - 가 있어서.왜 #name-input 안부르나?이벤트자체가 묵음이라그런가?
  $startScreen.style.display = 'none';
  $gameMenu.style.display ='block';
  $heroName.textContent = name;
  $heroLevel.textContent=`${hero.lev}Lev`;
  $heroHp.textContent=`HP: ${hero.hp}/${hero.maxHp}`;
  $heroXp.textContent=`XP: ${hero.xp}/${hero.lev}`;
  $heroAtt.textContent=`ATT: ${hero.att}`;
  hero.name = name;
})

$gameMenu.addEventListener('submit',(e)=>{
  e.preventDefault();
  const input = e.target['menu-input'].value;
  if(input === '1'){//공격
    $gameMenu.style.display = 'none'
    $battleMenu.style.display = 'block'
    monster = JSON.parse(
      JSON.stringify(monsterList[Math.floor(Math.random()*monsterList.length)])
      );
      //monster=monsterList[0]으로 하게되면 참조이므로 수정시 같이 바뀜.
      //parse,ster...깊은복사로 바뀌어도 본래값이 유지.게임하면 정보가 수시로 바뀌므로 참조아닌 복사해서 사용해야함.
      //얕은복사 monster = {...monster[0]}--겉에 껍데기부분은 복사,안쪽은 참조.
      // 깊은복사 ex)
          // const a = 'b'; >>const ai = a;
          // const c= ['d',true,1]; >>const ci = [...c]; or c.slice()
          // const e = {g:'h'}  >>const ei = {...e};
          // const i = [{j:'k'},{l:'m'}];  >>const ii = JSON.parse(JSON.stringify(i));
          // const n= {o:{p:'q'}}   >>const ni = JSON.parse(JSON.stringify(n));
    monster.maxHp = monster.Hp;
    $monsterName.textContent = monster.name;
    $monsterHp.textContent =`HP: ${monster.hp}/${monster.maxHp}`;
    $monsterAtt.textContent=`ATT: ${monster.att}`;
  }else if(input==='2'){//휴식

  }else if(input ==='3'){//종료
  }
$battleMenu.addEventListener('submit',(e)=>{
  e.preventDefault();
  const input = e.target['battle-input'].value;
  if(input === '1'){//공격
    hero.attack(monster);
    monster.attack(hero);
    $heroHp.textContent = `HP: ${hero.hp}/${hero.maxHp}`;
    $monsterHp.textContent = `HP: ${monster.hp}/${monster.maxHp}`;
    $message.textContent = `${hero.att} 데미지를 주고 ${monster.att} 데미지를 받았다`
  }
  else if(input === '2'){//회복
  }
  else if(input === '3'){//도망
  }






  })







})