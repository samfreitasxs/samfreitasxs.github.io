const sides = document.querySelectorAll('.side');

sides.forEach(side => {
  side.addEventListener('mouseenter', () => {
    side.style.flex = "2";
  });
  side.addEventListener('mouseleave', () => {
    side.style.flex = "1";
  });
});