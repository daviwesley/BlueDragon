var imagens = ["img/imagem7.jpg","img/imagem8.jpg","img/imagem9.jpg"];
var indice = 0;

function buildImage() {
  var img = document.createElement('img')
  img.src = imagens[indice];
  document.getElementById('content').appendChild(img);
}

function proxImagem(){
  var img = document.getElementById('content').getElementsByTagName('img')[0]
  indice++;
  indice = indice % imagens.length 
  img.src = imagens[indice];
}

function imagemAnt(){
	var img = document.getElementById('content').getElementsByTagName('img')[0]
	if(indice == 0){
		indice = imagens.length-1;
		img.src = imagens[indice];	
	}else{
		indice--;
		img.src = imagens[indice];
	}
}

setInterval(proxImagem, 5000);
