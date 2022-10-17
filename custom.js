$(document).ready(function () {

    //slick.js : history
    var startCount = 0;

    $(".circle_bar .box").each(function(index){
        //console.log(index);
        var sel_count = $(this).find(".count").attr("data-limit");
        console.log(sel_count);

        $(this).find("circle:eq(1)").css("stroke-dashoffset", `calc(440 - 440 * ${sel_count} / 100)`);

        var counter = setInterval(function(){
            if(startCount < sel_count){
                startCount++;
                console.log(startCount);
                $(".box").eq(index).find(".count").text(startCount);
            }else if(startCount == sel_count){  //startCount++ 도달되었으나 값이 적용되지 않은 경우, 최종적으로 현재 저장된 data-limit 값을 넣겠다는 의미
                $(".box").eq(index).find(".count").text(sel_count);
            }else{
                clearInterval(counter);
            }
        }, 50);
    });
    
    //slick.js : project photo
    $('.project-photo').slick({
        dots:true,
        infinite:true,
        speed:500,
        fade:true,
        autoplay:true,
        autoplaySpeed:2000,
        // 2초동안 머물다가 
        cssEade:'linear'
        // 자연스럽게
    });

});