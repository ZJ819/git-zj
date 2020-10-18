define(["jquery"], function($){
    function NavDownload(){
        $.ajax({
            url:"../data/nav.json",
            success: function(result){
                for(i = 0;i < 6; i++){
                  console.log(result[i])
                  console.log(result[i].img)
                    var node = $(`<div class="second-nav">
                    </div>`).appendTo('.header-nav')
                var ul=$(`<ul></ul>`).appendTo(node)
               
                // console.log(result[i].img)
                //for(j =0;j<arr1.length;j++)
               // {
                    $(`  <li>
                    <a href="#">
                        <img src="${result[i].img}">
                        <p>${result[i].info}</p>
                    </a>
                </li>`).appendTo(ul)
               
                //}
                }
               
            }, 
            error: function(msg){
                console.log(msg)
            }
        })
    }
    function topNav(){
        $(".top a").mouseenter(function(){
            $(this).css("color", "red")
            $(this).css("border-bottom","3px solid red")
        })
        $(".top a").mouseleave(function(){
            $(this).css("color", "black")
            $(this).css("border-bottom","none")
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