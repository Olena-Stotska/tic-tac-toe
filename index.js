const container = document.querySelector('.container');
const gameField = document.querySelector('.game-field');
let lastType;

function startDragging(e) {
  const target = e.target;
  const type = target.classList.contains('move-x') ? 'x' : 'o';

  if (lastType === type) { return };

  const clone = target.cloneNode(true);

  lastType = type;
  target.parentNode.insertBefore(clone, target);
  clone.style.position = 'absolute';
  clone.style.zIndex = 1000;
  document.documentElement.style.userSelect = 'none';
  moveAt(e);

  function moveAt(e) {
    clone.style.left = e.pageX - clone.offsetWidth / 2 + 'px';
    clone.style.top = e.pageY - clone.offsetHeight / 2 + 'px';
  }

  function upDown(e) {
    const whereIsEl = document.elementsFromPoint(e.pageX, e.pageY)

    if (whereIsEl[1].classList.contains('cell') && whereIsEl[1].children.length === 0) {
      whereIsEl[1].appendChild(clone);
      clone.style.position = '';
      highlight(whereIsEl[1])
    } else {
      clone.parentNode.removeChild(clone);
    }

    document.removeEventListener('mousemove', moveAt)
    document.removeEventListener('mouseup', upDown)
    gameOver(gameField.children)
  }

  document.addEventListener('mousemove', moveAt);
  document.addEventListener('mouseup', upDown)

}

function highlight(cell) {
  const cellChildren = cell.children

  if (cellChildren[0].classList.contains('move-x')) {
    cell.classList.add('x')
  } else {
    cell.classList.add('o')
  }
}

Array.from(container.querySelectorAll('.move-x, .move-o')).forEach((element) => {
  element.addEventListener('mousedown', startDragging);
});

function gameOver(cells) {
  const arrCells = Array.from(cells)
  const resultGame = []

  arrCells.forEach(el => {
    resultGame.push(el.className.split(' '))
  })

  return addline(resultGame, cells)
}

function addline(items, cells) {
  const result = items.map(el => el.slice(1).join(''))

  if(result[0] === 'x' && result[1] === 'x' && result[2] === 'x') {
    cells[0].classList.add('finish')
    cells[1].classList.add('finish')
    cells[2].classList.add('finish')
  }

  if(result[0] === 'o' && result[1] === 'o' && result[2] === 'o') {
    cells[0].classList.add('finish')
    cells[1].classList.add('finish')
    cells[2].classList.add('finish')
  }

  if(result[3] === 'x' && result[4] === 'x' && result[5] === 'x') {
    cells[3].classList.add('finish')
    cells[4].classList.add('finish')
    cells[5].classList.add('finish')
  }

  if(result[3] === 'o' && result[4] === 'o' && result[5] === 'o') {
    cells[3].classList.add('finish')
    cells[4].classList.add('finish')
    cells[5].classList.add('finish')
  }

  if(result[6] === 'x' && result[7] === 'x' && result[8] === 'x') {
    cells[6].classList.add('finish')
    cells[7].classList.add('finish')
    cells[8].classList.add('finish')
  }

  if(result[6] === 'o' && result[7] === 'o' && result[8] === 'o') {
    cells[6].classList.add('finish')
    cells[7].classList.add('finish')
    cells[8].classList.add('finish')
  }

  if(result[0] === 'x' && result[3] === 'x' && result[6] === 'x') {
    cells[0].classList.add('finish')
    cells[3].classList.add('finish')
    cells[6].classList.add('finish')
  }

  if(result[0] === 'o' && result[3] === 'o' && result[6] === 'o') {
    cells[0].classList.add('finish')
    cells[3].classList.add('finish')
    cells[6].classList.add('finish')
  }

  if(result[1] === 'x' && result[4] === 'x' && result[7] === 'x') {
    cells[1].classList.add('finish')
    cells[4].classList.add('finish')
    cells[7].classList.add('finish')
  }

  if(result[1] === 'o' && result[4] === 'o' && result[7] === 'o') {
    cells[1].classList.add('finish')
    cells[4].classList.add('finish')
    cells[7].classList.add('finish')
  }

  if(result[2] === 'x' && result[5] === 'x' && result[8] === 'x') {
    cells[2].classList.add('finish')
    cells[5].classList.add('finish')
    cells[8].classList.add('finish')
  }

  if(result[2] === 'o' && result[5] === 'o' && result[8] === 'o') {
    cells[2].classList.add('finish')
    cells[5].classList.add('finish')
    cells[8].classList.add('finish')
  }

  if(result[0] === 'x' && result[4] === 'x' && result[8] === 'x') {
    cells[0].classList.add('finish')
    cells[4].classList.add('finish')
    cells[8].classList.add('finish')
  }

  if(result[0] === 'o' && result[4] === 'o' && result[8] === 'o') {
    cells[0].classList.add('finish')
    cells[4].classList.add('finish')
    cells[8].classList.add('finish')
  }

  if(result[2] === 'x' && result[4] === 'x' && result[6] === 'x') {
    cells[2].classList.add('finish')
    cells[4].classList.add('finish')
    cells[6].classList.add('finish')
  }

  if(result[2] === 'o' && result[4] === 'o' && result[6] === 'o') {
    cells[2].classList.add('finish')
    cells[4].classList.add('finish')
    cells[6].classList.add('finish')
  }
}
