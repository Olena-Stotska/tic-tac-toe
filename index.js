const container = document.querySelector('.container');
let lastType;

function startDragging(e) {
  const target = e.target;
  const type = target.classList.contains('move-x') ? 'x' : 'o';

  if (lastType === type) {
    if (type === 'x') {
      alert('Next player - O');
      return;
    } else {
      alert('Next player - X');
      return;
    }
  };

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
    const whereIsEl = document.elementsFromPoint(e.pageX, e.pageY);

    if (whereIsEl[1].classList.contains('cell') && whereIsEl[1].children.length === 0) {
      whereIsEl[1].appendChild(clone);
      clone.style.position = '';
      highlight(whereIsEl[1]);
    } else {
      clone.parentNode.removeChild(clone);
    }

    document.documentElement.style.userSelect = '';
    document.removeEventListener('mousemove', moveAt);
    document.removeEventListener('mouseup', upDown);
  }

  document.addEventListener('mousemove', moveAt);
  document.addEventListener('mouseup', upDown);
}

function highlight(cell) {
  const cellChildren = cell.children;

  if (cellChildren[0].classList.contains('move-x')) {
    cell.style.backgroundColor = '#f6f6f6';
  } else {
    cell.style.backgroundColor = '#ccc';
  }
}

Array.from(container.querySelectorAll('.move-x, .move-o')).forEach((element) => {
  element.addEventListener('mousedown', startDragging);
});

