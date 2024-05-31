const formulario = document.getElementById("datos");
formulario.onsubmit = (evento) => {
  evento.preventDefault();

  const apellido = document.getElementById("apellido").value;
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad")).value;
  const altura = parseInt(document.getElementById("altura")).value;
  const email = document.getElementById("email").value;

  let msj = "";
  let value = true;

 

  if (nombre.length > 50 || nombre.length < 1) {
    msj += "no se puede introducir mas de 50 caracteres";
    value = false;
  }
  if (apellido.length > 50 || apellido.length < 1) {
    msj += "no se puede introducir mas de 50 caracteres";
    value = false;
  }
  if (edad < 0 || edad < 18 || isNaN (edad)) {
    msj += "el campo no puede estar vacio y tiene que ser maypr de edad";
    value = false;
  }

  if (isNaN(altura) || altura < 0 || altura > 230) {
    msj +=
      "la altura tiene que ser hasta 230 y no puede ingresar numeros negativos";
    value = false;
  }

  if (email === "" || !email.includes("@")) {
    msj += "debe completar el campo e introducir @ ";
    value = false;
  }

  const aviso = document.getElementById("aviso");
  aviso.innerHTML = msj;
  aviso.className = value ? "success" : "error";
  if (value) {
    aviso.innerHTML = "Formulario enviado correctamente.";
  }
};
