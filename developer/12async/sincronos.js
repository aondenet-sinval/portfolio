function carregarImagem(){

		fetch('./imagens/sucos1.jpeg').then((response) =>{
		
		  let objectURL = URL.createObjectURL(response);
		  image = document.createElement('img');
		  image.src = objectURL;
		  document.body.appendChild(image);
		  
		}).catch ((error)=> {
		console.error('Quebrou aqui mano' + error.message);
		});

};

