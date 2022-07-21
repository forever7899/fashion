let gallery = document.querySelector('.gallery');
let galleryList = document.querySelector('.gallery').children;
let galleryBox = document.querySelector('.gallery_box');
let imgWidth = galleryBox.clientWidth;
let imgCount = galleryList.length;
let currentIdx = 0;

gallery.style.width = imgCount*100 +'%';

function moveImg(num) {

	if(num <= imgCount-1){
		gallery.style.left = -num*100 +"%";
		currentIdx = num
	}

	if(num === imgCount-1){
		gallery.style.left = -num*100 +"%";
		currentIdx = -1;
	}

	if(num === imgCount){
		gallery.style.left = 0;
		currentIdx = -1;
	}
};

setInterval(function(){
	moveImg(currentIdx+1)
},2000);