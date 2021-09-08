document.getElementById("botao-de-envio").addEventListener("click", validaFormulario)

function validaFormulario (){
    if(document.getElementById("nome").value != "" && document.getElementById("email").value != ""){
    alert("Você receberá as novidades por email!")
  }else {
    alert("Por favor, preencha os dados para nós te enviarmos as novidades!")
  }
}

