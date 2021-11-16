
function mostrarSuco() {
	   console.time();
		fetch('./imagens/sucos2.jpeg').then((response) => {
		  setTimeout(console.log('Aguardando 3 segundos'), 300);
		  return response.blob();
		  console.timeEnd();
		})
		.then((response)=>{
			fetch('./imagens/sucos1.jpeg');
			return response.blob();		
		}).then((myBlob) => {
		  let objectURL = URL.createObjectURL(myBlob);
		  image = document.createElement('img');
		  image.src = objectURL;
		  document.body.appendChild(image);
		}).catch((error) => {
		  console.log('Deu ruim: ' + error.message);
		});
}