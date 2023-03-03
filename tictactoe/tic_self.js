const $table = document.createElement('table');
const $result = document.createElement('div');
// const rows = Array(3).fill([])반복돌면서만드니까 빈배열이면됨.;
const rows = [];
let turn = 'O';
// let,const,target 에러
const checkWinner = (target)=>{
  const rowIn = target.parentNode.rowIndex;
  const cellIn = target.cellIndex;
  let getWinner = false;

  if(
    rows[rowIn][0].textContent === turn &&
    rows[rowIn][1].textContent === turn &&
    rows[rowIn][2].textContent === turn 
  ){
    getWinner = true;
  }
  if(
    rows[0][cellIn].textContent === turn &&
    rows[1][cellIn].textContent === turn &&
    rows[2][cellIn].textContent === turn
  ){
    getWinner = true;
  }
  if(
    rows[0][0].textContent=== turn &&
    rows[1][1].textContent=== turn &&
    rows[2][2].textContent=== turn 
  ){
    getWinner = true;
  }
  if(
    rows[0][2].textContent=== turn &&
    rows[1][1].textContent=== turn &&
    rows[2][0].textContent=== turn 
  ){
    getWinner = true;
  }
  return getWinner;
}
const winLoser =(target)=>{
  getWinner = checkWinner(target);
  if(getWinner){
    $result.textContent = `${turn}승리`;
    $table.removeEventListener('click',callback);
    return;
  }
let drew = rows.flat().every((cell)=>cell.textContent)
  if(drew){
    $result.textContent = '무승부'
    return;
  }
  turn = (turn ==='X') ? 'O' : 'X';
}
let clickable = true;
const callback = (e)=>{
  if(!clickable){return;}
  if(e.target.textContent)return;
  e.target.textContent = turn;
  winLoser(e.target)
  if(turn === 'X'){
    const empty = rows.flat().filter((v)=>!v.textContent);
    const randomCells = empty[Math.floor(Math.random()*empty.length)]
    clickable = false;
    setTimeout(()=>{
      randomCells.textContent = turn;
      winLoser(e.target);
      clickable = true;
      //에러발생(컴퓨터가할때나도클릭가능 +clickable)

    },500)
  }
}
for(let i = 0; i<3; i++){
  const $tr = document.createElement('tr');
  const cells = [];
  for(let j= 0; j<3; j++){
    const $td = document.createElement('td');
    cells.push($td);
    $table.addEventListener('click',callback);
    $tr.append($td);
  }
  rows.push(cells);
  $table.append($tr);
}
document.body.append($table);
document.body.append($result);