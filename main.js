const input = document.getElementById('menu-toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const menu = document.getElementById('container');


input.addEventListener('click', function(event) {
  if (input.checked) {
    open.style.display = 'none';
    close.style.display = 'block';
    menu.style.display = 'none';
  }
  
  else{
    open.style.display = 'block';
    close.style.display = 'none';
    menu.style.display = 'block';
}

});



