const input = document.getElementById('menu-toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.getElementById('container-navebar');


input.addEventListener('click', function(event) {
  if (input.checked) {
    open.style.display = 'none';
    close.style.display = 'block';
  container.style.display = 'block';
  }
  
  else{
    open.style.display = 'block';
    close.style.display = 'none';
container.style.display = 'none';
}

});



