// Mostrar/ocultar senhas
document.addEventListener("DOMContentLoaded", () => {
    const senhas = [
      { input: "senha", toggle: "toggleSenha1" },
      { input: "confirmar", toggle: "toggleSenha2" }
    ];
  
    senhas.forEach(({ input, toggle }) => {
      const inputEl = document.getElementById(input);
      const toggleEl = document.getElementById(toggle);
      if (!inputEl || !toggleEl) return;
  
      let mostrando = false;
      toggleEl.addEventListener("click", () => {
        mostrando = !mostrando;
        inputEl.type = mostrando ? "text" : "password";
        toggleEl.src = mostrando ? "../img/icons/eye-slash.svg" : "../img/icons/eye.svg";
      });
    });
  });
  
  // Verificação simples antes de criar conta
  document.getElementById("form-cadastro").addEventListener("submit", (e) => {
    e.preventDefault();
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar").value;
  
    if (senha !== confirmar) {
      alert("As senhas não coincidem!");
      return;
    }
  
    alert("Conta criada com sucesso!");
    window.location.href = "../pagina_login/teste.html";
  });
  