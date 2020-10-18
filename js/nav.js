define(["jquery"], function($){
    function NavDownload(){
        $.ajax({
            url:"../data/nav.json",
            success: function(result){
                for(var i = 0;i < result.length; i++){
                
                var node=$(`<ul></ul>`).appendTo('.second-nav')
               
                console.log(result[i])
                var node1=result[i];
                for(var j=0;j<node1.length;j++)
               {
                    $(`  <li>
                    <a href="#">
                        <img src="${node1[j].img}">
                        <p>${node1[j].info}</p>
                    </a>
                </li>`).appendTo(node)
               
                }
               }
               
            }, 
            error: function(msg){
                console.log(msg)
            }
        })
    }
    function topNav(){
        $(".top li").mouseenter(function(){
          $(".top a").css("color", "black") 
          $(".top li").css("border-bottom","none")
          $(".second-nav ul").css("display","none")
          $(".top li").eq($(this).index()).find("a").css("color", "red")
          $(this).css("border-bottom","3px solid red")
          if(!$(this).index()==0){
          $(".second-nav ul").eq($(this).index()-1).css("display","block")
          }
         
        })
        $(".header-nav").mouseleave(function(){
          $(".top a").css("color", "black") 
            $(".top a").css("border-bottom","none")
            $(".second-nav ul").css("display","none")
        })

        
    }

    //轮播图
    function banner(){
        $(function(){
          var oUl = $(".banner").find("ul");
          var iNow = 0;
          var timer = null;
  
  
          timer = setInterval(function(){
            iNow++;
            tab();
          }, 2000);
  
          $(".banner").mouseenter(function(){
            clearInterval(timer);
          })
  
          $(".banner").mouseleave(function(){
            timer = setInterval(function(){
              iNow++;
              tab();
            }, 2000);
          })
  
  
          function tab(){
            oUl.animate({left: iNow * -1200}, 500, function(){
              if(iNow == 5){
                iNow = 0;
                oUl.css("left", -1200);
              }
            });
          }
        })
      }    
    return {
        NavDownload:NavDownload,
        topNav:topNav,
        banner:banner
    }
})