/**
 * 
 * @authors ldx
 * @date    2015-04-25 11:46:09
 * @version $Id$
 */
$(function(){
    // 选项卡
    /*只显示一个li*/
     $(".main-items  a").removeClass('crt');
     $(".main-items  a:first").addClass('crt');
     /*显示对应文本*/
     $(".main-content .g-content").hide();
     $(".main-content .g-content:first").show();
     $(".main-items a").hover(function(){
          $(".main-items  a").removeClass('crt');
          $(this).addClass('crt');
          var n=$(".main-items a").index(this);
          $(".main-content .g-content").hide();
          $(".main-content .g-content").eq(n).show();
    });

    // 提示
    $(".sign-show div").click(function(){
        $(".sign-show").hide();
    });
    
    // 图片自动轮播
    $(".z-btn").hide(); 
     $(".banner-img a").hide();
     $(".banner-img a:first").show();
     var n=0; 
     $(".banner-slider").on("mouseover mouseout",".bann",function(){
        $(".z-btn").toggle();
        $(".current-banner").html(n+1); 
        $(".J_TotalBanner").html($(".banner-img a").length);
      });
      function showImg(){
            if(n<$(".banner-img a").length-1){
            n++;
            }else{
            n=0;
            }
            $(".banner-img a").hide();
            $(".banner-img a").eq(n).show();
            $(".current-banner").html(n+1); 
            $(".J_TotalBanner").html($(".banner-img a").length);
        }
    $(".banner-slider-prev").click(function(){
       if(n>0){
            n--;
            }else{
            n=$(".banner-img a").length-1;
            }
        $(".banner-img a").hide(); 
        $(".banner-img a").eq(n).show();
        $(".current-banner").html(n+1); 
        $(".J_TotalBanner").html($(".banner-img a").length);
        });
     $(".banner-slider-next").click(function(){
       if(n<$(".banner-img a").length-1){
            n++;
            }else{
            n=0;
            }
        $(".banner-img a").hide(); 
        $(".banner-img a").eq(n).show();
        $(".current-banner").html(n+1); 
        $(".J_TotalBanner").html($(".banner-img a").length);
     });
    setInterval(showImg,4000);

});

             

            
    