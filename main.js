function entrar(){
    var Username1 = document.getElementById("Username1").value;
    var Username2 = document.getElementById("Username2").value;
localStorage.setItem("jogador1",Username1);
localStorage.setItem("jogador2",Username2);
}