var lifeMatrix = [[0, 0, 0], [0, 1, 0], [1, 1, 1]];

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
      $td.textContent = item;
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
