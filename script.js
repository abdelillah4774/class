const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    document.body.style.background = card.dataset.color;
  });

  card.addEventListener('mouseleave', () => {
    document.body.style.background = '#0a0a0a';
  });
});
