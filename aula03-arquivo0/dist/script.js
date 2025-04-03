rodada = 1 
  while(rodada <= 3) {
    console.log("Rodada" + rodada)
    
  
   escolhaJogador = prompt("Nivel" + rodada + "escolha um vidro 1, 2 ou 3")
   pisoQuebrado = Math.floor(Math.random() *3) +1;
    
    if(escolhaJogador >= 4){
      alert ("Você pulou para fora da ponte!")
       rodada = 100
    }
  
    if(escolhaJogador == pisoQuebrado){
      alert("O vidro quebrou!")
      rodada = 100;
     }
     else {
       alert("Passou o piso não quebrou!")
     }
    
    
    rodada = rodada + 1
  }
  if(rodada == 4){
    alert("Você venceu!!!")
  }
  
  else{
    alert("Vamos tentar denovo?")
  }