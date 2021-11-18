function introduzId() {
		const element = document.getElementById("introduz");
		
		document.getElementById("demo").innerHTML = 
		"Vamos introduzir texto dentro do parágrafo com nome de id demo: " + element.innerHTML;	
}

function introduzTag() {
		const element = document.getElementsByTagName("b");
		
		document.getElementById("demoB").innerHTML = '"Vamos introduzir texto dentro da tag b." ' + element[0].innerHTML;	
}

function introduzClasse() {
		const x = document.querySelectorAll("p.valor");
		document.getElementById("valor").innerHTML = 
		'Primeiro parágrafo (índice 0) na classe valor é: ' + x[0].innerHTML;
}
function retornarLista() {
  var x = document.getElementById("listaRetorna");
  x.value = "12";
}
