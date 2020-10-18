define(["jquery"], function($){
    function Glass(){   
        var img = document.querySelectorAll(".goods-middle img")
        $(img[0]).click(function(){
            $(".goods-left img").attr("src","./images/big1.jpg")
            $(".big img").attr("src","./images/big1.jpg")
        })
        $(img[1]).click(function(){
            $(".goods-left img").attr("src","./images/big2.jpg")
            $(".big img").attr("src","./images/big2.jpg")
        })
        $(img[2]).click(function(){
            $(".goods-left img").attr("src","./images/big3.jpg")
            $(".big img").attr("src","./images/big3.jpg")
        })
        $(img[3]).click(function(){
            $(".goods-left img").attr("src","./images/big4.jpg")
            $(".big img").attr("src","./images/big4.jpg")
        })
        $(img[4]).click(function(){
            $(".goods-left img").attr("src","./images/big5.jpg")
            $(".big img").attr("src","./images/big5.jpg")
        })

        $(".goods-left")
          .mouseenter(function () {
            $(".mark,.big").show();
          })
          .mouseleave(function () {
            $(".mark,.big").hide();
          })
          .mousemove(function(ev){
            var l = ev.pageX - $(this).offset().left - 100;
            l = Math.max(0, l);
            l = Math.min(l, 320);
            var t = ev.pageY - $(this).offset().top - 100;
            t = Math.max(0, t);
            t = Math.min(t, 320);
            $(".mark").css({
              left: l,
              top: t
            })
            $(".big img").css({
              left: -2 * l,
              top: -2 * t
            })
          })
        }
        return{
            Glass:Glass
        }
})