document.getElementById("botaoenviar").addEventListener("click", validaFormulario)

function validaFormulario() {
  if (document.getElementById("nome").value != ""
    && document.getElementById("email").value != ""
    && document.getElementById("telefone").value != "") {
    alert("Pronto! Você receberá as novidades por e-mail. =)")
  } else {
    alert("Gentileza preencher todos campos para receber as novidades.")
  }
}