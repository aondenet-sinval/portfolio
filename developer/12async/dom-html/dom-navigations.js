function exibirTitle() {
	myTitle = document.head.Text;
	document.getElementById("exibir").innerHTML = "oi" + myTitle.innerHTML;
}

function exibirH1() {
	myTitle = document.getElementById("exibir").firstChild.nodeValue;
}