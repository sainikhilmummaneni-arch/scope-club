// ===== Mobile menu =====
const menuBtn = document.getElementById('menuBtn');
const mobilePanel = document.getElementById('mobilePanel');
const scrim = document.getElementById('scrim');

function closeMenu(){
  menuBtn.classList.remove('open');
  mobilePanel.classList.remove('open');
  scrim.classList.remove('open');
}
if (menuBtn){
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    mobilePanel.classList.toggle('open');
    scrim.classList.toggle('open');
  });
  scrim.addEventListener('click', closeMenu);
  mobilePanel.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
}

// ===== Event cards: tap-to-reveal image on touch devices =====
document.querySelectorAll('.event-card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (window.matchMedia('(hover: none)').matches){
      document.querySelectorAll('.event-card').forEach(c => { if (c !== card) c.classList.remove('is-open'); });
      card.classList.toggle('is-open');
    }
  });
});
