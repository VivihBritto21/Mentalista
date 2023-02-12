//var numero = 3 <=

numero = parseInt(Math.random()*1001) + 1;

var i

for (i = 1; chute != numero; i++)
  {  
  
    var chute = prompt('Descubra o número \nTentativa: ' + i + ' de 10. \nDigite um número de 1 á 1000')
  if (chute == numero){
    alert (numero + ' acertou com ' + i + ' tentativas')
  } else if (i > 10 - 1){
    alert('game over \nresposta: ' + numero)
    break
  }
    else if (chute < numero){
    alert ('errou o número é maior do que ' + chute)
  } else if (chute > numero){
    alert ('errou o número é menor do que ' + chute)
  }
 }
