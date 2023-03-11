var nome = prompt("Seu Nome:")

function Converter() {

  var valorElemento = document.getElementById("valor");

  var valor = valorElemento.value;

  var valorNumerico = parseFloat(valor);

  var valores = valorNumerico * 3.82;
  var valores1 = valorNumerico * 120182.33

  valores = valores.toFixed(2);

  valores1 = valores1.toFixed(2);

  console.log(valores);

  var elementoValorConvertido = document.getElementById("valorConvertido");

  var valorConvertido = "Olá " + nome + " o valor é R$" + valores + " (Dolar Canadense)" + " e o valor R$" + valores1 + " (BitCoin)";



  elementoValorConvertido.innerHTML = valorConvertido;

}