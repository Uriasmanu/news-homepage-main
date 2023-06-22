const input = document.getElementById('menu-toggle');

input.addEventListener('change', function(event) {
  if (input.checked) {
    alert("Olá, mundo!");
  }
});
