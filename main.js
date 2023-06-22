const input = document.getElementById('menu-toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const container-navebar = document.querySelector('container-navebar');


input.addEventListener('click', function(event) {
  if (input.checked) {
    open.style.display = 'none';
    close.style.display = 'block';
  container-navebar.style.display = 'block';
  }
  
  else{
    open.style.display = 'block';
    close.style.display = 'none';
container-navebar.style.display = 'none';
}

});



