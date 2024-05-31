const formulario = document.getElementById("medidas")
formulario.onsubmit = (evento) => {
    evento.preventDefault()
    const ladoA = document.getElementById("ladoA").value
    const ladoB = document.getElementById("ladoB").value
    const ladoC = document.getElementById("ladoC").value

    if (ladoA < 0 || ladoB < 0 || ladoC < 0){
        alert("Los numeros no deben ser neg")
        return
    }
    if(ladoA === ""||ladoB ===""||ladoC ===""){
        alert("complete los campos")
        return
    }

    const result1 = ladoA*ladoC
    const result2 = ((ladoA-ladoC)*ladoB)/2
    const result_total = result1 + result2
    alert("El Area es: " + result_total.toFixed(2))
}