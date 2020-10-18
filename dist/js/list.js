define(["jquery"], function($){
    function ListDownload(){
            $.ajax({
                url:"../data/list.json",
                success: function(result){
                    for(var i = 0; i< result.length;i++){
                        $(`<div class="pic">
                        <img src="${result[i].img}">
                        <span>${result[i].title}</span>
                        </div>
                        <ul class="list-info clr"></ul>`)
                        .appendTo($(".list-com"));

                    var List = result[i].list
                    for(j = 0; j< List.length; j++){
                        $(`<li>
                            <a href="">
                                <img src="${List[j].img}">
                                <p class="info-p">${List[j].info}</p>
                            </a>                          
                                <p class="info-price">${List[j].price}</p>
                            </li>`).appendTo($(".list-info").eq(i));
                    }
                    }
                }, 
                error: function(msg){
                    console.log(msg)
                }
            })
        }
        return{
            ListDownload:ListDownload
        }
})
    