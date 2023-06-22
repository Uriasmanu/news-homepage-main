const input = document.getElementById('menu-toggle');

input.addEventListener('click', function(event) {
  if (event.target.tagName !== 'LI') {
    alert("Olá, mundo!");
  }
});

