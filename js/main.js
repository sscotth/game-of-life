var lifeMatrix = randomMatrix(3, 3);

document.addEventListener('DOMContentLoaded', function(){
  var table = generateTable(lifeMatrix);
  appendTableFragmentToDOM(table);
});

function generateTable(matrix){
  var frag = document.createDocumentFragment();

  matrix.forEach(function(row){
    var $tr = document.createElement('tr');

    row.forEach(function(item){
      var $td = document.createElement('td');

      if (item) {
        addClass($td, 'alive');
      } else {
        removeClass($td, 'alive');
      }

      $tr.appendChild($td);
    });

    frag.appendChild($tr);
  });

  return frag;
}

function appendTableFragmentToDOM(innerFragment){
  var $table = document.querySelector('table');
  $table.appendChild(innerFragment);
}

function randomMatrix(x, y){
  var matrix = [];
  for (var i = 0; i < x; i++){
    matrix[i] = [];
    for (var j = 0; j < y; j++){
      matrix[i][j] = randomZeroOne();
    }
  }
  return matrix;
}

function randomZeroOne(){
  return Math.round(Math.random());
}

function addClass(element, className){
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += ' ' + className;
  }
}

function removeClass(element, className){
  if (element.classList) {
    element.classList.remove(className);
  } else {
    element.className = element.className.replace(
      new RegExp(
        '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'
      ), ' '
    );
  }
}
