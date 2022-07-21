$(function(){
    var container = $('.full-bg');
    $(window).resize(function(){
        var currentWindow = $(this),
            windowWidth = currentWindow.width(),
            windowHeight = currentWindow.height(),
            broswerRatio = windowWidth / windowHeight,
            imageRatio = 2000 / 1333;
        if(imageRatio > broswerRatil) {
            container.css({
                height:'100%',
                width:windowHeight * imageRatio,
                left:(windowHeight * imageRatio - windowWidth)/2,
                top:0,
            })

        } else{
            container.css({
                height:windowWidth/imageRatio, //이미지 너비 / 이미지 비율
                width:'100%',
                left:0,
                top:(windowHeight - windowWidth/imageRatio)/2, //(브라우저 높이 -이미지 높이)/2
            })

        }
    });
});//document ready