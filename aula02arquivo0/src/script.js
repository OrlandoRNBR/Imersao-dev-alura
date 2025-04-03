function jogar() {

idade = prompt ("Quantos anos você  tem?")
if (idade >= 18) {
  alert ("você esta apto a jogar")
  
}

if (idade < 18) {
  alert ("você não esta apto a jogar")
  
}

if (idade >= 18) {
  alert ("Vamos jogar?")
  escolhaJogador = prompt ("Digite 1-Pedra, 2-Papel ou 3-Tesoura ")
  escolhaComputador = Math.floor(Math.random() * 3) + 1;
  
  if(escolhaJogador == escolhaComputador) {
      alert("empate")
      
    }
  
  
  
  //Jogador pedra, computador pedra ---->  empate
  //Jogador tesoura, computador tesoura ----> empate
    //Jogador papel, computador papel ----> empate
  
  //Jogador pedra, computador papel ----> vitoria
  //Jogador pedra, computador tesoura ----> derrota
  
  if(escolhaJogador ==1){
    if (escolhaComputador == 2) {
      alert ("Você ganhou!")
    }
    if (escolhaComputador == 3){
      alert ("Você perdeu!")
    }
  }
  
  
  //Jogador tesoura, computador pedra ---->derrota
  //Jogador tesoura, computador papel ----> vitoria
  
  if(escolhaJogador == 3){
    if(escolhaComputador == 1){
      alert ("Você perdeu, o computador escolheu pedara!")
    }
    if (escolhaComputador == 2){
      alert ("Você ganhou,, o commputador escolheu papel!")
    }
  }
  
  
  //Jogador papel, computador pedra ----> vitoria
  //Jogador papel, computador tesoura ----> derrota
  
  if (escolhaJogador == 2){
    if (escolhaComputador == 1){
      alert ("Você ganhou, o computador escolheu pedra!")
    }
    if(escolhaComputador == 3){
      alert ("Você perdeu, o computtador escolheu tesoura!")
    }
  }
  
    
  
  alert ("A escolha do computador foi " + escolhaComputador)
}

//alert ("vamos começar!")
  
  }