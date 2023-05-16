const cep = document.querySelector("#cep")


const DadosExtras = (resultado)=>{
    for(const campo in resultado){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = resultado[campo]
        }
       
    }
}

cep.addEventListener("blur", (evento)=>{
   let CepSemTraco = cep.value.replace("-","")
   const options = {
    method:'GET',
    mode:"cors",
    cache:"default"
   }

   fetch(`https://viacep.com.br/ws/${CepSemTraco}/json/`, options)
   .then(response=>{response.json()
    .then(data => DadosExtras(data))
   })
   .catch(error=>console.log("Error a Buscar Dados"))
})