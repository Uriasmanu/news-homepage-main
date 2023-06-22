const input = document.getElementById('menu-toggle');

const open = document.getElementById('open');


const close = document.getElementById('close');


input.addEventListener('change', function(event) {
  if (input.checked) {
    alert("Olá, mundo!");
  }
});
