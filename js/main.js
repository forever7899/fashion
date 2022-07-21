let circleMenus = document.querySelector('#circle_menu');
let circleMenu = circleMenus.children;
let brandBg = document.querySelectorAll('#bg div');
let title = document.getElementById('title');
let innerTxt = ['빌보드', '이피디벨롭', '와릿이즌', '뉴발란스']
let brandName = document.getElementById('brand-name');


for(let i = 0; i < circleMenu.length; i++) {
    circleMenu[i].addEventListener("mouseover", view)
    circleMenus.addEventListener("mouseleave", hide)

    function hide(){
        title.style.color = "#000";
        brandBg[i].style.opacity = "0"
        circleMenu[i].style.filter = "unset";
        brandName.innerText = 'MUSINSA'
    };

    function view(){

        for(let j = 0; j < circleMenu.length; j++){
            brandBg[j].style.opacity = "0";
            circleMenu[j].style.filter = "brightness(20%)";
        };

        brandBg[i].style.opacity = "1";
        circleMenu[i].style.filter = "unset";
        title.style.color = "#333";
        brandName.innerHTML ='MUSINSA <span>X</span> '+ innerTxt[i]
    };
};


