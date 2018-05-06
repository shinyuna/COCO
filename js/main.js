$(document).ready(function(){
    $('#fullpage').fullpage({
                anchors: ['Page01', 'Page02', 'Page03', 'Page04', 'Page05', 'Page06', 'Page07', 'Page08', 'Page09', 'Page10', 'Page11'],

        navigation: true,
        navigationTooltips: ['Page01', 'Page02', 'Page03'],

        afterLoad: function(anchorLink, index){
            console.log(anchorLink,index);
            if(index==1){
                $("#section01 .logo").stop().delay(100).fadeIn();
            }else{
                $("#section01 .logo").stop().delay().fadeOut();
            }
            if(index==2){
                $("#section02 #dragon").addClass("dragon_keyframes");
                $("#section02 #bubble").stop().delay(2000).fadeIn();
            }else{
                $("#section02 #bubble").stop().delay().fadeOut();
                $("#section02 #dragon").removeClass("dragon_keyframes");
            }
        }

    });
    
    
//TweenMax 움직이는 요소
    var pepita = document.getElementById("pepita");
    TweenMax.to(pepita,40,{css:{right:"1900px"},repeat:-1,yoyo:false,repeatDelay:0,});
    TweenMax.to(pepita,4,{css:{top:"700px"},repeat:-1,yoyo:true,repeatDelay:0,ease:Linear.easeNone});
    
    var cd = document.getElementById("cd");
    TweenMax.to(cd,4,{css:{left:"15%"},repeat:-1,yoyo:true,repeatDelay:0});
 
//   윈도우 사이즈에 따라 heigth 크기 변경
    $('.section').css('height', $(window).height());
    $(window).resize(function(){
        $('.section').css('height',$(window).height());
    });
//swiper
 var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
});