const input = document.getElementById('menu-toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const container-navebar = document.querySelector('container-navebar');

input.addEventListener('change', function(event) {
  if (input.checked) {
    open.style.display = 'none';
    close.style.display = 'block';

  }
  
  else{
    open.style.display = 'block';
    close.style.display = 'none';
}

});

input.addEventListener('change', function() {
  if (checkbox.checked) {
    container-navebar.classList.add('animado-esquerda');
  } else {
    container-navebar.classList.remove('animado-esquerda');
  }
});

