document.addEventListener('DOMContentLoaded', () => {
  const continuarBtn = document.getElementById('continuarBtn');
  const emailPhoneInput = document.getElementById('email_phone');
  const popup = document.getElementById('popup');
  const cancelarBtn = document.getElementById('cancelarBtn');
  const confirmarBtn = document.getElementById('confirmarBtn');

  if (continuarBtn) {
    continuarBtn.addEventListener('click', () => {
      const valor = emailPhoneInput.value.trim();

      if (valor === "") {
        alert("Por favor, digite seu Email ou Número de telefone.");
        return;
      }

      popup.classList.add('show');
    });
  }

  if (cancelarBtn) {
    cancelarBtn.addEventListener('click', () => {
      popup.classList.remove('show');
    });
  }

  if (confirmarBtn) {
    confirmarBtn.addEventListener('click', () => {
      // Pra redirecionar depois
      // window.location.href = '../proxima_pagina.html';
      alert("Link de verificação enviado!");
      popup.classList.remove('show');
    });
  }
});
