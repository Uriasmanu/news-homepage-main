const input = document.getElementById('menu-toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const menu = document.getElementById('container');
const page = document.getElementById('page');
const navebar = document.getElementById('navebar');


input.addEventListener('click', function(event) {
  if (input.checked) {
    open.style.display = 'none';
    close.style.display = 'block';
    
    menu.style.display = 'block';
    page.classList.add('page');
  }
  
  else{
    open.style.display = 'block';
    close.style.display = 'none';
    
    
    menu.style.display = 'none';
    page.classList.remove('page');

}

});

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function(item) {
  item.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});

