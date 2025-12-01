document.addEventListener("DOMContentLoaded", () => {
  const setupPasswordToggle = (inputId, toggleId) => {
    const senhaInput = document.getElementById(inputId);
    const toggleSenha = document.getElementById(toggleId);

    if (!senhaInput || !toggleSenha) return;

    let mostrando = false;

    toggleSenha.addEventListener("click", () => {
      mostrando = !mostrando;
      senhaInput.type = mostrando ? "text" : "password";
      toggleSenha.src = mostrando
        ? "../img/icons/eye-slash.svg"
        : "../img/icons/eye.svg";
    });
  };

  setupPasswordToggle("novaSenha", "toggleNova");
  setupPasswordToggle("repitaSenha", "toggleRepita");
});

const popup = document.getElementById("popup");
const prosseguirBtn = document.getElementById("prosseguirBtn");

document.getElementById("form-redefinicao").addEventListener("submit", (e) => {
  e.preventDefault();
  const novaSenha = document.getElementById("novaSenha").value;
  const repitaSenha = document.getElementById("repitaSenha").value;

  if (novaSenha !== repitaSenha) {
    alert("As senhas não coincidem!");
    return;
  }
  popup.classList.add("show");
  document.body.style.overflow = "hidden";
});

prosseguirBtn.addEventListener("click", () => {
  window.location.href = "../pagina_login/pagina_login.html";
});
