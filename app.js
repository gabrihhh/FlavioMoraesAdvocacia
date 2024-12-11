
const items = document.querySelectorAll('.informacoes .item');

items.forEach((item, index) => {
  setTimeout(() => {
    item.style.transform = 'translateX(0)';
    item.style.opacity = '1';
  }, index * 200);
});
