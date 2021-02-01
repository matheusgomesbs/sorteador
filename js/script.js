var body = document.querySelector('body');

body.onload = (event) => {
  var cartelas = document.querySelector('.cartela');
  var numeros = [];
  var minMax = [1, 100];
  var linhas = minMax[1] / 10;
  
  // sorteador
  var gerador = document.querySelector('.gerador');
  var resultado = document.querySelector('.resultado');
  var totalSorteados = document.querySelector('.total-sorteados');
  var ultimoSorteado =document.querySelector('.ultimo-sorteado');
  var sorteados = [];

  // Preenche um array com os números de 1 ao maximo
  for (var numero = 1; numero <= minMax[1]; numero++) {
    numeros.push(numero);
  }

  function sortear() {
    return Math.floor(Math.random() * (minMax[1] + 1 - minMax[0]) + minMax[0]);
  }

  // Sorteiando números
  gerador.onclick = () => {
    if(sorteados.length < minMax[1]) {
      numSorteado = sortear();
      
      while (sorteados.includes(numSorteado)) {
        numSorteado = sortear();
      }

      sorteados.push(numSorteado);
      resultado.innerHTML = `<div class="alert alert-success">${numSorteado}</div>`;
      totalSorteados.innerHTML = `Sorteados: ${sorteados.length}`;
      ultimoSorteado.innerHTML = `Último sorteado: ${numSorteado}`;

      // Marca na cartela
      var numCartela = document.querySelectorAll('.cartela span');
      for (i = 0; i < numCartela.length; ++i) {
        if(numCartela[i].innerText == numSorteado){
          numCartela[i].className = "text-white bg-primary";
        }
      }
      
    } else {
      alert("Todos os numeros foram sorteados")
    }
  }

  // cartelas
  for (var i = minMax[0]; i <= linhas; ++i) {
    var li = document.createElement("li");
    li.className = `item-${i} list-group-item d-flex justify-content-between lh-sm bg-light`;
    cartelas.appendChild(li);

    for (j = minMax[0]; j <= linhas; ++j) {
      var span = document.createElement("span");
      span.className = `text-muted`;
      span.innerHTML = (
        i === 2 ? j + 10 : 
        i === 3 ? j + 20 :
        i === 4 ? j + 30 :
        i === 5 ? j + 40 :
        i === 6 ? j + 50 :
        i === 7 ? j + 60 :
        i === 8 ? j + 70 :
        i === 9 ? j + 80 :
        i === 10 ? j + 90:
        j
      );
      li.appendChild(span);
    }
  }
}
