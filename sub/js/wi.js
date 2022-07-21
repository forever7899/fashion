let items = document.querySelector('.items');
let itemNum = 9;

setInterval(insert,1000);

function insert () {
	let imgList = '';

	for(i=1; i <= itemNum; i++){
		let imgNum = Math.ceil( Math.random()*itemNum);
		imgList += `<li><img src="./images/wi_item/wi_item${imgNum}.png" alt="시그니처상품"></li>`;
	};
	items.innerHTML = imgList
};


