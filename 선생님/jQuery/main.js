$(function(){

    // 메뉴

    $(".main>li, .sub_bg").mouseover(function(){
        
        $(".sub_bg, .sub").stop().slideDown();
        // $(".sub_bg").stop().slideDown();
        // $(".sub").stop().slideDown();
    })//

    $(".main>li , .sub_bg").mouseout(function(){
        $(".sub_bg, .sub").stop().slideUp();
    })//


    // left 슬라이드
    var n = 0; // 0(left:0) 1(left-100%) 2(left-200%)

    var move = setInterval(leftMove , 2500);

    function leftMove(){
        if(n == 2){
            n=0;
        }else{
            n++;
        }//
        pos = n * (-100) + "%";
        $(".left").animate({left :pos }, 500)

    }//

    $(".left").hover(function(){
        clearInterval(move);
    }, function(){
        move = setInterval(leftMove , 2500);
    })//


    // 탭

    $(".tab h2").click(function(){
        $(".tab h2").removeClass("on");
        $(this).addClass("on");
        $(".tab ul").hide();
        $(this).next().css({display:"flex"})

    })

    // 팝업

    $(".p_click").click(function(){
        $(".pop").show();
    })//

    $(".close").click(function(){
        $(".pop").hide();
    })//

})//jquery