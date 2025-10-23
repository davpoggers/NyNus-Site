function login() {
    const emailUser = document.getElementById("username").value;
    const senhaUser = document.getElementById("senha").value;

    const emailVerif = "teste@gmail.com";
    const senhaVerif = "123Teste";

    if(emailUser == emailVerif && senhaUser == senhaVerif){
        alert("Login efetuado com sucesso!")
    } else{
        alert("Email ou senha inválido(s)!")
    }
}
            