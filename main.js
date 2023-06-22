const input = document.getElementById('menu-toggle');

const open = document.getElementById('open');


const close = document.getElementById('close');


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
