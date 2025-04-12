// cpreciso criar uma lista com os jogadores
pokemon = ["","",""]
equipeRoquet = ["","",""]

forçaPokemon = 0
forçaRoquet = 0
alert ("O array pokemon contem:" + pokemon)
for(let i = 0; i<3; i++){
  escolhaPokemon = prompt ("Escolha seu pokemon: " + (i + 1))
  pokemon[i] = escolhaPokemon
  // preciso caucular a força decada jogador para sasber a força do time 
  forçaPokemon = forçaPokemon + Math.floor(Math.random()*10) +1;
  // forma alternativa forçaPokemon += Math.floor (Math.rondom()*10) +1;
}
console.log("Agora o array pokemon contem:" + pokemon)
console.log("pokemons da equipe roquet:" + equipeRoquet)

for(i=0;i<3;i++) {
  indicealeatorio = Math.floor(Math.random()*10)
  timeRoquet = ["Meowth","Wobbuffet","Gourgeist","Mimikyu","Inkay","Victreebel","Weezing","Mime Jr.","Carnivine","Yamask"]
  equipeRoquet[i] = timeRoquet[indicealeatorio]
  // preciso fazer o mesmo para o computador
  forçaRoquet = forçaRoquet + Math.floor(Math.random()*10) +1;
}
console.log("pokemons da equipe Roquet" + equipeRoquet)


if(forçaPokemon > forçaRoquet){
  alert("Seu time ganhou! a equipe roquet não pode roubar seus pokemon. Sua força é:" + forçaPokemon)
}
else{
  if(forçaPokemon < forçaRoquet){
  alert("Seu time perdeu! A equipe roquet roubou todos os seus pokemon. A força deles era:" + forçaRoquet)
  }
  else{
    alert("Seus pokemon são forte a equipe roquet fugiu.")
  }
}




// preciso comparar a força dos dois times para saber quam ganhoru.