const circles = document.querySelectorAll('.circle'); //1
circles.forEach(function(circle) { 
  const dataAnim = circle.getAttribute('data-anim'); //2
  circle.classList.add(dataAnim); //3
});
circles.forEach(function(circle) {
  circle.addEventListener('animationend', function() {
    console.log('Animation ended'); //4
  });
});