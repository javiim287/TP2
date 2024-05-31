const formulario = document.getElementById("calcular")

formulario.onsubmit = (evento) =>{
    evento.preventDefault()
    const peso = document.getElementById("peso").value
    const altura = document.getElementById("altura").value

    if(peso<0||altura<0){
        alert("los numeros no pueden ser neg")
        return
    }
    if(peso === ""||altura === ""){
        alert("complete los campos")
        return
    }

const imc = peso/(altura*altura)
alert("Su Imc es de: " + imc.toFixed(2))

}