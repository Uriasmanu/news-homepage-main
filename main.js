const label = document.querySelector('label.menu-toggle-label');

label.addEventListener('click', function(event) {
  if (event.target === input) {
    alert("Olá, mundo!");
  }
});

