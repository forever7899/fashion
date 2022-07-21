let partyTop = document.getElementById('party_top');
let partyBottom = document.getElementById('party_bottom');

let area = 500;

document.addEventListener('scroll', function(){
	var screen_center = window.pageYOffset + window.innerHeight/2;

    var absoluteTop = window.pageYOffset + partyBottom.getBoundingClientRect().top;

    if(absoluteTop <= screen_center+area && absoluteTop >= screen_center-area ) {
        partyTop.style.animation = "party_left 1s ease-out both ";
        partyBottom.style.animation = "party_right 1s ease-out both ";
    } else {
        partyTop.style.removeProperty("animation");
        partyBottom.style.removeProperty("animation");
    };
});