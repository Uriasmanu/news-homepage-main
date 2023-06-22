const label = document.querySelector('menu-toggle');

label.addEventListener('click', function(event) {
  if (event.target === input) {
    alert("Olá, mundo!");
  }
});

