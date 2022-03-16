var numeroSecreto = parseInt(Math.random()*11);

function Chutar() {
  var resultado = document.getElementById("resultado")
  var chute = parseInt(document.getElementById("valor").value);
 console.log(chute);
  
  if (chute == numeroSecreto){
       resultado.innerHTML = "Parabéns, você acertou!"
  }
  else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Dica: você deve digitar um número entre 0 e 10!"
  }
  else {
     resultado.innerHTML = "Errou! Tente novamente!"
  }
      
  
} 
