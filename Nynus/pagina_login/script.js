function login() {
  const emailUser = document.getElementById("username").value;
  const senhaUser = document.getElementById("senha").value;

  const emailVerif = "teste@gmail.com";
  const senhaVerif = "123Teste";

  if (emailUser === emailVerif && senhaUser === senhaVerif) {
    alert("Login efetuado com sucesso!");
  } else {
    alert("Email ou senha inválido(s)!");
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const senhaInput = document.getElementById("senha");
  const toggleSenha = document.getElementById("toggleSenha");

  if (!senhaInput || !toggleSenha) return;

  let mostrando = false;

  toggleSenha.addEventListener("click", () => {
    mostrando = !mostrando;
    senhaInput.type = mostrando ? "text" : "password";
    toggleSenha.src = mostrando
      ? "../img/icons/eye-slash.svg" 
      : "../img/icons/eye.svg";
  });
});
