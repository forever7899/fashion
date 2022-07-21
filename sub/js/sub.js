let moveVer = document.getElementsByClassName('move_ver');
let moveRight = document.getElementsByClassName('move_right');
let moveLeft = document.getElementsByClassName('move_left');
let moveRightBottom = document.getElementsByClassName('move_right_bottom');
let moveLeftBottom = document.getElementsByClassName('move_left_bottom');
const range = 500;
let prevScrollY = 0;

document.addEventListener('scroll', (e)=>{
	function MoveEvent(className){
	
		var screen_center = window.pageYOffset + window.innerHeight/2;
	
		for(var i = 0; i < className.length; i++){
			var one_move = className[i];
			const absoluteTop = window.pageYOffset + one_move.getBoundingClientRect().top;
	
			if(absoluteTop <= screen_center+range && absoluteTop >= screen_center-range ) {
				one_move.classList.add("move");
			} else {
				one_move.classList.remove("move");
			}
		};
	};

	let moveEventVer = new MoveEvent(moveVer);
	let moveEventRight = new MoveEvent(moveRight);
	let moveEventLeft = new MoveEvent(moveLeft);
	let moveEventRightBottom = new MoveEvent(moveRightBottom);
	let moveEventLeftBottom = new MoveEvent(moveLeftBottom);

	const currScrollY = window.pageYOffset;
	const direction = currScrollY > prevScrollY ? "down" : "up";
	prevScrollY = currScrollY;

		let section = document.getElementsByTagName('section');
		var scrollPosition = window.pageYOffset + window.innerHeight;
		const snapRange = 500;

});

