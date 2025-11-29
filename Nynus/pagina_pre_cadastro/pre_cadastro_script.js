const popup = document.getElementById('popup');
const proximoBtn = document.getElementById('proximoBtn');
const cancelarBtn = document.getElementById('cancelarBtn');
const confirmarBtn = document.getElementById('confirmarBtn');

if (proximoBtn && popup && cancelarBtn && confirmarBtn) {
  proximoBtn.addEventListener('click', () => {
    popup.classList.add('show');
    document.body.style.overflow = 'hidden';
  });

  cancelarBtn.addEventListener('click', () => {
    popup.classList.remove('show');
    document.body.style.overflow = '';
  });

  confirmarBtn.addEventListener('click', () => {
    popup.classList.remove('show');
    document.body.style.overflow = '';
    window.location.href = '../pagina_cadastro/pagina_cadastro.html';
  });
}
